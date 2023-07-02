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

function getMediaImage(images, name) {
	return images.find((r) => r.name === name)?.link;
}

function fancyNumber(num) {
	if (num < 10) {
		return `0${num}`;
	}
	return num.toString();
}

function containsComponent(text, componentName) {
	const regex = new RegExp(`<${componentName}(?:(?: )*|)/>`, "g");
	return text.search(regex) > -1;
}

export { download, getMedia, getMediaImage, fancyNumber, containsComponent };
