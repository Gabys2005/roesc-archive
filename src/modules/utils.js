import { saveAs } from "file-saver";

function download(what, name) {
	const blob = new Blob([JSON.stringify(what, null, 4)], {
		type: "application/json",
	});
	saveAs(blob, `${name}.json`);
}

function getMedia(data, name) {
	const found = data.find((r) => r.name === name);
	if (found) {
		return found.images;
	}
	return [];
}

export { download, getMedia };
