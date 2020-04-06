<template>
	<carousel :autoplay="true" :loop="true" :autoplayTimeout="5000" :perPage="1" :centerMode="true">
		<slide>
			<img src="../../assets/food-hub-logo.png" />
		</slide>
		<slide>
			<img src="../../assets/food-hub-logo.png" />
		</slide>
		<slide>
			<img src="../../assets/food-hub-logo.png" />
		</slide>
		<slide>
			<img src="../../assets/food-hub-logo.png" />
		</slide>
		<slide>
			<img src="../../assets/food-hub-logo.png" />
		</slide>
	</carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
	components: {
		Carousel,
		Slide,
	},
};
</script>

<style scoped>
</style>