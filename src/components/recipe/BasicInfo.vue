<template>
	<div>
		<div class="header">
			<div class="recipe-name-div">
				<span class="recipe-name">{{ recipe.title }}</span>
			</div>
			<div class="recipe-info">
				<div class="calories">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
						/>
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
					{{ calories }} cals
				</div>
				<div class="servings">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path
							d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"
						/>
					</svg>
					{{ recipe.servings }} servings
				</div>

				<div class="preparation-time">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
						/>
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
					</svg>
					{{ recipe.readyInMinutes }} mins
				</div>
			</div>
		</div>
		<div class="gallery"><img :src="recipe.image" /></div>
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
.recipe-name-div {
	font-size: 26px;
	padding: 0 5px 5px 5px;
	width: 55%;
	float: left;
	text-align: left;
}

.recipe-info {
	float: right;
	font-size: 14px;
	width: 40%;
	padding: 0 5px 5px 5px;
	vertical-align: middle;
	white-space: nowrap;
}

.servings,
.preparation-time,
.calories {
	float: right;
	padding-right: 20px;
}

.recipe-name {
	color: #333333;
	font-family: "Poppins";
	font-weight: 600;
}
.header {
	border-bottom: 2px solid rgb(236, 236, 236);
	width: 95%;
	margin: auto;
	overflow: hidden;
	display: inline-block;
}

svg {
	fill: #555555;
	height: 34px;
	width: 34px;
	vertical-align: middle;
}

span {
	color: #555555;
}
</style>