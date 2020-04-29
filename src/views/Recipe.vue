<template>
	<div ref="recipe" class="recipe">
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
import { getRecipe } from "../services/services.js";
import * as firebase from "firebase/app";
import store from "../store/index.js";
require("firebase/auth");
import "firebase/database";

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
				const user = firebase.auth().currentUser;
				if (user) {
					this.checkIfAlreadyFavourite(user, loader);
				}
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
				var user = firebase.auth().currentUser;
				var data = {
					title: this.recipe.title,
					image: this.recipe.image || "",
					id: this.recipe.id,
				};
				if (user) {
					var userId = user.uid;
					var database = firebase.database();
					var ref = database.ref("users/" + userId + "/history");
					ref.push(data);
					await this.checkIfAlreadyFavourite(user, loader);
				} else {
					loader.hide();
				}
			}
		},
		async checkIfAlreadyFavourite(user, loader) {
			setTimeout(() => {
				const userId = user.uid;
				firebase
					.database()
					.ref("users/" + userId + "/favourites")
					.once("value")
					.then(async snapshot => {
						const result = snapshot.val();
						if (result) {
							for (const recipe of Object.values(result)) {
								if (
									recipe.id === Number(this.$route.params.id)
								) {
									this.isRecipeInFavourites = true;
									break;
								}
							}
						}
					})
					.finally(() => loader.hide());
			}, 1500);
		},
	},
};
</script>
