<template>
	<div class="home">
		<button @click="searchStarted = !searchStarted">Start searching</button>
		<Carousel v-if="!searchStarted" />
		<CardsContainer v-else />
	</div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
export default {
	name: "HomePage",
	components: {
		Carousel,
		CardsContainer,
	},
	data() {
		return {
			searchStarted: false,
		};
	},
};
</script>
<style scoped>
.home {
	display: flex;
	flex-direction: column;
}
</style>
