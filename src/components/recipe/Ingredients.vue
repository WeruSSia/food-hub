<template>
	<div>
		<div class="header">
			<span class="header-name">
				Ingredients
			</span>
		</div>
		<div class="ingredients-list">
			<div
				class="checkbox"
				v-for="ingredient in recipe.extendedIngredients"
				v-bind:key="ingredient.id"
			>
				<p class="checkbox-p">
					<input type="checkbox" class="checkbox-input" />
					<label class="checkbox-label">
						{{ ingredient.original }}</label
					>
				</p>
			</div>
		</div>
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
};
</script>

<style scoped>
.header {
	border-bottom: 1.5px solid rgb(236, 236, 236);
	width: 95%;
	margin: auto;
	text-align: left;
}
.header-name {
	color: #333333;
	font-size: 26px;
	padding: 5px;
}
.ingredients-list {
	text-align: left;
	padding: 20px 50px 20px 50px;
	font-size: 14px;
}
.checkbox-input {
	width: 30px;
	height: 30px;
}
label {
	display: block;
	margin-top: -30px;
	margin-left: 50px;
}
</style>