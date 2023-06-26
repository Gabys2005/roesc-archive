const shows = {
	oc: "Opening Ceremony",
	sf1: "Semi-Final 1",
	sf2: "Semi-Final 2",
	gf: "Grand Final",
};

const showsArray = Object.keys(shows).map((key) => {
	return { id: key, name: shows[key] };
});

const showsWithPoints = ["sf1", "sf2", "gf"];

export { shows, showsArray, showsWithPoints };
