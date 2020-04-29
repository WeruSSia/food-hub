<template>
	<div class="footer">
		<span class="footer-info">
			Copyright © 2020 FoodHUB Project Team. All rights reserved.
			<span @click="goToAboutPage" class="about">About</span></span
		>
	</div>
</template>
<script>
export default {
	methods: {
		goToAboutPage() {
			this.$router.push("/about").catch(() => {});
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
	height: 80px;
	position: absolute;
	width: 100%;
}
.footer-info {
	margin: 20px;
}
.about {
	color: #ffffff;
	text-decoration: underline;
	cursor: pointer;
}
.about:hover {
	color: #bbbbbb;
}
</style>
