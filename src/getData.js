import { sum } from "./utils";

const cache = {};
let fullDataCached = null;

async function getRoesc(name) {
	if (cache[name]) {
		return cache[name];
	}
	const data = await fetch(`${process.env.PUBLIC_URL}/data/individual/${name}.json`).then((res) => res.json());
	cache[name] = data;
	return data;
}

async function getFullData() {
	console.log("egging");
	if (fullDataCached) {
		return fullDataCached;
	}
	const data = await fetch(`${process.env.PUBLIC_URL}/data/combined.json`).then((res) => res.json());
	fullDataCached = data;
	data.forEach((roesc) => {
		cache[roesc.link] = roesc;
	});
	console.log("egged");
	return data;
}

async function getEdition(roesc, edition) {
	const roescData = await getRoesc(roesc);
	return roescData.editions.find((r) => r.link === edition);
}

async function getParticipantsData() {
	const data = await getFullData();
	const dataToLoad = [];

	function addDataToParticipant(name, data) {
		let pData = dataToLoad.find((r) => r.username.toLowerCase() === name.toLowerCase());
		if (!pData) {
			dataToLoad.push({
				username: name,
				points: [],
				places: [],
				// Todo: more fields
			});
			pData = dataToLoad[dataToLoad.length - 1];
		}
		for (const showKey in data.shows) {
			if (Object.hasOwnProperty.call(data.shows, showKey)) {
				const showData = data.shows[showKey];
				if (showData.points) {
					pData.points.push(showData.points);
				}
				if (showData.place) {
					pData.places.push(showData.place);
				}
			}
		}
	}

	data.forEach((roesc) => {
		roesc.editions.forEach((edition) => {
			edition.entries.forEach((entry) => {
				if (Array.isArray(entry.participant)) {
					entry.participant.forEach((r) => {
						addDataToParticipant(r, entry);
					});
				} else {
					addDataToParticipant(entry.participant, entry);
				}
			});
		});
	});

	dataToLoad.sort((a, b) => {
		return sum(b.points) - sum(a.points); // TODO: running sum here is probably not the greatest idea
	});

	return dataToLoad;
}

async function getParticipantData(username) {
	const data = await getParticipantsData();
	return data.find((r) => r.username.toLowerCase() === username.toLowerCase());
}

export { getRoesc, getEdition, getFullData, getParticipantsData, getParticipantData };
