/**
 * All API calls will be maintainted here
 */


/**
 *
 * @param {string} query - name of dish
 * @param {number} number - defines # of returned receipes
 * @returns {Array}
 */
export async function getResultByName(query, number) {
    axios({
        "method": "GET",
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "bb78fe07aamshc088cf396e29648p11c6f1jsn311f43158ebd"
        }, "params": {
            "number": number,
            "query": query
        }
    })
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}

/**
 *

 * @param {Array} of ingredients
 * @returns {Array}
 */

export async function getRecipesByIngredients(ingredients, number) {
    const ingriedientsString = ingredients.map(ingredient =>
        ingredient + '%2C'
    );

    axios({
        "method": "GET",
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "bb78fe07aamshc088cf396e29648p11c6f1jsn311f43158ebd"
        }, "params": {
            "number": number,
            "ingredients": ingriedientsString
        }
    })
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}
/**
 *
 * @param {string} number - The number of random recipes to be returned (between 1 and 100).
 * @returns {Array} randomly picked recipes
 */

export async function getRandomRecipes(number) {
    axios({
        "method": "GET",
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "bb78fe07aamshc088cf396e29648p11c6f1jsn311f43158ebd"
        }, "params": {
            "number": number
        }
    })
        .then(response => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}

/**
 *
 * @param {Number} number - The number of random recipes to be returned (between 1 and 100).
 * @param {string} query - name of dish
 * @param {Array} includeIngredients -  list of ingredients that must be contained in the recipes
 * @param {Array} excludeIngredients -  list of ingredients that must not be contained in the recipes
 * @returns {Array} recipes
 */

export async function getComplexSearch(number, query, includeIngredients, excludeIngredients) {
    const includeIngredientsArray = includeIngredients.map(ingredient =>
        ingredient + '%2C'
    );

    const excludeIngredientsArray = excludeIngredients.map(ingredient =>
        ingredient + '%2C'
    );

    axios({
        "method": "GET",
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "bb78fe07aamshc088cf396e29648p11c6f1jsn311f43158ebd"
        }, "params": {
            "excludeIngredients": excludeIngredientsArray,
            "includeIngredients": includeIngredientsArray,
            "query": query,
            "number": number
        }
    })
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}