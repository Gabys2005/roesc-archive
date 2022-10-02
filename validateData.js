// This is very much temporary

const fs = require("fs");
const chalk = require("chalk");

const data = JSON.parse(fs.readFileSync("./public/data/combined.json", "utf-8").toString());

function logIfMissing(fieldName, field) {
	if (!field) {
		console.log(`${fieldName} is missing`);
	}
}

const revealNames = ["host", "slogan", "logo", "allocation", "dates", "stage", "gf_ro", "venue", "city", "hosts", "ro"];

data.forEach((roesc) => {
	console.log(chalk.bold.yellow(`==== ${roesc.shortName} ====`));
	console.log(chalk.blue("Basic info"));
	logIfMissing("Long Name", roesc.longName);
	logIfMissing("Link", roesc.link);
	logIfMissing("Created", roesc.created);
	logIfMissing("Cancelled", roesc.cancelled);
	logIfMissing("Owner", roesc.owner);
	logIfMissing("Links", roesc.links);

	roesc.editions.forEach((edition) => {
		console.log(chalk.blue(`Edition ${edition.link}`));
		logIfMissing("City", edition.city);
		logIfMissing("Country", edition.country);
		logIfMissing("Venue", edition.venue);
		logIfMissing("Slogan", edition.slogan);
		logIfMissing("Dates", edition.dates);
		logIfMissing("Reveals OBJ", edition.reveals);
		if (edition.reveals) {
			revealNames.forEach((name) => {
				logIfMissing(`R ${name}`, edition.reveals[name]);
			});
		}
		logIfMissing("Presenters", edition.presenters);
		logIfMissing("Shows ARR", edition.shows);
		logIfMissing("Images ARR", edition.images);
		logIfMissing("Venue Bidding", edition.venue_bidding);
		logIfMissing("Pots", edition.pots);
		logIfMissing("GF Pots", edition.gf_pots);
		logIfMissing("Entries", edition.entries);
		edition.entries.forEach((entry) => {
			const country = entry.country;
			logIfMissing("E Country", country);
			logIfMissing(`${country} song`, entry.song);
			logIfMissing(`${country} artist`, entry.artist);
			logIfMissing(`${country} participant`, entry.participant);
		});
	});
});
