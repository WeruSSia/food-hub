<template>
	<div>
		<div class="cards-container">
			<RecipeCard
				v-for="recipe in pageRecipeList"
				:recipeData="recipe"
				:key="recipe.id"
			/>
		</div>
		<Paginate
			v-if="pageCount > 1"
			:page-count="pageCount"
			:page-range="3"
			:margin-pages="2"
			:click-handler="paginationClickHandler"
			:prev-text="'Prev'"
			:next-text="'Next'"
			:container-class="'pagination'"
		/>
	</div>
</template>
<script>
import RecipeCard from "@/components/recipe-card/RecipeCard.vue";
import Paginate from "vuejs-paginate";
export default {
	components: {
		RecipeCard,
		Paginate,
	},
	props: {
		recipeList: {
			type: Array,
			required: true,
		},
		recipesPerPage: {
			type: Number,
			required: false,
			default: 6,
		},
		totalResults: {
			type: Number,
			required: false,
		},
		offsetMode: {
			type: Boolean,
			required: false,
		},
	},
	computed: {
		pageCount() {
			if (this.totalResults) {
				return Math.ceil(this.totalResults / this.recipesPerPage);
			} else {
				return Math.ceil(this.recipeList.length / this.recipesPerPage);
			}
		},
		pageRecipeList() {
			if (this.offsetMode) {
				return this.recipeList;
			} else {
				return this.recipeList.slice(
					this.recipesPerPage * (this.pageIndex - 1),
					this.recipesPerPage * this.pageIndex
				);
			}
		},
	},
	data() {
		return {
			pageIndex: 1,
			offsetTop: 0,
		};
	},
	mounted() {
		this.offsetTop = this.$el.offsetTop;
	},
	methods: {
		paginationClickHandler(index) {
			this.pageIndex = index;
			this.$emit("paginationClicked", index);
			window.scrollTo({
				top: this.offsetTop,
				behavior: "smooth",
			});
		},
	},
};
</script>
<style scoped>
a {
	background-color: transparent;
	outline: 0;
}

.cards-container {
	align-content: center;
	column-gap: 20px;
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(3, calc(33% - 11px));
	row-gap: 20px;
	padding: 0px 20px;
}

@media screen and (max-width: 650px) {
	.cards-container {
		grid-template-columns: repeat(2, calc(50% - 11px));
	}
}

@media screen and (max-width: 450px) {
	.cards-container {
		grid-template-columns: repeat(1, 100%);
		justify-self: center;
	}
}
</style>
<style>
.pagination {
	display: inline-block;
	padding-left: 0;
	margin: 20px 0;
	border-radius: 4px;
}
.pagination > li {
	display: inline;
}
.pagination > li > a,
.pagination > li > span {
	position: relative;
	float: left;
	padding: 6px 12px;
	margin-left: -1px;
	line-height: 1.42857143;
	color: rgb(217, 0, 27);
	text-decoration: none;
	background-color: #fff;
	border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
	margin-left: 0;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
	outline: none;
	z-index: 3;
	color: rgb(217, 0, 27);
	background-color: #eee;
	border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
	z-index: 2;
	color: #fff;
	cursor: default;
	background-color: rgb(217, 0, 27);
	border-color: rgb(217, 0, 27);
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
	color: #777;
	cursor: not-allowed;
	background-color: #fff;
	border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
	padding: 10px 16px;
	font-size: 18px;
	line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
	padding: 5px 10px;
	font-size: 12px;
	line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}
</style>
