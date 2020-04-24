<template>
	<!-- typing /results in page address -->
	<div
		v-if="
			(searchResultFromVuex == null && searchDataFromVuex == null) ||
				Object.keys(searchResultFromVuex).length === 0 ||
				Object.keys(searchResultFromVuex).length === 0
		"
	>
		<h3>You should search some recipes first!</h3>
	</div>

	<!-- no results found -->
	<div v-else-if="searchResultFromVuex.totalResults === 0">
		<h2>We're sorry, no results have been found...</h2>
		<h3 class="subcaption">See other recipes and smart cooking ideas:</h3>
		<div class="results">
			<CardsContainer :recipe-list="randomRecipeList" />
		</div>
	</div>

	<!-- at least 1 result found -->
	<div v-else class="container">
		<div class="heading">
			<h2>
				{{ searchResultFromVuex.totalResults }} results have been found
				for your query!
			</h2>
			<div
				v-if="
					searchDataFromVuex.includes !== null ||
						searchDataFromVuex.excludes !== null
				"
				class="ingredients"
			>
				<div
					class="includingExcluding"
					v-for="(item, index) in searchDataFromVuex.includes"
					:key="index"
				>
					<div class="plus">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							width="24px"
							height="24px"
						>
							<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</div>
					<div class="ingredient">{{ item }}</div>
				</div>
				<div
					class="includingExcluding"
					v-for="(item, index) in searchDataFromVuex.excludes"
					:key="index"
				>
					<div class="minus">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							width="24px"
							height="24px"
						>
							<path d="M19 13H5v-2h14v2z" />
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</div>
					<div class="ingredient">{{ item }}</div>
				</div>
			</div>
		</div>
		<hr />
		<div class="results">
			<CardsContainer
				:recipe-list="searchResultFromVuex.results"
				:recipes-per-page="9"
			/>
		</div>
	</div>
</template>

<script>
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
import store from "../store/index.js";

//TODO: Change this to get random recipe API call
import { getMockRecipeList } from "../mock/RecipeData.js";

export default {
	name: "SearchResults",
	components: {
		CardsContainer,
	},
	data() {
		return {
			randomRecipeList: getMockRecipeList(),
		};
	},
	computed: {
		searchResultFromVuex() {
			return store.state.searchResult;
		},
		searchDataFromVuex() {
			return store.state.searchData;
		},
	},
	watch: {
		searchDataFromVuex() {
			//handle searching here, I am leaving this here becuase of how router works, you cannot use mounted
		},
	},
};
</script>

<style scoped>
h2 {
	display: flex;
	margin-top: 10px;
	margin-bottom: 5px;
	margin-left: 2.4%;
}

hr {
	width: 95%;
	margin-top: 5px;
	margin-bottom: 25px;
	border: 1px solid #eeeeee;
	background-color: #eeeeee;
}

.heading {
	display: inline-block;
	width: 100%;
}

.ingredients {
	display: inline-flex;
	width: 95.5%;
	min-height: 30px;
	margin-bottom: 15px;
	padding-left: 20px;
	padding-right: 2%;
	flex-wrap: wrap;
	align-items: center;
	justify-items: center;
}

.includingExcluding {
	display: inline-flex;
	margin-top: 5px;
	margin-right: 15px;
}

.ingredient {
	padding-top: 2px;
	padding-left: 7px;
	text-align: center;
	font-size: 14px;
}

.plus {
	width: 24px;
	height: 24px;
	align-items: center;
	justify-items: center;
	border-radius: 5px;
	background-color: #ea0a2a;
}

.minus {
	width: 24px;
	height: 24px;
	align-items: center;
	justify-items: center;
	border-radius: 5px;
	background-color: #555555;
}

.results {
	display: grid;
	row-gap: 20px;
	margin-bottom: 20px;
}
</style>
