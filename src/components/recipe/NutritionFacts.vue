<template>
	<div class="nutritions">
		<div class="header">
			<span class="header-name">
				{{ headerTitle }}
			</span>
		</div>
		<div class="facts">
			<div class="per">
				<span>{{ perServing }}</span>
			</div>
			<div class="nutrition-facts">
				<div>
					<span class="amount">{{
						countAmountPerServing(getNutrients(0).amount)
					}}</span>
					calories
				</div>
				<div>
					<span class="amount">
						{{ countAmountPerServing(getNutrients(1).amount) }}
						{{ getNutrients(1).unit }}</span
					>
					fat
				</div>
				<div>
					<span class="amount">
						{{ countAmountPerServing(getNutrients(7).amount) }}
						{{ getNutrients(7).unit }}</span
					>
					sodium
				</div>
				<div>
					<span class="amount">
						{{ countAmountPerServing(getNutrients(9).amount) }}
						{{ getNutrients(9).unit }}</span
					>
					protein
				</div>
				<div>
					<span class="amount">
						{{ countAmountPerServing(getNutrients(3).amount) }}
						{{ getNutrients(3).unit }}</span
					>
					carbohydrates
				</div>
				<div>
					<span class="amount">
						{{ countAmountPerServing(getNutrients(6).amount) }}
						{{ getNutrients(6).unit }}</span
					>
					cholesterol
				</div>
			</div>
		</div>
		<div class="facts">
			<div class="per">
				<span>{{ perDish }}</span>
			</div>
			<div class="nutrition-facts">
				<div>
					<span class="amount">{{ getNutrients(0).amount }}</span>
					calories
				</div>
				<div>
					<span class="amount">
						{{ getNutrients(1).amount }}
						{{ getNutrients(1).unit }}</span
					>
					fat
				</div>
				<div>
					<span class="amount">
						{{ getNutrients(7).amount }}
						{{ getNutrients(7).unit }}</span
					>
					sodium
				</div>
				<div>
					<span class="amount">
						{{ getNutrients(9).amount }}
						{{ getNutrients(9).unit }}</span
					>
					protein
				</div>
				<div>
					<span class="amount">
						{{ getNutrients(3).amount }}
						{{ getNutrients(3).unit }}</span
					>
					carbohydrates
				</div>
				<div>
					<span class="amount">
						{{ getNutrients(6).amount }}
						{{ getNutrients(6).unit }}</span
					>
					cholesterol
				</div>
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
	data() {
		return {
			headerTitle: "Nutrition facts",
			perServing: "Per serving:",
			perDish: "Per dish:",
		};
	},
	methods: {
		getNutrients: function(index) {
			let value = "";
			if (Object.keys(this.recipe).length > 0) {
				value = this.recipe.nutrition.nutrients[index];
			}
			return value;
		},
		countAmountPerServing(nutrient) {
			return (nutrient / this.recipe.servings).toFixed(0);
		},
	},
};
</script>

<style scoped>
.nutritions {
	page-break-after: avoid;
	page-break-before: avoid;
	page-break-inside: avoid;
}

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
.facts {
	text-align: left;
	color: #555555;
	padding: 20px 0 20px 0;
}
.per {
	padding: 20px 40px 20px 50px;
	display: inline-block;
	vertical-align: middle;
	width: 10%;
	font-weight: 600;
}
.nutrition-facts {
	width: 70%;
	display: inline-block;
	vertical-align: middle;
	column-count: 3;
	column-gap: 30px;
}

.amount {
	font-weight: 600;
	color: red;
	white-space: nowrap;
}

@media screen and (max-width: 600px) {
	.nutrition-facts {
		width: 60%;
		display: inline-block;
		vertical-align: middle;
		column-count: 2;
		column-gap: 30px;
	}
}

@media screen and (max-width: 470px) {
	.nutrition-facts {
		width: 60%;
		display: inline-block;
		vertical-align: middle;
		column-count: 1;
		padding-left: 20px;
	}
	.per {
		padding-right: 30px;
	}
}
</style>
