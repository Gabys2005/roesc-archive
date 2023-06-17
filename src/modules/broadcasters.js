function getBroadcasters() {
	return new Promise((resolve) => {
		import("../data/original/broadcasters.json").then((data) => {
			resolve(data.default); // TODO: generate a broadcaters .json without written content?
		});
	});
}

function getBroadcasterById(id) {
	return new Promise((resolve, reject) => {
		getBroadcasters().then((broadcasters) => {
			const broadcaster = broadcasters.find((b) => b.id === id);
			if (broadcaster) {
				resolve(broadcaster);
			} else {
				reject("This broadcaster doesn't exist");
			}
		});
	});
}

function getBroadcasterByLink(link) {
	return new Promise((resolve, reject) => {
		getBroadcasters().then((broadcasters) => {
			const broadcaster = broadcasters.find((b) => b.link === link);
			if (broadcaster) {
				resolve(broadcaster);
			} else {
				reject("This broadcaster doesn't exist");
			}
		});
	});
}

export { getBroadcasters, getBroadcasterById, getBroadcasterByLink };
