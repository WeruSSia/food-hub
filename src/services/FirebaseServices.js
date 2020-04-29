import * as firebase from "firebase/app";
require("firebase/auth");
import "firebase/database";

export function getUser() {
	return firebase.auth().currentUser;
}

export async function signInWithFacebook() {
	const provider = new firebase.auth.FacebookAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then(() => {
			return "";
		})
		.catch(error => {
			return error;
		});
}

export async function createUserWithEmailAndPassword(email, password) {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			return "";
		})
		.catch(error => {
			return error;
		});
}

export async function signInWithEmailAndPassword(email, password) {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			return "";
		})
		.catch(error => {
			return error;
		});
}

export async function sendPasswordResetEmail(email) {
	return firebase
		.auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			return "";
		})
		.catch(error => {
			return error;
		});
}

export async function signOutUser() {
	const user = getUser();
	if (user) {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
	} else {
		return false;
	}
}

export async function deleteAccount() {
	const user = getUser();
	if (user) {
		return user
			.delete()
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
	} else {
		return false;
	}
}

export async function getUserFavourites() {
	const user = getUser();
	if (user) {
		const userId = user.uid;
		return firebase
			.database()
			.ref("users/" + userId + "/favourites")
			.once("value")
			.then(async snapshot => {
				const result = snapshot.val();
				if (result) {
					return Object.values(result)
						.map(recipe => recipe)
						.reverse();
				}
			})
			.catch(() => {
				return [];
			});
	} else {
		return [];
	}
}

export async function addToUserSearchHistory(recipeData) {
	const user = getUser();
	if (user) {
		const userId = user.uid;
		const database = firebase.database();
		const ref = database.ref("users/" + userId + "/history");
		return ref
			.push(recipeData)
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
	} else {
		return false;
	}
}

export async function getUserSearchHistory() {
	const user = getUser();
	if (user) {
		const userId = user.uid;
		return firebase
			.database()
			.ref("users/" + userId + "/history")
			.once("value")
			.then(snapshot => {
				const result = snapshot.val();
				if (result) {
					return Object.values(result)
						.map(recipe => recipe)
						.reverse();
				}
			})
			.catch(() => {
				return [];
			});
	} else {
		return [];
	}
}

export async function addToUserFavourites(recipeData) {
	const user = getUser();
	if (user) {
		const userId = user.uid;
		const database = firebase.database();
		const ref = database.ref("users/" + userId + "/favourites");
		return ref
			.push(recipeData)
			.then(() => {
				return true;
			})
			.catch(() => {
				return false;
			});
	} else {
		return false;
	}
}

export async function removeFromUserFavourites(recipeId) {
	const user = getUser();
	if (user) {
		const userId = user.uid;
		const database = firebase.database();
		const ref = database.ref("users/" + userId + "/favourites");
		return ref.once("value").then(async snapshot => {
			const result = snapshot.val();
			if (result) {
				for (const [key, value] of Object.entries(result)) {
					if (value.id === recipeId) {
						const removeRef = database.ref(
							"users/" + userId + "/favourites/" + key
						);
						removeRef
							.remove()
							.then(() => {
								return true;
							})
							.catch(() => {
								return false;
							});
					}
				}
			} else {
				return false;
			}
		});
	} else {
		return false;
	}
}

export async function checkIfRecipeIsInFavourites(recipeId) {
	const user = getUser();
	if (user) {
		const userId = user.uid;
		return firebase
			.database()
			.ref("users/" + userId + "/favourites")
			.once("value")
			.then(async snapshot => {
				const result = snapshot.val();
				if (result) {
					let isRecipeInFavourites = false;
					for (const recipe of Object.values(result)) {
						if (recipe.id === recipeId) {
							isRecipeInFavourites = true;
							break;
						}
					}
					return isRecipeInFavourites;
				} else {
					return false;
				}
			});
	} else {
		return false;
	}
}
