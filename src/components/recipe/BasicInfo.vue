<template>
	<div>
		<div class="header">
			<div class="recipe-name">{{ recipe.title }}</div>
			<div class="recipe-info">
				<div class="preparation-time">
					{{ recipe.readyInMinutes }} mins
				</div>
				<div class="servings">{{ recipe.servings }} servings</div>
				<div class="calories">{{ calories }} cals</div>
			</div>
		</div>
		<div class="gallery"></div>
		<div class="action-bar"></div>
	</div>
</template>

<script>
export default {
	props: {
		recipe: {
			type: Object,
			required: true,
		},
	},
	computed: {
		calories() {
			return this.recipe.nutrition.nutrients[0].amount.toFixed(0);
		},
	},
};
</script>
 
<style scoped>
</style>