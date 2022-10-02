import { sum } from "./utils";

async function getFullData() {
	const data = await import("./data/generated/combined.json");
	return data.default;
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

	console.log(data);

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
	const data = await getFullData();
	const participantData = [];
	data.forEach((d) => {
		d.editions.forEach((edition) => {
			const pData = edition.entries.find((r) =>
				Array.isArray(r.participant)
					? r.participant.find((a) => a.toLowerCase() === username.toLowerCase())
					: r.participant.toLowerCase() === username.toLowerCase()
			);
			if (pData) {
				participantData.push({
					fullData: d,
					editionData: edition,
					participantData: pData,
				});
			}
		});
	});
	return participantData;
}

export { getFullData, getParticipantsData, getParticipantData };
