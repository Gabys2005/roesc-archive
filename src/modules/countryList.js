const countries = {
	ireland: {
		name: "Ireland",
		emoji: "🇮🇪",
	},
	japan: {
		name: "Japan",
		emoji: "🇯🇵",
	},
	china: {
		name: "China",
		emoji: "",
	},
	france: {
		name: "France",
		emoji: "",
	},
	newzealand: {
		name: "New Zealand",
		emoji: "",
	},
	poland: {
		name: "Poland",
		emoji: "",
	},
	romania: {
		name: "Romania",
		emoji: "",
	},
	southkorea: {
		name: "South Korea",
		emoji: "",
	},
	turkey: {
		name: "Turkey",
		emoji: "",
	},
	germany: {
		name: "Germany",
		emoji: "",
	},
	philippines: {
		name: "Philippines",
		emoji: "",
	},
	spain: {
		name: "Spain",
		emoji: "",
	},
	switzerland: {
		name: "Switzerland",
		emoji: "",
	},
	thailand: {
		name: "Thailand",
		emoji: "",
	},
	ukraine: {
		name: "Ukraine",
		emoji: "",
	},
	uzbekistan: {
		name: "Uzbekistan",
		emoji: "",
	},
	brunei: {
		name: "Brunei",
		emoji: "",
	},
	england: {
		name: "England",
		emoji: "",
	},
	palau: {
		name: "Palau",
		emoji: "",
	},
	vietnam: {
		name: "Vietnam",
		emoji: "",
	},
	zimbabwe: {
		name: "Zimbabwe",
		emoji: "",
	},
	fiji: {
		name: "Fiji",
		emoji: "",
	},
	greenland: {
		name: "Greenland",
		emoji: "",
	},
	guam: {
		name: "Guam",
		emoji: "",
	},
	northkorea: {
		name: "North Korea",
		emoji: "",
	},
	scotland: {
		name: "Scotland",
		emoji: "",
	},
	usvi: {
		name: "U.S. Virgin Islands",
		emoji: "",
	},
	australia: {
		name: "Australia",
		emoji: "",
	},
	northernireland: {
		name: "Northern Ireland",
		emoji: "",
	},
	norway: {
		name: "Norway",
		emoji: "",
	},
	puertorico: {
		name: "Puerto Rico",
		emoji: "",
	},
	russia: {
		name: "Russia",
		emoji: "",
	},
	wales: {
		name: "Wales",
		emoji: "",
	},
};

const countriesArray = Object.keys(countries)
	.map((key) => {
		return { id: key, name: countries[key].name, emoji: countries[key].emoji };
	})
	.sort((a, b) => a.name.localeCompare(b.name));

function getCountryFromCode(code) {
	if (countries[code]) {
		return countries[code].name;
	}
	return "Unknown";
}

export { countries, countriesArray, getCountryFromCode };
