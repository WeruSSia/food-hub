<template>
    <div id="header" class="header">
        <div id="items">
            <div id="search">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#555555"
                    width="36px"
                    height="36px"
                >
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <input type="text" class="input" placeholder="Keywords" />
            </div>
            <div class="ingredients">
                <div class="ingredients-container">
                    <input
                        type="text"
                        class="input"
                        placeholder="Include ingredients"
                    />
                </div>
                <div class="add">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        width="30px"
                        height="30px"
                    >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </div>
            </div>
            <div class="ingredients">
                <div class="ingredients-container">
                    <input
                        type="text"
                        class="input"
                        placeholder="Exclude ingredients"
                    />
                </div>
                <div class="add">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        width="30px"
                        height="30px"
                    >
                        <path d="M19 13H5v-2h14v2z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </div>
            </div>
            <div>
                <button class="button" @click="searchRecipes">
                    <span>SEARCH</span>
                </button>
            </div>
        </div>
        <div id="close" class="icon" @click="close">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#555555"
                width="16px"
                height="16px"
            >
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
            </svg>
        </div>
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
        searchRecipes() {
            this.$router.push("/results");
            this.$parent.$data.showSearchArea = false;
        },
        close() {
            this.$parent.$data.showSearchArea = false;
        },
    },
};
</script>
<style scoped>
.header {
    position: relative;
    display: flex;
    width: 100%;
    height: 80px;
    top: 0;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

#items {
    width: 100%;
    height: 80px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
}

#search {
    width: 200px;
    height: 50px;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(242, 242, 242, 1);
    border-radius: 14px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

.input {
    float: left;
    width: 140px;
    height: 35px;
    margin-left: 10px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    border: none;
}

#search input:focus,
.button:focus,
.add:focus,
.input:focus {
    outline: none;
}

#search svg {
    float: right;
    margin-left: 2%;
}

.ingredients {
    width: 270px;
    height: 50px;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(242, 242, 242, 1);
    border-radius: 14px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

.ingredients-container {
    width: 80%;
    height: 40px;
    margin-left: 10px;
    padding-top: 3px;
}

.add {
    width: 40px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: -1px;
    border-radius: 0 14px 14px 0;
    background-color: #cccccc;
}

.icon {
    margin-right: 2%;
}

.button {
    width: 96px;
    height: 44px;
    margin-left: 20px;
    font-weight: bold;
    color: #ffffff;
    border: 0;
    border-radius: 9px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
    background-color: #ea0a2a;
}

.button:hover,
.add:hover,
.icon:hover {
    cursor: pointer;
}

.button:active {
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.17);
    transform: translateY(2px);
}

.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
}

.button:hover span {
    padding-right: 12px;
}

.button:hover span:after {
    opacity: 1;
    right: 0;
}

#close {
    margin-top: 8px;
    margin-right: 10px;
}

/* RESPONSIVE VIEW */

@media screen and (max-width: 960px) {
    .header #items {
        width: 98%;
    }
}
</style>
