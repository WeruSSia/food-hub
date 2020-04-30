<template>
	<div ref="results">
		<!-- typing /results in page address -->
		<div
			v-if="
				searchDataFromVuex == null ||
					Object.keys(result).length === 0 ||
					Object.keys(searchDataFromVuex).length === 0
			"
		>
			<h3>No results have been found</h3>
		</div>

		<!-- no results found -->
		<div v-else-if="result.totalResults === 0">
			<h2>We're sorry, no results have been found...</h2>
			<h3 class="subcaption">
				See other recipes and smart cooking ideas:
			</h3>
			<div class="results">
				<CardsContainer
					:recipe-list="randomRecipeList"
					:recipes-per-page="9"
				/>
			</div>
		</div>

		<!-- no data provided -->
		<div
			v-else-if="
				(searchDataFromVuex.includes == null &&
					searchDataFromVuex.excludes == null &&
					searchDataFromVuex.queryString === '') ||
					(searchDataFromVuex.queryString === '' &&
						!searchDataFromVuex.includes.length &&
						!searchDataFromVuex.excludes.length)
			"
		>
			<h2>We're sorry, no results have been found...</h2>
			<h3 class="subcaption">
				See other recipes and smart cooking ideas:
			</h3>
			<div class="results">
				<CardsContainer
					:recipe-list="result.results"
					:recipes-per-page="9"
				/>
			</div>
		</div>

		<!-- at least 1 result found -->
		<div v-else class="container">
			<div class="heading">
				<h2 v-if="result.totalResults === 1">
					{{ result.totalResults }} result have been found for your
					query!
				</h2>
				<h2
					v-else-if="
						result.totalResults < 20 && result.totalResults > 1
					"
				>
					{{ result.totalResults }} results have been found for your
					query!
				</h2>
				<h2 v-else>
					{{ result.number }} results have been found for your query!
				</h2>
				<div
					v-if="
						(searchDataFromVuex.includes !== null &&
							searchDataFromVuex.includes.length !== 0) ||
							(searchDataFromVuex.excludes !== null &&
								searchDataFromVuex.excludes.length !== 0)
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
					:recipe-list="result.results"
					:recipes-per-page="9"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
import store from "../store/index.js";
import { getRandomRecipes } from "../services/services.js";
import { getResultByName } from "../services/services.js";
import { getComplexSearch } from "../services/services.js";

export default {
	name: "SearchResults",
	components: {
		CardsContainer,
	},
	data() {
		return {
			result: {},
			randomRecipeList: [],
		};
	},
	computed: {
		searchDataFromVuex() {
			return store.state.searchData;
		},
	},
	watch: {
		searchDataFromVuex: {
			handler() {
				if (this.searchDataFromVuex) {
					const loader = this.$loading.show({
						container: this.$refs["results"],
						canCancel: false,
					});
					this.getResults(this.searchDataFromVuex, loader);
				}
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		async getResults(dataFromVuex, loader) {
			var query = dataFromVuex.queryString;
			var include = dataFromVuex.includes.join();
			var exclude = dataFromVuex.excludes.join();

			if (include !== "" || exclude !== "") {
				const result = await getComplexSearch(query, include, exclude);
				if (result.results.length === 0) {
					this.getRandomRecipes(loader);
				} else {
					this.result = result;
					loader.hide();
				}
			} else {
				const result = await getResultByName(query);
				if (result.results.length === 0) {
					this.getRandomRecipes(loader);
				} else {
					this.result = result;
					loader.hide();
				}
			}
		},
		async getRandomRecipes(loader) {
			const result = await getRandomRecipes();
			if (result) {
				this.randomRecipeList = result;
				loader.hide();
			}
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

.subcaption {
	display: flex;
	margin-top: 10px;
	margin-bottom: 20px;
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
