<template>
	<div class="recipe">
		<BasicInfo :recipe="recipe" />
	</div>
</template>

<script>
import BasicInfo from "@/components/recipe/BasicInfo.vue";
import { getRecipeById } from "../mock/RecipeData";
export default {
	name: "Recipe",
	components: {
		BasicInfo,
	},
	mounted() {
		this.recipe = getRecipeById(this.$route.params.id);
	},
	data() {
		return {
			recipe: null,
		};
	},
};
</script>
