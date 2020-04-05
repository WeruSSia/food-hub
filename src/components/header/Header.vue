<template>
    <div class="header">
        <div class="img-box">
            <img src="../../assets/food-hub-logo.png" width="70" height="56" />
        </div>
        <button @click="goToHomePage">HOME</button>
        <button @click="goToFavourites">FAVOURITES</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //
        };
    },
    methods: {
        goToHomePage() {
            this.$router.push("/");
        },
        goToFavourites() {
            this.$router.push("/favourites");
        },
    },
};
</script>
<style scoped>
.header {
    background-color: #ffffff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
    display: flex;
    align-items: center;
    height: 80px;
    margin-bottom: 20px;
    position: absolute;
    top: 0;
    width: 100%;
}

.img-box {
    align-items: center;
    background-color: rgba(242, 242, 242, 1);
    border: 1px solid rgba(242, 242, 242, 1);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    height: 70px;
    margin-left: 20px;
    width: 130px;
}
</style>
