function getBroadcasters() {
	return new Promise((resolve) =>
		import("../data/generated/broadcasters.json").then((data) => resolve(data.default))
	);
}

function getBroadcastersDetailed() {
	return new Promise((resolve) =>
		import("../data/generated/broadcasters_detailed.json").then((data) => resolve(data.default))
	);
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
		getBroadcastersDetailed().then((broadcasters) => {
			const broadcaster = broadcasters.find((b) => b.link === link);
			if (broadcaster) {
				resolve(broadcaster);
			} else {
				reject("This broadcaster doesn't exist");
			}
		});
	});
}

export { getBroadcasters, getBroadcastersDetailed, getBroadcasterById, getBroadcasterByLink };
