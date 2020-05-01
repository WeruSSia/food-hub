<template>
	<div ref="recipe" class="recipe">
		<vue-headful :title="recipe.title" />
		<BasicInfo
			:recipe="recipe"
			:is-recipe-in-favourites.sync="isRecipeInFavourites"
			:logged-in="loggedIn"
		/>
		<Ingredients :recipe="recipe" />
		<Directions :recipe="recipe" />
		<NutritionFacts :recipe="recipe" />
	</div>
</template>

<script>
import BasicInfo from "@/components/recipe/BasicInfo.vue";
import Ingredients from "@/components/recipe/Ingredients.vue";
import Directions from "@/components/recipe/Directions.vue";
import NutritionFacts from "@/components/recipe/NutritionFacts.vue";
import store from "../store/index.js";
import { getRecipe } from "../services/SpoonacularServices.js";
import {
	addToUserSearchHistory,
	checkIfRecipeIsInFavourites,
} from "../services/FirebaseServices.js";

export default {
	name: "Recipe",
	components: {
		BasicInfo,
		Ingredients,
		Directions,
		NutritionFacts,
	},
	computed: {
		loggedIn() {
			return store.state.isUserLoggedIn;
		},
	},
	data() {
		return {
			recipe: {},
			isRecipeInFavourites: false,
		};
	},
	mounted() {
		window.scrollTo({
			top: this.$el.offsetTop,
			behavior: "smooth",
		});
		this.getRecipeInfo();
	},
	watch: {
		loggedIn() {
			if (this.loggedIn) {
				const loader = this.$loading.show({
					container: this.$refs["recipe"],
					canCancel: false,
				});
				this.checkIfAlreadyFavourite(loader);
			}
		},
	},
	methods: {
		async getRecipeInfo() {
			const loader = this.$loading.show({
				container: this.$refs["recipe"],
				canCancel: false,
			});
			const result = await getRecipe(this.$route.params.id);
			if (result) {
				this.recipe = result;
				const recipeData = {
					title: this.recipe.title,
					image: this.recipe.image || "",
					id: this.recipe.id,
					dateTime: Math.round(+new Date() / 1000),
				};
				await this.addToUserHistory(recipeData, loader);
			} else {
				loader.hide();
			}
		},
		async addToUserHistory(recipeData, loader) {
			setTimeout(() => {
				addToUserSearchHistory(recipeData).then(async result => {
					if (result) {
						await this.checkIfAlreadyFavourite(loader);
					} else {
						loader.hide();
					}
				});
			}, 1500);
		},
		async checkIfAlreadyFavourite(loader) {
			setTimeout(() => {
				checkIfRecipeIsInFavourites(Number(this.$route.params.id))
					.then(result => {
						this.isRecipeInFavourites = result;
					})
					.finally(() => loader.hide());
			}, 1500);
		},
	},
};
</script>
<style scoped>
.recipe {
	page-break-after: avoid;
	page-break-before: avoid;
	page-break-inside: avoid;
}
</style>
