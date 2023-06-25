function getTh(str) {
	if (str.endsWith("1") && str !== "11") {
		return "st";
	} else if (str.endsWith("2") && str !== "12") {
		return "nd";
	} else if (str.endsWith("3") && str !== "13") {
		return "rd";
	}
	return "th";
}

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

function getMonth(str) {
	const num = parseInt(str);
	if (num) {
		return months[num - 1];
	}
	return "???";
}

function parseDate(str) {
	if (!str) return "";
	const split = str.split("/");
	if (split.length === 3) {
		const year = split[0];
		const month = split[1];
		const day = split[2].startsWith("0") ? split[2].substring(1) : split[2];
		return `${day}${getTh(day)} of ${getMonth(month)} ${year}`;
	} else if (split.length === 2) {
		const year = split[0];
		const month = split[1];
		return `${getMonth(month)} ${year}`;
	} else {
		return str;
	}
}

export { parseDate };
