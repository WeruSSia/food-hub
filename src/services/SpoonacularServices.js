/**
 * All API calls will be maintainted here
 */

import axios from "axios";

var spoonacularAddress =
	"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
var contentType = "application/json";
var xRapidApiHost = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
var xRapidApiKey = "bb78fe07aamshc088cf396e29648p11c6f1jsn311f43158ebd";

/**
 *
 * Our recipe API includes over 360,000 recipes as well as an open source recipe database.
 * @param {string} query - The (natural language) recipe search query.
 * @returns {Object}
 */
export async function getResultByName(query, offset) {
	return axios({
		method: "GET",
		url: spoonacularAddress + "/recipes/search",
		headers: {
			"content-type": contentType,
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
		params: {
			query: query,
			number: 9,
			instructionsRequired: true,
			offset,
		},
	})
		.then(response => {
			response.data.results = response.data.results.map(el => {
				if (el.image != undefined) {
					const type = el.image.split(".")[1];
					el.image = `${response.data.baseUri}${el.id}-312x231.${type}`;
				}
				return el;
			});
			return response.data;
		})
		.catch(() => { });
}

/**
 *
 * Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. 
 * you might want to consider using the complex recipe search endpoint and set the sort 
 * request parameter to random.
 * @returns {Array} randomly picked recipes
 */
export async function getRandomRecipes() {
	return axios({
		method: "GET",
		url: spoonacularAddress + "/recipes/random",
		headers: {
			"content-type": contentType,
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
		params: {
			number: 18,
		},
	})
		.then(response => {
			return response.data.recipes;
		})
		.catch(() => { });
}

/**
 *
 * Search through hundreds of thousands of recipes using advanced filtering and ranking. 
 * NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.
 * @param {string} query - The (natural language) recipe search query.
 * @param {string} includeIngredients -  list of ingredients that must be contained in the recipes
 * @param {string} excludeIngredients -  list of ingredients that must not be contained in the recipes
 * @returns {Object} recipes
 */
export async function getComplexSearch(query, includeIngredients, excludeIngredients, offset) {
	const includeIngredientsSeparated = includeIngredients.replace(/,/g, "%2C");
	const excludeIngredientsSeparated = excludeIngredients.replace(/,/g, "%2C");

	return axios({
		method: "GET",
		url: spoonacularAddress + "/recipes/complexSearch",
		headers: {
			"content-type": contentType,
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
		params: {
			query: query,
			includeIngredients: includeIngredientsSeparated,
			excludeIngredients: excludeIngredientsSeparated,
			instructionsRequired: true,
			number: 9,
			offset,
		},
	})
		.then(response => {
			return response.data;
		})
		.catch(() => { });
}

/**
 *
 * Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.
 * @param {number} id - The id of the recipe.
 * @returns {Object}
 */
export async function getRecipe(id) {
	return axios({
		method: "GET",
		url: spoonacularAddress + "/recipes/" + id + "/information",
		headers: {
			"content-type": contentType,
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
		params: {
			includeNutrition: true,
		},
	})
		.then(response => {
			return response.data;
		})
		.catch(() => { });
}

/**
 *
 * Get a random joke that is related to food. Caution: this is an endpoint for adults!
 * This is hilarious - we should defenitely use it
 * @returns {Object}
 */
export async function getRandomJoke() {
	return axios({
		method: "GET",
		url: spoonacularAddress + "/food/jokes/random",
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
	})
		.then(response => {
			return response.data;
		})
		.catch(() => { });
}

/**
 * 
 * Autocomplete a partial input to suggest possible recipe names.
 * @param {string} query - The query to be autocompleted.
 * @returns {Object}
 */
export async function getRecipeNameAutocomplete(query) {
	return axios({
		method: "GET",
		url: spoonacularAddress + "/recipes/autocomplete",
		headers: {
			"content-type": contentType,
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
		params: {
			query: query,
			number: 10
		},
	})
		.then(response => {
			return response.data;
		})
		.catch(() => { });
}

/**
 * 
 * Autocomplete the entry of an ingredient.
 * @param {string} query - The partial or full ingredient name.
 * @returns {Object}
 */
export async function getIngredientAutocomplete(query) {
	return axios({
		method: "GET",
		url: spoonacularAddress + "/food/ingredients/autocomplete",
		headers: {
			"content-type": contentType,
			"x-rapidapi-host": xRapidApiHost,
			"x-rapidapi-key": xRapidApiKey,
		},
		params: {
			query: query,
			number: 10
		},
	})
		.then(response => {
			return response.data;
		})
		.catch(() => { });
}