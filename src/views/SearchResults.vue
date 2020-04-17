<template>
    <div
        v-if="
            Object.keys(searchResultFromVuex).length === 0 &&
                Object.keys(searchDataFromVuex).length === 0
        "
    >
        <h3>You should search for some recipes first!</h3>
    </div>

    <div v-else-if="searchResultFromVuex.totalResults === 0">
        <h2>We're sorry, no results have been found...</h2>
        <h3>See other recipes and smart cooking ideas:</h3>
        <div class="results">
            <CardsContainer :recipe-list="randomRecipeList" />
        </div>
    </div>

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
                    class="including"
                    v-for="(item, index) in searchDataFromVuex.includes"
                    :key="index"
                >
                    {{ item }}
                </div>
                <div class="excluding"></div>
            </div>
        </div>
        <div class="results">
            <CardsContainer :recipe-list="searchResultFromVuex.results" />
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
};
</script>

<style scoped>
.heading {
    display: inline-block;
    width: 100%;
}

.ingredients {
    display: inline-flex;
    height: 50px;
    align-items: center;
    justify-items: center;
}

.including {
    margin-right: 10px;
}

.results {
    display: grid;
    row-gap: 20px;
    margin-bottom: 20px;
}
</style>
