function getUsers() {
	return new Promise((resolve) => {
		import("../data/generated/users.json").then((data) => resolve(data.default));
	});
}

function getUsersDetailed() {
	return new Promise((resolve) => {
		import("../data/original/users.json").then((data) => resolve(data.default));
	});
}

function getUserById(id) {
	return new Promise((resolve, reject) => {
		getUsers().then((users) => {
			const user = users.find((u) => u.id === id);
			if (user) {
				resolve(user);
			} else {
				reject("User doesn't exist");
			}
		});
	});
}

function getDetailedUserByUsername(username) {
	return new Promise((resolve, reject) => {
		getUsersDetailed().then((users) => {
			const user = users.find((u) => u.current.username.toLowerCase() === username.toLowerCase());
			if (user) {
				resolve(user);
			} else {
				reject("User doesn't exist");
			}
		});
	});
}

function getUserByUsername(username) {
	return new Promise((resolve, reject) => {
		getUsers().then((users) => {
			const user = users.find((u) => u.name.toLowerCase() === username.toLowerCase());
			if (user) {
				resolve(user);
			} else {
				reject("User doesn't exist");
			}
		});
	});
}

export { getUsers, getUsersDetailed, getUserById, getUserByUsername, getDetailedUserByUsername };
