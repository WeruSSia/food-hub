<template functional>
    <router-link
        v-if="props.recipeData.id"
        :to="'recipe/' + props.recipeData.id"
    >
        <div class="card">
            <img
                v-if="props.recipeData.image"
                class="image"
                :src="props.recipeData.image"
            />
            <img
                v-else
                class="image"
                src="../../assets/recipe-card-no-image.jpg"
            />
            <div class="infobox">
                <div class="title-container">
                    <p v-if="props.recipeData.title" class="title">
                        {{ props.recipeData.title }}
                    </p>
                </div>
            </div>
        </div>
    </router-link>
</template>
<style scoped>
.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 8px 3px rgba(85, 85, 85, 0.3);
    min-height: 85px;
    max-height: 170px;
    max-width: 300px;
    position: relative;
    overflow: hidden;
    transition: 0.15s;
}

.card:hover {
    box-shadow: 0 0 12px 2px rgba(85, 85, 85, 0.5);
    cursor: pointer;
}

.image {
    max-height: inherit;
    width: 100%;
}

.infobox {
    bottom: 0px;
    border: none;
    background: inherit;
    background-color: rgba(85, 85, 85, 0.8);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85px;
    position: absolute;
    width: 100%;
}

.title-container {
    align-items: flex-start;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
}

.title {
    display: -webkit-box;
    font-size: 18px;
    line-height: 24px;
    text-align: start;
    max-height: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
}

p.title {
    margin-block-start: 0;
    margin-block-end: 0;
}

p.description {
    margin-block-start: 0;
    margin-block-end: 0;
}

@media screen and (max-width: 250px) {
    .title {
        font-size: 16px;
    }
}
</style>
