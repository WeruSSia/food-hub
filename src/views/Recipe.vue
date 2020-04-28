<template>
	<div class="recipe">
		<BasicInfo :recipe="recipe" />
		<Ingredients :recipe="recipe" />
		<Directions :recipe="recipe" />
		<NutritionFacts :recipe="recipe" />
	</div>
</template>

<script>
import BasicInfo from "@/components/recipe/BasicInfo.vue";
import Ingredients from "@/components/recipe/Ingredients.vue";
import Directions from "@/components/recipe/Directions.vue";
import NutritionFacts from "@/components/recipe/NutritionFacts.vue";
import { getRecipe } from "../services/services.js";
import * as firebase from "firebase/app";
require("firebase/auth");
import "firebase/database";

export default {
	name: "Recipe",
	components: {
		BasicInfo,
		Ingredients,
		Directions,
		NutritionFacts,
	},
	data() {
		return {
			recipe: {},
		};
	},
	beforeMount() {
		this.getRecipeInfo();
	},
	methods: {
		async getRecipeInfo() {
			const result = await getRecipe(this.$route.params.id);
			if (result) {
				this.recipe = result;
				var user = firebase.auth().currentUser;
				var data = {
					title: this.recipe.title,
					image: this.recipe.image || "",
					id: this.recipe.id,
				};

				if (user) {
					var userId = user.uid;
					var database = firebase.database();
					var ref = database.ref("users/" + userId + "/history");
					ref.push(data);
				}
			}
		},
	},
};
</script>
