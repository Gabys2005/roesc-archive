import { saveAs } from "file-saver";

function download(what, name) {
	const blob = new Blob([JSON.stringify(what, null, 4)], {
		type: "application/json",
	});
	saveAs(blob, `${name}.json`);
}

export { download };
