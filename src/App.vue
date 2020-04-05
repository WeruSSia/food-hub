<template>
    <div id="app" style="min-height: 100%; position:relative">
        <Header />
        <div class="view-wrapper">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.view-wrapper {
    padding-top: 100px;
    padding-bottom: 80px;
}
</style>
