<template>
	<div class="profile">
		<div class="header">
			<span class="header-name">
				{{ headerTitle }}
			</span>
		</div>
		<div class="container">
			<div class="photo">
				<!-- <img :src="getProfilePicture()" class="profile-picture" /> -->
				<img
					src="../assets/food-hub-logo.png"
					class="profile-picture"
				/>
			</div>
			<div class="information">
				<p>e-mail:</p>
				<input type="button" value="change password" />
				<input type="button" value="sign out" />
				<input type="button" value="delete account" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Profile",
	data() {
		return {
			headerTitle: "Your profile",
		};
	},
	methods: {
		getProfilePicture: function() {
			//TODO if logged in from Facebook
			//return profile picture link
			//else return default profile picture link
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
.profile-image {
	max-width: 100%;
	height: auto;
	object-fit: cover;
}
.photo {
	width: 50px;
	display: inline-block;
	border: 1px solid black;
}
.information {
	display: inline-block;
}
</style>
