/**
 * All API calls will be maintainted here
 */
const API_KEY = '5c4fccbf09894f23b5a22cec1c932533'
var response = ''

/**
 *
 * @param {string} query - name of dish
 * @param {number} number - defines # of returned receipes
 * @returns {Array}
 */

export async function getResultByName(query, number) {
    axios.get("https://api.spoonacular.com/recipes/search?apiKey=" + API_KEY + "&query=" + query + "&number=" + number).then(response => {
        this.response = response.data.results;
    });
    return response
}

/**
 * 
 * @param {string} ingredients - A comma-separated list of ingredients that the recipes should contain.
 * @returns {Array}
 */

export async function getRecipesbyIngredients(ingredients) {
    axios.get("https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + API_KEY + "&ingredients=" + ingredients).then(response => {
        this.response = response.data.results;
    });
    return response
}

/**
 * @returns {Array} randomly picked receipe
 */

export async function getRandomReceipe() {
    axios.get("https://api.spoonacular.com/recipes/random?apiKey=" + API_KEY).then(response => {
        this.response = response.data.results;
    });
    return response
}

