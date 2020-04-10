<template functional>
    <router-link :to="'recipe/' + props.data.id">
        <div class="card">
            <img class="image" :src="props.data.image" />
            <div class="infobox">
                <div class="info-container">
                    <p class="title">{{ props.data.title }}</p>
                    <p class="description">
                        //description
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
    min-height: 120px;
    min-width: 180px;
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
    flex-direction: column;
    height: 85px;
    position: absolute;
    width: 100%;
}

.info-container {
    align-items: flex-start;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 15px 15px;
}

.title {
    font-size: 18px;
    font-weight: 500;
    text-align: start;
}

.description {
    font-size: 13px;
    line-height: 15px;
    text-align: start;
    max-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
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
</style>
