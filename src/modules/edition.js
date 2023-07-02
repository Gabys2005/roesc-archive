function getWinner(entries) {
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		const gf = entry.shows.find((s) => s.id === "gf");
		if (gf && gf.won) {
			return entry;
		}
	}
}

function getPlace(entries, show, place) {
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		const showData = entry.shows.find((s) => s.id === show);
		if (showData && showData.place === place) {
			return entry;
		}
	}
}

export { getWinner, getPlace };
