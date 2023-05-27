import fs from "fs";
const dataFolder = "./src/data";
const originalFolder = `${dataFolder}/original`;
const generatedFolder = `${dataFolder}/generated`;

function run() {
	const roescFolders = fs.readdirSync(originalFolder).filter((name) => !name.endsWith(".json"));
	const allRoescs = [];

	for (let i = 0; i < roescFolders.length; i++) {
		const roescFolderName = roescFolders[i];
		// const files = fs.readdirSync(`${originalFolder}/${roescFolderName}`)
		const mainFileContent = fs.readFileSync(`${originalFolder}/${roescFolderName}/main.json`);
		const mainFileData = JSON.parse(mainFileContent);

		allRoescs.push(mainFileData);
	}

	fs.writeFileSync(`${generatedFolder}/roescs.json`, JSON.stringify(allRoescs), "utf-8", () => {});
}

run();
