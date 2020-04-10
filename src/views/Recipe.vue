<template>
	<div class="recipe">
		<BasicInfo />
	</div>
</template>

<script>
import BasicInfo from "@/components/recipe/BasicInfo.vue";
export default {
	name: "Recipe",
	components: {
		BasicInfo,
	},
};
</script>
