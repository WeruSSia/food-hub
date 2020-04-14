<template>
    <div class="home">
        <Carousel />
        <CardsContainer :recipe-list="randomRecipeList" />
    </div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import CardsContainer from "@/components/cards-container/CardsContainer.vue";

//TODO: Change this to get random recipe API call
import { getMockRecipeList } from "../mock/RecipeData.js";

export default {
    name: "HomePage",
    components: {
        Carousel,
        CardsContainer,
    },
    data() {
        return {
            randomRecipeList: getMockRecipeList(),
        };
    },
};
</script>
<style scoped>
.home {
    display: grid;
    row-gap: 20px;
    margin-bottom: 20px;
}
</style>
