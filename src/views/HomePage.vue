<template>
    <div class="home">
        <Carousel />
        <CardsContainer />
    </div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import CardsContainer from "@/components/cards-container/CardsContainer.vue";

export default {
    name: "HomePage",
    components: {
        Carousel,
        CardsContainer,
    },
    data() {
        return {};
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
