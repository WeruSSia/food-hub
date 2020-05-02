<template>
	<div class="footer">
		<div class="footer-info">
			<span>
				Copyright © 2020 FoodHUB Project Team. <br class="break" />
				All rights reserved.
			</span>
			<span @click="goToAboutPage" class="about">About the project</span>
			<span>
				<span>Recipes powered by </span>
				<span @click="goToSpoonacular" class="spoonacular">
					spoonacularAPI
				</span>
				<span>.</span>
			</span>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		goToAboutPage() {
			this.$router.push("/about").catch(() => {});
		},
		goToSpoonacular() {
			const win = window.open(
				"https://spoonacular.com/food-api",
				"_blank"
			);
			win.focus();
		},
	},
};
</script>
<style scoped>
.footer {
	align-items: center;
	background-color: rgba(85, 85, 85, 1);
	bottom: 0;
	color: #ffffff;
	display: flex;
	justify-content: center;
	height: 90px;
	position: absolute;
	width: 100%;
}

@media print {
	.footer {
		background-color: white;
		color: black;
		position: fixed;
		bottom: 0;
	}
	.about {
		display: none;
	}
}

.footer-info {
	margin: 20px;
	display: flex;
	flex-direction: column;
	font-size: 16px;
}
.spoonacular,
.about {
	text-decoration: underline;
	cursor: pointer;
}

.spoonacular:hover,
.about:hover {
	color: #bbbbbb;
}

.break {
	display: none;
}

@media screen and (max-width: 650px) {
	.footer-info {
		font-size: 15px;
	}
}

@media screen and (max-width: 500px) {
	.footer-info {
		font-size: 13px;
	}
}

@media screen and (max-width: 450px) {
	.break {
		display: block;
	}
}
</style>
