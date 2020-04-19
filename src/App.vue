<template>
	<div id="app" style="min-height: 100%; position:relative">
		<Header @toggleSignInModal="onToggleSignInModal" />
		<div class="view-wrapper">
			<router-view />
		</div>
		<Footer />
		<SignInModal
			v-if="isSignInModalVisible"
			@toggleSignInModal="onToggleSignInModal"
		/>
	</div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import SignInModal from "@/components/sign-in-modal/SignInModal.vue";
export default {
	components: {
		Header,
		Footer,
		SignInModal,
	},
	data() {
		return {
			isSignInModalVisible: false,
		};
	},
	methods: {
		onToggleSignInModal() {
			this.isSignInModalVisible = !this.isSignInModalVisible;
		},
	},
};
</script>

<style>
#app {
	width: 960px;
	min-width: 360px;
	margin-left: auto;
	margin-right: auto;
	font-family: "Poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-color: white;
}
.view-wrapper {
	position: relative;
	padding-bottom: 80px;
}

@media screen and (max-width: 960px) {
	#app {
		width: 100%;
	}
}
</style>
