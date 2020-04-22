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
import { getRecipeById } from "../mock/RecipeData";
export default {
	name: "Recipe",
	components: {
		BasicInfo,
		Ingredients,
		Directions,
		NutritionFacts,
	},
	mounted() {
		this.recipe = getRecipeById(this.$route.params.id);
	},
	data() {
		return {
			recipe: {},
		};
	},
};
</script>
