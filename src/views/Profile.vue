<template>
	<div class="profile" ref="profile-container">
		<div class="header">
			<span class="header-name">
				{{ headerTitle }}
			</span>
		</div>
		<div class="container">
			<div class="profile-picture-div">
				<img :src="getProfilePicture()" class="profile-picture" />
			</div>
			<div class="information">
				<p>
					<span class="e-mail">e-mail: </span>
					<span>{{ emailAddress }}</span>
				</p>
				<input
					type="button"
					value="Sign out"
					class="info-button"
					@click="signOut()"
				/>

				<input
					type="button"
					value="Delete account"
					class="info-button"
					@click="deleteAccount()"
				/>
			</div>
		</div>
		<div class="random-joke-div">
			<p class="random-joke">
				{{ randomJoke }}
			</p>
		</div>
		<input
			type="button"
			value="Give me another one!"
			class="joke-button"
			@click="printJoke()"
		/>
	</div>
</template>

<script>
import defaultPicture from "../assets/profile_page/profile-icon.svg";
import { getRandomJoke } from "../services/services.js";
import * as firebase from "firebase/app";
require("firebase/auth");
import "firebase/database";
export default {
	name: "Profile",
	data() {
		return {
			headerTitle: "Your profile",
			emailAddress: "",
			randomJoke: "",
		};
	},
	beforeMount() {
		this.printJoke();
	},
	mounted() {
		this.getEmail();
	},
	methods: {
		getProfilePicture: function() {
			//TODO if logged in from Facebook
			//return facebook profile picture link
			//else return default profile picture link like below
			return defaultPicture;
		},
		signOut: function() {
			firebase.auth().signOut();
			this.$router.push("/");
		},
		deleteAccount: function() {
			if (confirm("Are you sure you want to delete your account?")) {
				const user = firebase.auth().currentUser;
				if (user) {
					user.delete();
					this.signOut();
				}
			}
		},
		async printJoke() {
			const result = await getRandomJoke();
			if (result) {
				this.randomJoke = result.text;
			}
		},
		async getEmail() {
			const loader = this.$loading.show({
				container: this.$refs["profile-container"],
				canCancel: false,
			});
			setTimeout(() => {
				const user = firebase.auth().currentUser;
				if (user) {
					this.emailAddress = user.email;
				}
				loader.hide();
			}, 1500);
		},
	},
};
</script>

<style scoped>
.header {
	border-bottom: 1.5px solid rgb(236, 236, 236);
	width: 95%;
	margin: auto;
	text-align: left;
}
.header-name {
	color: #333333;
	font-size: 26px;
	padding: 5px;
	font-weight: 600;
}
.profile-picture {
	object-fit: cover;
	width: 100%;
	height: auto;
	border-radius: 15px;
	box-shadow: 3px 3px 10px rgb(236, 236, 236);
	vertical-align: middle;
}
.profile-picture-div {
	width: 200px;
	height: auto;
	float: left;
	border: 1px solid rgb(236, 236, 236);
	border-radius: 15px;
	box-shadow: 3px 3px 10px rgb(236, 236, 236);
	margin-right: 20px;
}
.information {
	width: auto;
	float: left;
	vertical-align: top;
	text-align: start;
}
.container {
	margin: 30px 50px 50px 30px;
}
.e-mail {
	font-weight: 600;
	color: #333333;
}
.info-button {
	display: block;
	margin: 20px 0 20px 0;
	width: auto;
	height: 40px;
	font-family: "Poppins", sans-serif;
	font-weight: 200;
	color: white;
	border: none;
	background-color: #cccccc;
	display: flex;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	padding: 10px;
}
.info-button:focus,
.joke-button {
	outline: none;
}
.info-button:hover,
.joke-button {
	cursor: pointer;
}

.joke-button {
	display: block;
	margin: 20px 0 20px 0;
	width: auto;
	height: 40px;
	font-family: "Poppins", sans-serif;
	font-weight: 200;
	color: white;
	border: none;
	background-color: #cccccc;
	display: flex;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.17);
	padding: 10px;
	margin: 0 30px 30px 30px;
}
.random-joke-div {
	clear: both;
	text-align: left;
	margin: 0 30px 0 30px;
	max-width: 450px;
}
.random-joke {
	padding: 30px 0 10px 0;
	font-style: italic;
	color: #555555;
}
</style>
