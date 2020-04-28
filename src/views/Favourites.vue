<template>
	<div ref="favourites" class="favourites">
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
import * as firebase from "firebase/app";
require("firebase/auth");
import "firebase/database";

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
				const user = firebase.auth().currentUser;
				if (user) {
					const userId = user.uid;
					firebase
						.database()
						.ref("users/" + userId + "/favourites")
						.once("value")
						.then(async snapshot => {
							const result = snapshot.val();
							if (result) {
								this.favouriteRecipeList = Object.values(
									result
								).map(recipe => recipe);
								this.favouritesHeaderTitle = `Your favourite recipe list (${this.favouriteRecipeList.length})`;
							}
						})
						.finally(() => loader.hide());
				}
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
