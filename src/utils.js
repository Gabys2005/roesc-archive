const showNames = {
	oc: "Opening Ceremony",
	sf: "Semi-Final",
	sf1: "Semi-Final 1",
	sf2: "Semi-Final 2",
	gf: "Grand Final",
	qr1: "Qualification Round 1",
	qr2: "Qualification Round 2",
	pqr: "Pre-Qualification Round",
};

const revealNames = {
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

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const urlRegex = /[^A-Za-z0-9-_.~]/g;

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
	} else if (revealNames[short]) {
		return revealNames[short];
	} else {
		return "< ERROR >";
	}
}

function objectToArray(obj) {
	if (!obj) return [];
	return Object.keys(obj).map((key) => [key, obj[key]]);
}

function arrayToObject(arr) {
	return arr.reduce((a, v) => ({ ...a, [v[0]]: v[1] }), {});
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

function getTh(num) {
	const str = num.toString();
	if (str.endsWith("1") && str !== "11") {
		return "st";
	} else if (str.endsWith("2") && str !== "12") {
		return "nd";
	} else if (str.endsWith("3") && str !== "13") {
		return "rd";
	}
	return "th";
}

function getDateString(str) {
	if (!isValidDate(str)) return str;
	const date = new Date(str);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();

	return `${day}${getTh(day)} of ${months[month]} ${year}`;
}

function isValidDate(d) {
	const [year, month, day] = d.split("-");
	if (!year || !month || !day) return false;
	const monthNumber = parseInt(month);
	const dayNumber = parseInt(day);
	if (!monthNumber || !dayNumber) return false;
	if (monthNumber < 1 || monthNumber > 12) return false;
	if (dayNumber < 1 || dayNumber > 31) return false;
	return true;
}

export {
	joinTable,
	getShowName,
	objectToArray,
	sum,
	average,
	getDate,
	showNames,
	revealNames,
	urlRegex,
	isValidDate,
	getDateString,
	arrayToObject,
};
