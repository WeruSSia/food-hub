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
            "intolerances": "egg%2C gluten",
            "number": number,
            "offset": "0",
            "type": "main course",
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
            "ranking": "1",
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