<template>
	<div class="recipe">
		<BasicInfo :recipe="recipe" />
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

export default {
	name: "Recipe",
	components: {
		BasicInfo,
		Ingredients,
		Directions,
		NutritionFacts,
	},
	beforeMount() {
		this.recipe = this.getRecipeInfo;
	},
	data() {
		return {
			recipe: {},
		};
	},
	methods: {
		async getRecipeInfo() {
			return await getRecipe(this.$route.params.id);
		}
	}
};
</script>
