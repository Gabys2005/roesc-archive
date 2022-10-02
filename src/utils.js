const showNames = {
	oc: "Opening Ceremony",
	sf1: "Semi-Final 1",
	sf2: "Semi-Final 2",
	gf: "Grand Final",
	participants: "Participants",
	qr1: "Qualification Round 1",
	qr2: "Qualification Round 2",

	host: "Host",
	slogan: "Slogan",
	logo: "Logo",
	allocation: "Allocation Draw",
	dates: "Dates",
	stage: "Stage",
	gf_ro: "GF Running Order",
	venue: "Venue",
	city: "City",
	hosts: "Hosts",
	ro: "Running Order",
};

function joinTable(text) {
	if (Array.isArray(text)) {
		return text.join(", ");
	} else {
		return text;
	}
}

function getShowName(short) {
	if (showNames[short]) {
		return showNames[short];
	} else {
		return "< ERROR >";
	}
}

function objectToArray(obj) {
	if (!obj) return [];
	return Object.keys(obj).map((key) => [key, obj[key]]);
}

function sum(arr) {
	return arr.reduce((a, b) => a + b, 0);
}

function average(arr) {
	const arrSum = sum(arr);
	const avg = arrSum / arr.length;
	return Math.round(avg * 10) / 10;
}

function getDate(str) {
	return Date.parse(str.replace("th", "").replace("st", "").replace("nd", "").replace("rd", ""));
}

export { joinTable, getShowName, objectToArray, sum, average, getDate };
