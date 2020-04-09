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
				<div class="slide-description-text">
					Search for recipes by entering the ingredients that you have
				</div>
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide2.jpg" />
			<div class="slide-description">
				<div class="slide-description-text">
					Mark which ingredients are not to appear in the recipe
				</div>
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide3.jpg" />
			<div class="slide-description">
				<div class="slide-description-text">
					Follow the recipes without any problems thanks to simple
					steps
				</div>
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide4.jpg" />
			<div class="slide-description">
				<div class="slide-description-text">
					Store the best recipes in one place by adding them to
					favourites
				</div>
			</div>
		</slide>
		<slide>
			<img src="../../assets/slide5.jpg" />
			<div class="slide-description">
				<div class="slide-description-text">
					Browse the history of recently seen recipes
				</div>
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
	width: 100%;
	height: 483px;
	object-fit: cover;
}

.slide-description {
	background: gray;
	opacity: 70%;
	position: absolute;
	bottom: 20px;
	height: 30%;
	width: 100%;
}

.slide-description-text {
	color: white;
	font-family: "Poppins", sans-serif;
	text-align: left;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	padding-left: 12px;
	padding-right: 12px;
}

@media screen and (min-width: 400px) {
	.slide-description-text {
		font-size: 30px;
	}
}

@media screen and (max-width: 401px) {
	img {
		height: 300px;
	}
	.slide-description-text {
		font-size: 20px;
	}
}
</style>