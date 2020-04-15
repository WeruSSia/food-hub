<template>
    <div class="results">
        <CardsContainer />
    </div>
</template>

<script>
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
export default {
    name: "SearchResults",
    components: {
        CardsContainer,
    },
};
</script>
