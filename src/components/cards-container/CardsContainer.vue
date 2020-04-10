<template>
    <div class="cards-container">
        <RecipeCard
            v-for="recipe in recipeList"
            :data="recipe"
            :key="recipe.id"
        />
    </div>
</template>
<script>
import RecipeCard from "@/components/recipe-card/RecipeCard.vue";
import { getMockRecipeData } from "../../mock/RecipeData";
export default {
    components: {
        RecipeCard,
    },
    data() {
        return {
            recipeList: getMockRecipeData(),
        };
    },
};
</script>
<style scoped>
.cards-container {
    align-content: center;
    column-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    row-gap: 20px;
    padding: 0px 20px;
}

@media screen and (max-width: 650px) {
    .cards-container {
        grid-template-columns: repeat(2, auto);
    }
}

@media screen and (max-width: 450px) {
    .cards-container {
        grid-template-columns: repeat(1, auto);
        justify-self: center;
    }
}
</style>
