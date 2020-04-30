<template>
	<div ref="favourites" class="favourites">
		<vue-headful title="Favourite recipes" />
		<div class="favourites-header">
			<p class="favourites-header-title">
				{{ favouritesHeaderTitle }}
			</p>
		</div>
		<CardsContainer
			:recipe-list="favouriteRecipeList"
			:recipes-per-page="9"
		/>
	</div>
</template>

<script>
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
import { getUserFavourites } from "../services/FirebaseServices.js";

export default {
	name: "Favourites",
	components: {
		CardsContainer,
	},
	data() {
		return {
			favouritesHeaderTitle: "Your favourite recipe list is empty",
			favouriteRecipeList: [],
		};
	},
	mounted() {
		this.initializeFavourites();
	},
	methods: {
		async initializeFavourites() {
			const loader = this.$loading.show({
				container: this.$refs["favourites"],
				canCancel: false,
			});
			setTimeout(() => {
				getUserFavourites()
					.then(result => {
						if (result && result.length > 0) {
							this.favouriteRecipeList = result;
							this.favouritesHeaderTitle = `Your favourite recipe list (${result.length})`;
						}
					})
					.finally(() => loader.hide());
			}, 1500);
		},
	},
};
</script>
<style scoped>
.favourites {
	display: grid;
	row-gap: 20px;
	margin-bottom: 20px;
}

.favourites-header {
	padding-top: 10px;
	padding-left: 20px;
	padding-right: 20px;
}

.favourites-header:after {
	content: "\a0";
	display: block;
	padding: 2px 0;
	line-height: 1px;
	border-bottom: 1px solid rgb(238, 238, 238);
}

.favourites-header-title {
	color: rgb(51, 51, 51);
	font-weight: 600;
	font-style: normal;
	font-size: 26px;
	font-family: "Poppins SemiBold", "Poppins Regular", "Poppins", sans-serif;
	padding-left: 10px;
	padding-bottom: 5px;
	text-align: start;
	margin-block-start: 0px;
	margin-block-end: 0;
}

@media screen and (max-width: 600px) {
	.favourites-header-title {
		font-size: 24px;
	}
}

@media screen and (max-width: 500px) {
	.favourites-header-title {
		font-size: 22px;
	}
}

@media screen and (max-width: 450px) {
	.favourites-header-title {
		font-size: 20px;
	}
}

@media screen and (max-width: 400px) {
	.favourites-header-title {
		font-size: 18px;
	}
}
</style>
