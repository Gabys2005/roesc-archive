function getRoescs() {
	return new Promise((resolve) => {
		import("../data/generated/roescs.json").then((data) => {
			resolve(data.default);
		});
	});
}

function getRoescByLink(link) {
	return new Promise((resolve, reject) => {
		getRoescs().then((roescs) => {
			const roesc = roescs.find((r) => r.link === link.toLowerCase());
			if (roesc) {
				resolve(roesc);
			} else {
				reject("This RoESC doesn't exist (yet)");
			}
		});
	});
}

function getUsers() {
	return new Promise((resolve) => {
		import("../data/original/users.json").then((users) => {
			resolve(users.default);
		});
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

export { getRoescs, getRoescByLink, getUsers, getUserById };
