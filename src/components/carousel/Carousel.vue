<template>
	<carousel
		:perPage="1"
		:loop="true"
		:autoplay="true"
		:autoplayTimeout="5000"
		:centerMode="true"
	>
		<slide>
			<img src="../../assets/slide1.jpg" />
			<div class="slide-description">
				Search for recipes by entering the ingredients that you have
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide2.jpg" />
			<div class="slide-description">
				Mark which ingredients are not to appear in the recipe
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide3.jpg" />
			<div class="slide-description">
				Follow the recipes without any problems thanks to clear and
				simple steps
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide4.jpg" />
			<div class="slide-description">
				Store the best recipes in one place by adding them to favourites
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide5.jpg" />
			<div class="slide-description">
				Browse the history of recently seen recipes
			</div>
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
img {
	width: 960px;
	height: 483px;
	object-fit: cover;
}

.slide-description {
	background: gray;
	opacity: 70%;
	position: absolute;
	bottom: 20px;
	color: white;
	height: 20%;
	width: 100%;
	padding: 15px;
	font-size: 1em;
	font-family: "Courier New", Courier, monospace;
}

@media only screen and (max-width: 370px) {
	img,
	.slide-description {
		width: 370px;
	}
}
</style>