<template>
    <div class="home">
        <button @click="searchStarted = !searchStarted">Start searching</button>
        <Slider v-if="!searchStarted" />
        <CardsContainer v-else />
    </div>
</template>

<script>
import Slider from "@/components/slider/Slider.vue";
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
export default {
    name: "HomePage",
    components: {
        Slider,
        CardsContainer,
    },
    data() {
        return {
            searchStarted: false,
        };
    },
};
</script>
<style scoped>
.home {
    display: flex;
    flex-direction: column;
}
</style>
