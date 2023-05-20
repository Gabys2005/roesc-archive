import Textarea from "../Inputs/Textarea";
import Button from "../Button";
import { saveAs } from "file-saver";

export default function Output({ data }) {
	function download() {
		const blob = new Blob([JSON.stringify(data, null, 4)], {
			type: "application/json",
		});
		saveAs(blob, "main.json");
	}

	return (
		<div className="box">
			<Textarea disabled value={JSON.stringify(data, null, 4)} className="mb-2" />
			<Button onClick={download}>Download</Button>
		</div>
	);
}
