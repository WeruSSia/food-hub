<template>
    <div class="favourites">
        <CardsContainer />
    </div>
</template>

<script>
import CardsContainer from "@/components/cards-container/CardsContainer.vue";
export default {
    name: "Favourites",
    components: {
        CardsContainer,
    },
};
</script>
