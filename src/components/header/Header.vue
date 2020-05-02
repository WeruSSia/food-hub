<template>
	<div id="header" class="header">
		<div id="items">
			<div class="img-box" @click="goToHomePage">
				<img
					src="../../assets/homepage/food-hub-logo.png"
					width="70"
					height="56"
				/>
			</div>
			<div id="search">
				<input
					id="query-input"
					type="text"
					placeholder="Search for recipes"
					v-model="query"
				/>
				<div class="query-items-list">
					<div
						v-for="(item, index) in queryAutocompleteItems"
						:key="index"
					>
						<div
							class="item"
							@click="
								selectAutocompleteItem('query', item, false)
							"
						>
							{{ item }}
						</div>
					</div>
				</div>
				<div>
					<button class="button" @click="toggleSearchArea">
						<span>Ingredients</span>
					</button>
				</div>
				<div id="searchSvg" @click="searchRecipes">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#555555"
						width="36px"
						height="36px"
					>
						<path
							d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
						/>
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</div>

			<div id="search-icon" @click="toggleResponsive">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#555555"
					width="36px"
					height="36px"
				>
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/>
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</div>

			<div
				v-show="isUserLoggedIn"
				id="history-icon"
				class="icon"
				@click="goToHistory"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#555555"
					width="36px"
					height="36px"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
					/>
				</svg>
			</div>

			<div
				v-show="isUserLoggedIn"
				id="favourites-icon"
				class="icon"
				@click="goToFavourites"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#D9001B"
					width="36px"
					height="36px"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
					/>
				</svg>
			</div>

			<div v-show="!isUserLoggedIn" class="button-container-sign-in">
				<button class="button" @click="onSignInClicked">
					<span>SIGN IN</span>
				</button>
			</div>

			<div id="profile-icon" class="icon" @click="goToProfile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#555555"
					width="60px"
					height="60px"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
					/>
				</svg>
			</div>
		</div>

		<!-- STANDARD SEARCH -->
		<div id="standardSearch">
			<div id="keywordsSearch">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#555555"
					width="36px"
					height="36px"
				>
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/>
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
				<input
					type="text"
					class="input"
					placeholder="Keywords"
					v-model="keywords"
				/>
			</div>
			<div class="ingredients">
				<div class="ingredients-container">
					<input
						type="text"
						class="input include"
						placeholder="Include ingredients"
						v-model="include"
					/>
					<div class="ingredients-items-list">
						<div
							v-for="(item, index) in includeAutocompleteItems"
							:key="index"
						>
							<div
								class="item"
								@click="
									selectAutocompleteItem(
										'include',
										item,
										false
									)
								"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="includedExcludedContainer">
						<div
							class="added"
							v-for="(item, index) in includings"
							:key="index"
						>
							{{ item }}
							<div @click="removeItemStandard('include', index)">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#555555"
									width="16px"
									height="16px"
								>
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
									/>
									<path d="M0 0h24v24H0z" fill="none" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="add" @click="addItemStandard('include')">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						width="30px"
						height="30px"
					>
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</div>
			<div class="ingredients">
				<div class="ingredients-container">
					<input
						type="text"
						class="input exclude"
						placeholder="Exclude ingredients"
						v-model="exclude"
					/>
					<div class="ingredients-items-list">
						<div
							v-for="(item, index) in excludeAutocompleteItems"
							:key="index"
						>
							<div
								class="item"
								@click="
									selectAutocompleteItem(
										'exclude',
										item,
										false
									)
								"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="includedExcludedContainer">
						<div
							class="added"
							v-for="(item, index) in excludings"
							:key="index"
						>
							{{ item }}
							<div @click="removeItemStandard('exclude', index)">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#555555"
									width="16px"
									height="16px"
								>
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
									/>
									<path d="M0 0h24v24H0z" fill="none" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="add" @click="addItemStandard('exclude')">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						width="30px"
						height="30px"
					>
						<path d="M19 13H5v-2h14v2z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</div>
			<div>
				<button class="button" @click="searchByIngredients">
					<span>SEARCH</span>
				</button>
			</div>
			<div id="close" class="icon" @click="close">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#555555"
					width="16px"
					height="16px"
				>
					<path
						d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
					/>
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</div>
		</div>

		<!-- RESPONSIVE SEARCH -->
		<div id="responsiveSearch">
			<div id="keywords">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#555555"
					width="36px"
					height="36px"
				>
					<path
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/>
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
				<input
					id="keywords-input"
					type="text"
					class="input"
					placeholder="Keywords"
					v-model="keywords"
				/>
				<div class="keywords-resp-items-list">
					<div
						v-for="(item, index) in keywordsAutocompleteItems"
						:key="index"
					>
						<div
							class="item"
							@click="
								selectAutocompleteItem('keywords', item, true)
							"
						>
							{{ item }}
						</div>
					</div>
				</div>
			</div>
			<div class="ingredients">
				<div class="ingredients-container">
					<input
						type="text"
						class="input include"
						placeholder="Include ingredients"
						v-model="include"
					/>
					<div class="include-resp-items-list">
						<div
							v-for="(item, index) in includeAutocompleteItems"
							:key="index"
						>
							<div
								class="item"
								@click="
									selectAutocompleteItem(
										'include',
										item,
										true
									)
								"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="includedExcludedContainer">
						<div
							class="added"
							v-for="(item, index) in includings"
							:key="index"
						>
							{{ item }}
							<div
								@click="removeItemResponsive('include', index)"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#555555"
									width="16px"
									height="16px"
								>
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
									/>
									<path d="M0 0h24v24H0z" fill="none" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="add" @click="addItemResponsive('include')">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						width="30px"
						height="30px"
					>
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</div>
			<div class="ingredients">
				<div class="ingredients-container">
					<input
						type="text"
						class="input exclude"
						placeholder="Exclude ingredients"
						v-model="exclude"
					/>
					<div class="exclude-resp-items-list">
						<div
							v-for="(item, index) in excludeAutocompleteItems"
							:key="index"
						>
							<div
								class="item"
								@click="
									selectAutocompleteItem(
										'exclude',
										item,
										true
									)
								"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="includedExcludedContainer">
						<div
							class="added"
							v-for="(item, index) in excludings"
							:key="index"
						>
							{{ item }}
							<div
								@click="removeItemResponsive('exclude', index)"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#555555"
									width="16px"
									height="16px"
								>
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
									/>
									<path d="M0 0h24v24H0z" fill="none" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="add" @click="addItemResponsive('exclude')">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						width="30px"
						height="30px"
					>
						<path d="M19 13H5v-2h14v2z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</div>
			<div id="searchButton">
				<button class="button" @click="searchByIngredients">
					<span>SEARCH</span>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import store from "../../store/index.js";
import {
	getIngredientAutocomplete,
	getRecipeNameAutocomplete
} from "../../services/SpoonacularServices.js";

export default {
	computed: {
		isUserLoggedIn() {
			return store.state.isUserLoggedIn;
		},
	},
	data() {
		return {
			query: "",
			keywords: "",
			include: "",
			includings: [],
			exclude: "",
			excludings: [],
			searchData: {
				queryString: "",
				includes: [],
				excludes: [],
			},
			queryAutocompleteItems: [],
			keywordsAutocompleteItems: [],
			includeAutocompleteItems: [],
			excludeAutocompleteItems: [],
			selectedItem: ""
		};
	},
	watch: {
		query() {
			if (this.query === this.selectedItem) {
				document.getElementsByClassName("query-items-list")[0].style.display = "none";
				this.queryAutocompleteItems = [];
				document.getElementById("query-input").focus();
			} else if (this.query) {
				document.getElementsByClassName("query-items-list")[0].style.display = "block";
				this.getRecipeAutocomplete(this.query, "query")
			} else {
				this.queryAutocompleteItems = [];
				document.getElementsByClassName("query-items-list")[0].style.display = "none";
			}
		},
		keywords() {
			if (this.keywords === this.selectedItem) {
				document.getElementsByClassName("keywords-resp-items-list")[0].style.display = "none";
				this.keywordsAutocompleteItems = [];
				document.getElementById("keywords-input").focus();
			} else if (this.keywords) {
				document.getElementsByClassName("keywords-resp-items-list")[0].style.display = "block";
				this.getRecipeAutocomplete(this.keywords, "keywords")
			} else {
				this.keywordsAutocompleteItems = [];
				document.getElementsByClassName("keywords-resp-items-list")[0].style.display = "none";
			}
		},
		include() {
			if (this.include === this.selectedItem) {
				document.getElementsByClassName("ingredients-items-list")[0].style.display = "none";
				document.getElementsByClassName("include-resp-items-list")[0].style.display = "none";
				this.includeAutocompleteItems = [];
				document.getElementsByClassName("input include")[0].focus();
				document.getElementsByClassName("input include")[1].focus();
			} else if (this.include) {
				document.getElementsByClassName("ingredients-items-list")[0].style.display = "block";
				document.getElementsByClassName("include-resp-items-list")[0].style.display = "block";
				this.getIngredientAutocomplete(this.include, 'include')
			} else {
				this.includeAutocompleteItems = [];
				document.getElementsByClassName("ingredients-items-list")[0].style.display = "none";
				document.getElementsByClassName("include-resp-items-list")[0].style.display = "none";
			}
		},
		exclude() {
			if (this.exclude === this.selectedItem) {
				document.getElementsByClassName("ingredients-items-list")[1].style.display = "none";
				document.getElementsByClassName("exclude-resp-items-list")[0].style.display = "none";
				this.excludeAutocompleteItems = [];
				document.getElementsByClassName("input exclude")[0].focus();
				document.getElementsByClassName("input exclude")[1].focus();
			} else if (this.exclude) {
				document.getElementsByClassName("ingredients-items-list")[1].style.display = "block";
				document.getElementsByClassName("exclude-resp-items-list")[0].style.display = "block";
				this.getIngredientAutocomplete(this.exclude, 'exclude')
			} else {
				this.excludeAutocompleteItems = [];
				document.getElementsByClassName("ingredients-items-list")[1].style.display = "none";
				document.getElementsByClassName("exclude-resp-items-list")[0].style.display = "none";
			}
		}
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			document.getElementsByClassName("query-items-list")[0].style.display = "none";
			document.getElementsByClassName("ingredients-items-list")[0].style.display = "none";
			document.getElementsByClassName("ingredients-items-list")[1].style.display = "none";
			document.getElementsByClassName("keywords-resp-items-list")[0].style.display = "none";
			document.getElementsByClassName("include-resp-items-list")[0].style.display = "none";
			document.getElementsByClassName("exclude-resp-items-list")[0].style.display = "none";
		},
		async getRecipeAutocomplete(query, input) {
			const result = await getRecipeNameAutocomplete(query);
			var toReturn = [];
			result.forEach(item => {
				toReturn.push(item.title);
			});
			if (input === "query") {
				this.queryAutocompleteItems = toReturn;
			} else {
				this.keywordsAutocompleteItems = toReturn;
			}
			return toReturn;
		},
		async getIngredientAutocomplete(query, includeExclude) {
			const result = await getIngredientAutocomplete(query);
			var toReturn = [];
			result.forEach(item => {
				toReturn.push(item.name);
			});
			if (includeExclude === "include") {
				this.includeAutocompleteItems = toReturn;
			} else {
				this.excludeAutocompleteItems = toReturn;
			}
		},
		selectAutocompleteItem(input, item, responsive) {
			if (input === "query") {
				this.query = item;
				this.selectedItem = item;
				document.getElementsByClassName("query-items-list")[0].style.display = "none";
			} else if (input === "keywords") {
				this.keywords = item;
				this.selectedItem = item;
				document.getElementsByClassName("keywords-resp-items-list")[0].style.display = "none";
			} else if (input === "include") {
				this.include = item;
				this.selectedItem = item;
				if (!responsive) {
					document.getElementsByClassName("ingredients-items-list")[0].style.display = "none";
				} else {
					document.getElementsByClassName("include-resp-items-list")[0].style.display = "none";
				}
			} else if (input === "exclude") {
				this.exclude = item;
				this.selectedItem = item;
				if (!responsive) {
					document.getElementsByClassName("ingredients-items-list")[1].style.display = "none";
				} else {
					document.getElementsByClassName("exclude-resp-items-list")[0].style.display = "none";
				}
			}
		},
		goToHomePage() {
			this.$router.push("/").catch(() => {});
			this.clearHeader();
			this.clearSearchData();
		},
		searchRecipes() {
			this.$router.push("/results").catch(() => {});
			this.setQuery();
			this.clearHeader();
		},
		searchByIngredients() {
			this.$router.push("/results").catch(() => {});
			this.setIngredients();
			this.clearHeader();
		},
		goToHistory() {
			this.$router.push("/history").catch(() => {});
			this.clearHeader();
		},
		goToFavourites() {
			this.$router.push("/favourites").catch(() => {});
			this.clearHeader();
			this.clearSearchData();
		},
		onSignInClicked() {
			this.showSignInModal();
		},
		goToProfile() {
			if (this.isUserLoggedIn) {
				this.$router.push("/profile").catch(() => {});
			} else {
				this.showSignInModal();
			}
		},
		showSignInModal() {
			this.$emit("toggleSignInModal");
		},

		setQuery() {
			let query = this.query;
			this.setSearchData(query, [], []);
			store.commit("setSearchData", this.searchData);
		},

		setIngredients() {
			let cleanIncludings = this.removeEmpty(this.includings);
			let cleanExcludings = this.removeEmpty(this.excludings);

			let query = this.keywords;
			this.setSearchData(query, cleanIncludings, cleanExcludings);
			store.commit("setSearchData", this.searchData);
		},

		removeEmpty(array) {
			let toReturn = [];
			array.forEach(item => {
				if (item !== "") {
					toReturn.push(item);
				}
			});
			return toReturn;
		},

		setSearchData(query, include, exclude) {
			this.searchData.queryString = query;
			this.searchData.includes = include;
			this.searchData.excludes = exclude;
		},

		clearSearchData() {
			store.commit("setSearchData", null);
		},

		addItemStandard(includeExclude) {
			if (
				(includeExclude === "include" && this.include.length !== 0) ||
				(includeExclude === "exclude" && this.exclude.length !== 0)
			) {
				var header = document.getElementById("header");
				var standardSearch = document.getElementById("standardSearch");
				var button = document.getElementsByClassName("button")[2];
				var close = document.getElementById("close");

				var container;
				var ingredients;
				var add;
				if (includeExclude === "include") {
					container = document.getElementsByClassName(
						"includedExcludedContainer"
					)[0];
					ingredients = document.getElementsByClassName(
						"ingredients"
					)[0];
					add = document.getElementsByClassName("add")[0];
				} else {
					container = document.getElementsByClassName(
						"includedExcludedContainer"
					)[1];
					ingredients = document.getElementsByClassName(
						"ingredients"
					)[1];
					add = document.getElementsByClassName("add")[1];
				}

				container.style.display = "inline-block";

				var searchHeight;
				var headerHeight = header.offsetHeight + 30;
				var ingredientsHeight = ingredients.offsetHeight + 28;

				if (
					standardSearch.offsetHeight - ingredients.offsetHeight ===
						38 &&
					standardSearch.offsetHeight < 102
				) {
					searchHeight = standardSearch.offsetHeight + 12;
					header.style.height = headerHeight + "px";
					standardSearch.style.height = searchHeight + "px";
				} else if (
					standardSearch.offsetHeight - ingredients.offsetHeight ===
						38 &&
					standardSearch.offsetHeight >= 120
				) {
					searchHeight = standardSearch.offsetHeight + 30;
					header.style.height = headerHeight + "px";
					standardSearch.style.height = searchHeight - 18 + "px";
				}

				ingredients.style.height = ingredientsHeight + "px";

				ingredients.style.alignItems = "flex-start";
				standardSearch.style.alignItems = "flex-start";
				standardSearch.style.paddingTop = "18px";

				button.style.marginTop = "4px";

				add.style.borderRadius = "0 14px 0 14px";

				close.style.marginTop = "16px";

				var input1 = document.getElementsByClassName("input")[1];
				var input2 = document.getElementsByClassName("input")[2];

				if (includeExclude === "include") {
					this.includings.push(this.include);
					this.include = "";
					input1.focus();
				} else {
					this.excludings.push(this.exclude);
					this.exclude = "";
					input2.focus();
				}
			}
		},

		addItemResponsive(includeExclude) {
			if (
				(includeExclude === "include" && this.include.length !== 0) ||
				(includeExclude === "exclude" && this.exclude.length !== 0)
			) {
				var header = document.getElementById("header");
				var responsiveSearch = document.getElementById(
					"responsiveSearch"
				);

				var container;
				var ingredients;
				var add;
				var autocomplete;
				if (includeExclude === "include") {
					container = document.getElementsByClassName(
						"includedExcludedContainer"
					)[2];
					ingredients = document.getElementsByClassName(
						"ingredients"
					)[2];
					add = document.getElementsByClassName("add")[2];
					autocomplete = document.getElementsByClassName(
						"exclude-resp-items-list"
					)[0];
				} else {
					container = document.getElementsByClassName(
						"includedExcludedContainer"
					)[3];
					ingredients = document.getElementsByClassName(
						"ingredients"
					)[3];
					add = document.getElementsByClassName("add")[3];
				}

				container.style.display = "inline-block";

				var headerHeight = header.offsetHeight + 31;
				var searchHeight = responsiveSearch.offsetHeight + 31;
				var ingredientsHeight = ingredients.offsetHeight + 29;
				
				header.style.height = headerHeight + "px";
				responsiveSearch.style.height = searchHeight - 20 + "px";
				ingredients.style.height = ingredientsHeight + "px";
				
				if (includeExclude === "include") {
					ingredients = document.getElementsByClassName(
						"ingredients"
					)[3];
					let ingredientsHeight = ingredients.offsetHeight;
					var autocompleteTop = headerHeight - (ingredientsHeight - 50) - 78;
					autocomplete.style.top = autocompleteTop + "px";
				}

				ingredients.style.alignItems = "flex-start";

				add.style.borderRadius = "0 14px 0 14px";

				var input4 = document.getElementsByClassName("input")[4];
				var input5 = document.getElementsByClassName("input")[5];

				if (includeExclude === "include") {
					this.includings.push(this.include);
					this.include = "";
					input4.focus();
				} else {
					this.excludings.push(this.exclude);
					this.exclude = "";
					input5.focus();
				}
			}
		},

		removeItemStandard(includeExclude, index) {
			var header = document.getElementById("header");
			var standardSearch = document.getElementById("standardSearch");
			var button = document.getElementsByClassName("button")[2];
			var close = document.getElementById("close");

			var container;
			var ingredients;
			var ingredientsOther;
			var add;
			if (includeExclude === "include") {
				container = document.getElementsByClassName(
					"includedExcludedContainer"
				)[0];
				ingredients = document.getElementsByClassName("ingredients")[0];
				ingredientsOther = document.getElementsByClassName(
					"ingredients"
				)[1];
				add = document.getElementsByClassName("add")[0];
			} else {
				container = document.getElementsByClassName(
					"includedExcludedContainer"
				)[1];
				ingredients = document.getElementsByClassName("ingredients")[1];
				ingredientsOther = document.getElementsByClassName(
					"ingredients"
				)[0];
				add = document.getElementsByClassName("add")[1];
			}

			var searchHeight;
			var headerHeight = header.offsetHeight - 30;
			var ingredientsHeight = ingredients.offsetHeight - 32;

			if (ingredients.offsetHeight === 82) {
				container.style.display = "flex";
				if (
					standardSearch.offsetHeight - ingredients.offsetHeight ===
						38 &&
					ingredients.offsetHeight - ingredientsOther.offsetHeight !==
						0
				) {
					searchHeight = standardSearch.offsetHeight - 30;
					header.style.height = headerHeight + "px";
					standardSearch.style.height = searchHeight + "px";
					standardSearch.style.paddingTop = "0";
					standardSearch.style.alignItems = "center";
					button.style.marginTop = "0";
				}
				ingredients.style.height = ingredientsHeight + "px";
				ingredients.style.alignItems = "center";
				add.style.borderRadius = "0 14px 14px 0";
				close.style.marginTop = "6px";
			} else if (ingredients.offsetHeight > 82) {
				if (
					standardSearch.offsetHeight - ingredients.offsetHeight ===
						38 &&
					ingredients.offsetHeight - ingredientsOther.offsetHeight !==
						0
				) {
					searchHeight = standardSearch.offsetHeight - 30;
					header.style.height = headerHeight + "px";
					standardSearch.style.height = searchHeight - 18 + "px";
				}
				ingredients.style.height = ingredientsHeight + "px";
			}

			if (includeExclude === "include") {
				this.includings.splice(index, 1);
			} else {
				this.excludings.splice(index, 1);
			}
		},

		removeItemResponsive(includeExclude, index) {
			var header = document.getElementById("header");
			var responsiveSearch = document.getElementById("responsiveSearch");

			var container;
			var ingredients;
			var add;
			if (includeExclude === "include") {
				container = document.getElementsByClassName(
					"includedExcludedContainer"
				)[2];
				ingredients = document.getElementsByClassName("ingredients")[2];
				add = document.getElementsByClassName("add")[2];
			} else {
				container = document.getElementsByClassName(
					"includedExcludedContainer"
				)[3];
				ingredients = document.getElementsByClassName("ingredients")[3];
				add = document.getElementsByClassName("add")[3];
			}

			var headerHeight = header.offsetHeight - 31;
			var searchHeight = responsiveSearch.offsetHeight - 31;
			var ingredientsHeight = ingredients.offsetHeight - 33;

			if (ingredients.offsetHeight === 83) {
				container.style.display = "flex";

				header.style.height = headerHeight + "px";

				responsiveSearch.style.height = searchHeight - 20 + "px";
				responsiveSearch.style.paddingTop = "20px";

				ingredients.style.height = ingredientsHeight + "px";
				ingredients.style.alignItems = "center";

				add.style.borderRadius = "0 14px 14px 0";
			} else if (ingredients.offsetHeight > 83) {
				header.style.height = headerHeight + "px";
				responsiveSearch.style.height = searchHeight - 20 + "px";
				ingredients.style.height = ingredientsHeight + "px";
			}

			if (includeExclude === "include") {
				this.includings.splice(index, 1);
			} else {
				this.excludings.splice(index, 1);
			}
		},

		close() {
			this.clearHeader();
		},

		toggleSearchArea() {
			var x = document.getElementById("header");
			var standardSearch = document.getElementById("standardSearch");
			var y = document.getElementById("search-icon");
			if (
				x.className === "header" ||
				x.className === "header responsive"
			) {
				x.className = "header searching";
				x.style.height = "180px";
				standardSearch.style.display = "flex";
			} else if (x.className === "header searching") {
				x.className = "header";
				x.style.height = "90px";
				this.clearSearchArea();
			} else {
				x.className = "header";
			}
			y.style.backgroundColor = "";
		},

		toggleResponsive() {
			var x = document.getElementById("header");
			var y = document.getElementById("search-icon");
			var responsiveSearch = document.getElementById("responsiveSearch");
			if (
				x.className === "header" ||
				x.className === "header searching"
			) {
				x.className = "header responsive";
				x.style.height = "370px";
				y.style.backgroundColor = "#f9f9f9";
				responsiveSearch.style.display = "inline-block";
			} else if (x.className === "header responsive") {
				x.className = "header";
				x.style.height = "90px";
				y.style.backgroundColor = "";
				this.clearSearchArea();
			} else {
				x.className = "header";
				y.style.backgroundColor = "";
			}
		},

		clearSearchArea() {
			var standardSearch = document.getElementById("standardSearch");
			var responsiveSearch = document.getElementById("responsiveSearch");
			var container0 = document.getElementsByClassName(
				"includedExcludedContainer"
			)[0];
			var container1 = document.getElementsByClassName(
				"includedExcludedContainer"
			)[1];
			var container2 = document.getElementsByClassName(
				"includedExcludedContainer"
			)[2];
			var container3 = document.getElementsByClassName(
				"includedExcludedContainer"
			)[3];
			var ingredients0 = document.getElementsByClassName(
				"ingredients"
			)[0];
			var ingredients1 = document.getElementsByClassName(
				"ingredients"
			)[1];
			var ingredients2 = document.getElementsByClassName(
				"ingredients"
			)[2];
			var ingredients3 = document.getElementsByClassName(
				"ingredients"
			)[3];
			var add0 = document.getElementsByClassName("add")[0];
			var add1 = document.getElementsByClassName("add")[1];
			var add2 = document.getElementsByClassName("add")[2];
			var add3 = document.getElementsByClassName("add")[3];
			var button = document.getElementsByClassName("button")[2];
			var close = document.getElementById("close");

			standardSearch.style.display = "none";
			standardSearch.style.height = "90px";
			standardSearch.style.paddingTop = "0";
			standardSearch.style.alignItems = "center";

			responsiveSearch.style.display = "none";
			responsiveSearch.style.height = "260px";
			responsiveSearch.style.paddingTop = "20px";

			container0.style.display = "none";
			container1.style.display = "none";
			container2.style.display = "none";
			container3.style.display = "none";

			ingredients0.style.height = "50px";
			ingredients1.style.height = "50px";
			ingredients0.style.alignItems = "center";
			ingredients1.style.alignItems = "center";
			ingredients2.style.height = "50px";
			ingredients3.style.height = "50px";
			ingredients2.style.alignItems = "center";
			ingredients3.style.alignItems = "center";

			add0.style.borderRadius = "0 14px 14px 0";
			add1.style.borderRadius = "0 14px 14px 0";
			add2.style.borderRadius = "0 14px 14px 0";
			add3.style.borderRadius = "0 14px 14px 0";

			button.style.marginTop = "0";
			close.style.marginTop = "6px";

			this.includings = [];
			this.excludings = [];
			this.include = "";
			this.exclude = "";
			this.keywords = "";
			this.query = "";
		},

		clearHeader() {
			var x = document.getElementById("header");
			var y = document.getElementById("search-icon");
			if (x.className !== "header") {
				x.className = "header";
				y.style.backgroundColor = "";
			}
			x.style.height = "90px";
			this.clearSearchArea();
		},
	},
};
</script>
<style scoped>
.header {
	position: relative;
	display: flex;
	width: 100%;
	height: 90px;
	top: 0;
	margin-bottom: 20px;
	overflow: hidden;
	align-items: center;
	background-color: #ffffff;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

@media print {
	.header {
		display: none;
	}
}

.img-box {
	width: 130px;
	height: 64px;
	margin-left: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 14px;
	background-color: rgba(242, 242, 242, 1);
}

.img-box:hover,
#searchSvg:hover,
#search-icon:hover,
.button:hover,
.icon:hover {
	cursor: pointer;
}

.img-box:active,
.button:active {
	box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.17);
	transform: translateY(2px);
}

#items {
	width: 100%;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
}

#search {
	width: 470px;
	height: 50px;
	display: flex;
	align-items: center;
	margin-left: 20px;
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

#search input {
	float: left;
	width: 315px;
	height: 35px;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 16px;
	font-family: "Poppins", sans-serif;
	border: none;
}

.query-items-list {
	position: fixed;
	width: 250px;
	height: auto;
	top: 70px;
	margin-left: 10px;
	z-index: 999;
	border-radius: 0 0 14px 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ffffff;
}

.item {
	padding-left: 10px;
	padding-right: 10px;
	font-size: 16px;
	font-family: "Poppins", sans-serif;
}

.item:hover {
	cursor: pointer;
	border-radius: 14px;
	background-color: #cccccc;
}

#search input:focus,
.button:focus {
	outline: none;
}

#search .button {
	width: 100px;
	height: 35px;
	font-family: "Poppins", sans-serif;
	font-weight: 200;
	color: white;
	border: none;
	background-color: #cccccc;
}

#search svg {
	float: right;
	margin-right: 15px;
}

.icon {
	margin-top: 7px;
	margin-right: 2%;
}

#search-icon {
	display: none;
}

#history-icon {
	margin-left: auto;
}

.button-container-sign-in {
	margin-left: auto;
}

.button {
	width: 96px;
	height: 44px;
	margin-right: 10px;
	font-family: "Poppins", sans-serif;
	font-weight: bolder;
	color: #555555;
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 9px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ffffff;
}

.button span {
	cursor: pointer;
	display: inline-block;
	position: relative;
	transition: 0.5s;
}

.button span:after {
	content: "\00bb";
	position: absolute;
	opacity: 0;
	top: 0;
	right: -15px;
	transition: 0.5s;
}

.button:hover span {
	padding-right: 12px;
}

.button:hover span:after {
	opacity: 1;
	right: 0;
}

/* STANDARD SEARCH AREA */

#standardSearch {
	display: none;
	width: 100%;
	height: 90px;
	align-items: center;
}

#keywordsSearch {
	width: 200px;
	height: 50px;
	display: flex;
	margin-left: 20px;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: white;
}

#keywordsSearch .input {
	float: left;
	width: 140px;
	height: 35px;
	margin-left: 10px;
	font-size: 14px;
	font-family: "Poppins", sans-serif;
	border: none;
}

.add:focus,
.input:focus {
	outline: none;
}

#keywordsSearch svg {
	float: right;
	margin-left: 2%;
}

#standardSearch .ingredients {
	width: 270px;
	height: 50px;
	display: flex;
	margin-bottom: 0;
	margin-left: 20px;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

.ingredients-container {
	display: inline-block;
	width: 90%;
	height: auto;
	margin-left: 10px;
	padding-top: 3px;
}

.ingredients-container .input {
	width: 90%;
	height: 20px;
	margin-top: 7px;
	margin-bottom: 7px;
	font-family: "Poppins", sans-serif;
	border: none;
	border-bottom: 2px solid rgba(242, 242, 242, 1);
}

.ingredients-items-list {
	display: none;
	position: fixed;
	width: 222px;
	height: auto;
	top: 155px;
	z-index: 999;
	border-radius: 0 0 14px 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ffffff;
}

.includedExcludedContainer {
	display: none;
	width: 100%;
}

.added {
	display: flex;
	width: 100%;
	height: 25px;
	margin-top: 5px;
	justify-content: center;
	align-items: center;
	color: black;
	font-size: 14px;
	font-family: "Poppins", sans-serif;
	border-radius: 14px;
	background-color: #eeeeee;
}

.added div {
	margin-top: 5px;
	margin-left: 10px;
}

.add {
	width: 40px;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: -1px;
	border-radius: 0 14px 14px 0;
	background-color: #cccccc;
}

#standardSearch .icon {
	margin-right: 2%;
}

#standardSearch .button {
	width: 96px;
	height: 44px;
	margin-left: 20px;
	font-weight: bold;
	color: #ffffff;
	border: 0;
	border-radius: 9px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ea0a2a;
}

.add:hover,
.icon:hover,
.added div:hover {
	cursor: pointer;
}

.button:active {
	box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.17);
	transform: translateY(2px);
}

.button span {
	cursor: pointer;
	display: inline-block;
	position: relative;
	transition: 0.5s;
}

.button span:after {
	content: "\00bb";
	position: absolute;
	opacity: 0;
	top: 0;
	right: -15px;
	transition: 0.5s;
}

.button:hover span {
	padding-right: 12px;
}

.button:hover span:after {
	opacity: 1;
	right: 0;
}

#close.icon {
	margin-top: 6px;
}

/* RESPONSIVE SEARCH AREA */

#responsiveSearch {
	display: none;
	padding-top: 20px;
}

#keywords {
	width: 96%;
	height: 50px;
	display: flex;
	margin-left: 2%;
	margin-bottom: 15px;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: white;
}

#keywords svg {
	float: right;
	margin-left: 2%;
}

#keywords .input {
	float: left;
	width: 90%;
	height: 35px;
	margin-left: 10px;
	font-size: 14px;
	font-family: "Poppins", sans-serif;
	border: none;
}

.keywords-resp-items-list {
	display: none;
	position: fixed;
	width: 222px;
	height: auto;
	top: 161px;
	z-index: 999;
	margin-left: -20px;
	border-radius: 0 0 14px 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ffffff;
}

.ingredients {
	width: 96%;
	height: 50px;
	display: flex;
	margin-left: 2%;
	margin-bottom: 15px;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(242, 242, 242, 1);
	border-radius: 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: white;
}

.include-resp-items-list {
	display: none;
	position: fixed;
	width: 222px;
	height: auto;
	top: 224px;
	z-index: 999;
	border-radius: 0 0 14px 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ffffff;
}

.exclude-resp-items-list {
	display: none;
	position: fixed;
	width: 222px;
	height: auto;
	top: 289px;
	z-index: 999;
	border-radius: 0 0 14px 14px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ffffff;
}

#responsiveSearch #searchButton {
	width: 96%;
	height: 44px;
}

#responsiveSearch .button {
	width: 96px;
	height: 44px;
	margin-left: 20px;
	font-weight: bold;
	color: #ffffff;
	border: 0;
	border-radius: 9px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	background-color: #ea0a2a;
}

/* RESPONSIVE VIEW */

@media screen and (max-width: 960px) {
	.img-box {
		margin-right: 10px;
	}
	#search,
	#items .button {
		display: none;
	}
	.button-container-sign-in {
		margin-left: 0;
	}
	#search-icon {
		display: block;
		height: 100%;
		margin-top: 57px;
		margin-left: auto;
		margin-right: 10px;
		padding: 5px;
		border-radius: 10px;
	}
	#history-icon {
		margin-left: 0;
	}
}

@media screen and (max-width: 960px) {
	.header {
		display: flex;
		height: 90px;
		align-items: center;
	}
	.header.responsive {
		display: inline-block;
		height: 370px;
		align-items: flex-start;
	}
	.header.responsive #items {
		width: 100%;
		margin-left: auto;
	}
	.header.responsive #responsiveSearch {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 260px;
		background-color: #f9f9f9;
	}
}

@media screen and (min-width: 960px) {
	.header {
		display: flex;
		height: 90px;
		align-items: center;
	}
	.header.searching {
		display: inline-block;
		height: 180px;
		align-items: flex-start;
	}
	.header.searching #standardSearch {
		position: relative;
		display: flex;
		align-items: center;
		background-color: #f9f9f9;
	}
}
</style>
