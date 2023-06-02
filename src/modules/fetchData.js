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

function getBroadcasters() {
	return new Promise((resolve) => {
		import("../data/original/broadcasters.json").then((broadcasters) => {
			resolve(broadcasters.default);
		});
	});
}

export { getRoescs, getRoescByLink, getBroadcasters };
