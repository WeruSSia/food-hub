<template>
	<div class="history">
		<div class="history-header">
			<p class="history-header-title">
				{{ historyHeaderTitle }}
			</p>
		</div>
		<CardsContainer
			:recipe-list="historyRecipeList"
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
	name: "history",
	components: {
		CardsContainer,
	},
	computed: {
		historyHeaderTitle() {
			return `Your recent searches (${this.historyRecipeList.length})`;
		},
	},
	data() {
		return {
			historyRecipeList: [],
		};
	},
	beforeMount() {
		this.initializeHistory();
	},
	methods: {
		async initializeHistory() {
			const user = firebase.auth().currentUser;
			if (user) {
				const userId = user.uid;
				firebase
					.database()
					.ref("users/" + userId + "/history")
					.once("value")
					.then(snapshot => {
						const result = snapshot.val();
						this.historyRecipeList = Object.values(result).map(
							recipe => recipe
						);
					});
			}
		},
	},
};
</script>
<style scoped>
.history {
	display: grid;
	row-gap: 20px;
	margin-bottom: 20px;
}

.history-header {
	padding-top: 10px;
	padding-left: 20px;
	padding-right: 20px;
}

.history-header:after {
	content: "\a0";
	display: block;
	padding: 2px 0;
	line-height: 1px;
	border-bottom: 1px solid rgb(238, 238, 238);
}

.history-header-title {
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
	.history-header-title {
		font-size: 24px;
	}
}

@media screen and (max-width: 500px) {
	.history-header-title {
		font-size: 22px;
	}
}

@media screen and (max-width: 450px) {
	.history-header-title {
		font-size: 20px;
	}
}

@media screen and (max-width: 400px) {
	.history-header-title {
		font-size: 18px;
	}
}
</style>
