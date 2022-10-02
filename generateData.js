const fs = require("fs");
const individualDataFolder = "./src/data/individual/";
const finalDataFolder = "./src/data/generated/";
const watch = require("node-watch");

function generate() {
	try {
		const combinedData = [];
		const folders = fs.readdirSync(individualDataFolder);
		folders.forEach((folderName) => {
			if (folderName.indexOf(".") > 0) return;
			console.log(folderName);
			const files = fs.readdirSync(individualDataFolder + folderName);
			const roescData = JSON.parse(fs.readFileSync(`${individualDataFolder}${folderName}/main.json`, "utf-8"));
			roescData.editions = [];
			files.forEach((editionFile) => {
				if (editionFile === "main.json") return;
				const content = fs.readFileSync(`${individualDataFolder}${folderName}/${editionFile}`, "utf-8");
				roescData.editions.push(JSON.parse(content));
			});
			combinedData.push(roescData);
			if (!fs.existsSync(finalDataFolder)) {
				fs.mkdirSync(finalDataFolder);
			}
			fs.writeFileSync(`${finalDataFolder}${folderName}.json`, JSON.stringify(roescData), "utf-8");
		});
		fs.writeFileSync(`${finalDataFolder}/combined.json`, JSON.stringify(combinedData), "utf-8");
	} catch {
		console.log("Error trying to generate data");
	}
}

if (process.argv.indexOf("--watch") > 0) {
	generate();
	watch(individualDataFolder, { recursive: true }, (eventType, filename) => {
		console.log(eventType);
		console.log(filename);
		generate();
	});
} else {
	generate();
}
