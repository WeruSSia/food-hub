<template>
    <div id="header" class="header">
        <div class="img-box" @click="goToHomePage">
            <img src="../../assets/food-hub-logo.png" width="70" height="56" />
        </div>

        <div id="items">
            <div id="search">
                <input type="text" placeholder="Search for recipes" />
                <div>
                    <button class="button" @click="ingredientsSearch">
                        <span>Ingredients</span>
                    </button>
                </div>
                <div @click="searchRecipes">
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
                </div>
            </div>

            <div id="search-icon" class="icon" @click="ingredientsSearch">
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
            </div>

            <div id="history-icon" class="icon" @click="goToHistory">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#555555"
                    width="36px"
                    height="36px"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    />
                </svg>
            </div>

            <div id="favourites-icon" class="icon" @click="goToFavourites">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#D9001B"
                    width="36px"
                    height="36px"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </svg>
            </div>

            <div>
                <button class="button" @click="goToSignIn">
                    <span>SIGN IN</span>
                </button>
            </div>

            <div id="profile-icon" class="icon" @click="goToProfile">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#555555"
                    width="60px"
                    height="60px"
                    filter="url(#f3)"
                >
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </div>
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
        goToHomePage() {
            this.$router.push("/");
        },
        ingredientsSearch() {
            this.$parent.$data.showSearchArea = true;
        },
        searchRecipes() {
            this.$router.push("/results");
        },
        goToHistory() {
            //TODO router
            // this.$router.push("/history");
        },
        goToFavourites() {
            this.$router.push("/favourites");
        },
        goToSignIn() {
            //TODO router
            // this.$router.push("/sign-in");
        },
        goToProfile() {
            //TODO router
            // this.$router.push("/profile");
        },
        makeResponsive() {
            var x = document.getElementById("header");
            if (x.className === "header") {
                x.className += " responsive";
            } else {
                x.className = "header";
            }
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
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

.img-box {
    width: 130px;
    height: 64px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
    border: 1px solid rgba(242, 242, 242, 1);
    border-radius: 14px;
    background-color: rgba(242, 242, 242, 1);
}

.img-box:hover,
#search div,
#history-icon:hover,
#favourites-icon:hover,
.button:hover,
#profile-icon:hover {
    cursor: pointer;
}

.img-box:active,
.button:active {
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.17);
    transform: translateY(2px);
}

#history-icon:active,
#favourites-icon:active,
#profile-icon:active {
    border-radius: 10px;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.17);
    transform: translateY(2px);
}

#items {
    width: 100%;
    height: 80px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#search {
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(242, 242, 242, 1);
    border-radius: 14px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
}

#search input {
    float: left;
    width: 315px;
    height: 35px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    border: none;
}

#search input:focus,
.button:focus {
    outline: none;
}

#search .button {
    width: 100px;
    height: 35px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    color: white;
    border: none;
    background-color: #cccccc;
}

#search svg {
    float: right;
    margin-right: 15px;
}

.icon {
    margin-right: 2%;
}

#search-icon {
    display: none;
}

#history-icon {
    margin-left: auto;
}

.button {
    width: 96px;
    height: 44px;
    margin-right: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    color: #555555;
    border: 1px solid rgba(242, 242, 242, 1);
    border-radius: 9px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
    background-color: #ffffff;
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

/* RESPONSIVE VIEW */

@media screen and (max-width: 960px) {
    #search,
    .button {
        display: none;
    }
    #search-icon {
        display: block;
        margin-left: auto;
    }
    #history-icon {
        margin-left: 0;
    }
}

@media screen and (max-width: 960px) {
}
</style>
