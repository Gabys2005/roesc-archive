function getEditions(roesc) {
	return new Promise((resolve, reject) => {
		import(`../data/generated/${roesc}.json`)
			.then((data) => {
				resolve(data.default);
			})
			.catch(() => {
				reject("This RoESC doesn't exist");
			});
	});
}

function getEdition(roesc, editionLink) {
	return new Promise((resolve, reject) => {
		import(`../data/original/${roesc}/${editionLink}.json`)
			.then((data) => resolve(data.default))
			.catch(() => reject("This RoESC or edition doesn't exist (yet)"));
	});
}

export { getEditions, getEdition };
