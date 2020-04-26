<template>
	<div class="home">
		<Carousel />
		<CardsContainer :recipe-list="randomRecipeList" :recipes-per-page="6" />
	</div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
import { getRandomRecipes } from "../services/services.js";

export default {
	name: "HomePage",
	components: {
		Carousel,
		CardsContainer,
	},
	data() {
		return {
			randomRecipeList: [],
		};
	},
	beforeMount() {
		this.getRandomRecipes();
	},
	methods: {
		async getRandomRecipes() {
			const result = await getRandomRecipes();
			if (result) {
				this.randomRecipeList = result;
			}
		},
	},
};
</script>
<style scoped>
.home {
	display: grid;
	row-gap: 20px;
	margin-bottom: 20px;
}
</style>
