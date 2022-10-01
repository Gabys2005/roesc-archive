const fs = require("fs");
const individualDataFolder = "./public/data/individual/";
const finalDataFolder = "./public/data/";
const watch = require("node-watch");

function generate() {
	const completeData = [];

	const files = fs.readdirSync(individualDataFolder);

	for (let i = 0; i < files.length; i++) {
		const fileName = files[i];
		console.log(`Reading ${fileName}`);
		const fileContent = fs.readFileSync(individualDataFolder + fileName).toString();
		const fileJson = JSON.parse(fileContent);
		completeData.push(fileJson);
	}

	console.log("Writing final data");

	fs.writeFileSync(finalDataFolder + "combined.json", JSON.stringify(completeData), "utf-8");
}

if (process.argv.indexOf("--watch") > 0) {
	generate();
	watch(individualDataFolder, (eventType, filename) => {
		console.log(eventType);
		console.log(filename);
		generate();
	});
} else {
	generate();
}
