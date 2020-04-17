/**
 * All API calls will be maintainted here
 */
const API_KEY = "5c4fccbf09894f23b5a22cec1c932533";
var response = "";

/**
 *
 * @param {string} query - name of dish
 * @param {number} number - defines # of returned receipes
 * @returns {Array}
 */

export async function getResultByName(query, number) {
    axios
        .get(
            "https://api.spoonacular.com/recipes/search?apiKey=" +
                API_KEY +
                "&query=" +
                query +
                "&number=" +
                number
        )
        .then(response => {
            this.response = response.data.results;
        });
    return response;
}

/**
 *
 * @param {string} ingredients - A comma-separated list of ingredients that the recipes should contain.
 * @returns {Array}
 */

export async function getRecipesByIngredients(ingredients, number) {
    axios
        .get(
            "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" +
                API_KEY +
                "&ingredients=" +
                ingredients +
                "&number=" +
                number
        )
        .then(response => {
            this.response = response.data.results;
        });
    return response;
}

/**
 *
 * @param {string} query - The (natural language) recipe search query.
 * @param {string} includeIngredients - A comma-separated list of ingredients that should/must be used in the recipes.
 * @param {string} excludeIngredients - A comma-separated list of ingredients or ingredient types that the recipes must not contain.
 * @param {string} number - The number of expected results (between 1 and 10).
 * @returns {Object}
 */

export async function getRecipesComplex(query, include, exclude, number) {
    axios
        .get(
            "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
                API_KEY +
                "&query=" +
                query +
                "&includeIngredients=" +
                include +
                "&excludeIngredients=" +
                exclude +
                "&number=" +
                number +
                "&sort=popularity&sortDirection=desc"
        )
        .then(response => {
            this.response = response.data.results;
        });
    return response;
}

/**
 * @returns {Array} randomly picked receipe
 */

export async function getRandomReceipe() {
    axios
        .get("https://api.spoonacular.com/recipes/random?apiKey=" + API_KEY)
        .then(response => {
            this.response = response.data.results;
        });
    return response;
}
