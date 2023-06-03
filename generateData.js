import fs from "fs";
import path from "path";
import watch from "node-watch";

const dataFolder = path.join(".", "/src/data");
const originalFolder = `${dataFolder}/original`;
const generatedFolder = `${dataFolder}/generated`;

function run() {
	if (!fs.existsSync(generatedFolder)) {
		fs.mkdirSync(generatedFolder);
	}

	const roescFolders = fs.readdirSync(originalFolder).filter((name) => !name.endsWith(".json"));
	const allRoescs = [];

	for (let i = 0; i < roescFolders.length; i++) {
		const roescFolderName = roescFolders[i];
		const files = fs.readdirSync(`${originalFolder}/${roescFolderName}`);
		const mainFileContent = fs.readFileSync(`${originalFolder}/${roescFolderName}/main.json`);
		const mainFileData = JSON.parse(mainFileContent);

		const thisRoescData = [];
		for (let j = 0; j < files.length; j++) {
			const fileName = files[j];
			if (fileName !== "main.json") {
				const fileContent = fs.readFileSync(`${originalFolder}/${roescFolderName}/${fileName}`);
				const fileData = JSON.parse(fileContent);

				thisRoescData.push({
					edition: fileData.edition,
					link: fileData.link,
					countries: fileData.countries,
					venues: fileData.venues,
				});
			}
		}
		fs.writeFileSync(`${generatedFolder}/${roescFolderName}.json`, JSON.stringify(thisRoescData), "utf-8");
		allRoescs.push(mainFileData);
	}

	const usersContent = fs.readFileSync(`${originalFolder}/users.json`);
	const users = JSON.parse(usersContent);

	const userNames = users.map((user) => {
		return {
			id: user.id,
			name: user.current.username,
			previousNames: user.previous.map((r) => r.username),
			aliases: user.aliases,
		};
	});

	fs.writeFileSync(`${generatedFolder}/roescs.json`, JSON.stringify(allRoescs), "utf-8");
	fs.writeFileSync(`${generatedFolder}/users.json`, JSON.stringify(userNames), "utf-8");
}

// eslint-disable-next-line no-undef
if (process.argv.indexOf("--watch") > 0) {
	run();
	watch(originalFolder, { recursive: true }, (eventType, filename) => {
		console.log(eventType);
		console.log(filename);
		run();
	});
} else {
	run();
}
