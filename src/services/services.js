/**
 * All API calls will be maintainted here
 */

import axios from "axios";

var spoonacularRecipesAddress = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes";
var contentType = "application/json";
var xRapidApiHost = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
var xRapidApiKey = "bb78fe07aamshc088cf396e29648p11c6f1jsn311f43158ebd";

/**
 *
 * @param {string} query - The (natural language) recipe search query.
 * @returns {Object}
 */
export async function getResultByName(query) {
    return axios({
        method: "GET",
        url: spoonacularRecipesAddress + "/search",
        headers: {
            "content-type": contentType,
            "x-rapidapi-host": xRapidApiHost,
            "x-rapidapi-key": xRapidApiKey,
        },
        params: {
            query: query,
            number: 20,
            instructionsRequired: true,
        },
    })
        .then(response => {
            response.data.results = response.data.results.map(el => {
                if (el.image != undefined) {
                    const type = el.image.split('.')[1];
                    el.image = `${response.data.baseUri}${el.id}-312x231.${type}`
                }
                return el;
            })
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 *
 * @returns {Array} randomly picked recipes
 */
export async function getRandomRecipes() {
    return axios({
        method: "GET",
        url: spoonacularRecipesAddress + "/random",
        headers: {
            "content-type": contentType,
            "x-rapidapi-host": xRapidApiHost,
            "x-rapidapi-key": xRapidApiKey,
        },
        params: {
            number: 20,
        },
    })
        .then(response => {
            return response.data.recipes;
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 *
 * @param {string} query - The (natural language) recipe search query.
 * @param {string} includeIngredients -  list of ingredients that must be contained in the recipes
 * @param {string} excludeIngredients -  list of ingredients that must not be contained in the recipes
 * @returns {Object} recipes
 */
export async function getComplexSearch(query, includeIngredients, excludeIngredients) {
    const includeIngredientsSeparated = includeIngredients.replace(/,/g, "%2C");
    const excludeIngredientsSeparated = excludeIngredients.replace(/,/g, "%2C");

    return axios({
        method: "GET",
        url: spoonacularRecipesAddress + "/complexSearch",
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
            number: 20,
        },
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

/**
 *
 * @param {number} id - The id of the recipe.
 * @returns {Object}
 */
export async function getRecipe(id) {
    return axios({
        method: "GET",
        url: spoonacularRecipesAddress + "/" + id + "/information",
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
        .catch(error => {
            console.log(error);
        });
}
