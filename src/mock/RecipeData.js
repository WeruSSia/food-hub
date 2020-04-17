export function getMockRecipeList() {
    return [
        {
            id: 90629,
            image: "https://spoonacular.com/recipeImages/90629-312x231.jpg",
            title: "Baked Apples in White Wine",
        },
        {
            id: 284420,
            image: "https://spoonacular.com/recipeImages/284420-312x231.jpg",
            title: "Chocolate Silk Pie with Marshmallow Meringue",
        },
        {
            id: 73420,
            image: "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            title: "Apple Or Peach Strudel",
        },
        {
            id: 632660,
            image: "https://spoonacular.com/recipeImages/632660-312x231.jpg",
            title: "Apricot Glazed Apple Tart",
        },
        {
            id: 716429,
            calories: 584,
            carbs: "84g",
            fat: "20g",
            image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            imageType: "jpg",
            protein: "19g",
            title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        },
        {
            id: 715538,
            calories: 521,
            carbs: "69g",
            fat: "10g",
            image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            imageType: "jpg",
            protein: "35g",
            title:
                "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
        },
    ];
}

export function getMockSearchRecipesComplex(query, include, exclude, number) {
    console.log(query, include, exclude, number);

    return {
        offset: 0,
        number: 4,
        results: [
            {
                id: 716429,
                calories: 584,
                carbs: "84g",
                fat: "20g",
                image:
                    "https://spoonacular.com/recipeImages/716429-312x231.jpg",
                imageType: "jpg",
                protein: "19g",
                title:
                    "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            },
            {
                id: 715538,
                calories: 521,
                carbs: "69g",
                fat: "10g",
                image:
                    "https://spoonacular.com/recipeImages/715538-312x231.jpg",
                imageType: "jpg",
                protein: "35g",
                title:
                    "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            },
            {
                id: 716429,
                calories: 584,
                carbs: "84g",
                fat: "20g",
                image:
                    "https://spoonacular.com/recipeImages/716429-312x231.jpg",
                imageType: "jpg",
                protein: "19g",
                title:
                    "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            },
            {
                id: 715538,
                calories: 521,
                carbs: "69g",
                fat: "10g",
                image:
                    "https://spoonacular.com/recipeImages/715538-312x231.jpg",
                imageType: "jpg",
                protein: "35g",
                title:
                    "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            },
        ],
        totalResults: 86,
    };
}

export function getMockResultsByName(query, number) {
    console.log(query, number);

    return {
        offset: 0,
        number: 4,
        results: [
            {
                id: 633508,
                image:
                    "https://spoonacular.com/recipeImages/633508-312x231.jpg",
                imageUrls: ["Baked-Cheese-Manicotti-633508.jpg"],
                readyInMinutes: 45,
                servings: 6,
                title: "Baked Cheese Manicotti",
            },
            {
                id: 634873,
                image:
                    "https://spoonacular.com/recipeImages/634873-312x231.jpg",
                imageUrls: ["Best-Baked-Macaroni-and-Cheese-634873.jpg"],
                readyInMinutes: 45,
                servings: 12,
                title: "Best Baked Macaroni and Cheese",
            },
            {
                id: 633508,
                image:
                    "https://spoonacular.com/recipeImages/633508-312x231.jpg",
                imageUrls: ["Baked-Cheese-Manicotti-633508.jpg"],
                readyInMinutes: 45,
                servings: 6,
                title: "Baked Cheese Manicotti",
            },
            {
                id: 634873,
                image:
                    "https://spoonacular.com/recipeImages/634873-312x231.jpg",
                imageUrls: ["Best-Baked-Macaroni-and-Cheese-634873.jpg"],
                readyInMinutes: 45,
                servings: 12,
                title: "Best Baked Macaroni and Cheese",
            },
        ],
        totalResults: 719,
    };
}
