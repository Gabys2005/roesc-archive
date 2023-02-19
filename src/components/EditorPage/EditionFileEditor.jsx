import { useState } from "react";
import { saveAs } from "file-saver";
import { urlRegex } from "../../utils";
import BasicInformation from "./EditionEditor/BasicInformation";
import Dates from "./EditionEditor/Dates";
import Reveals from "./EditionEditor/Reveals";
import VenueBidding from "./EditionEditor/VenueBidding";

function EditionFileEditor(props) {
	const [data, setData] = useState(props.data);

	function change(field, settings) {
		return function (e) {
			let value = e.target.value;
			if (settings) {
				if (settings.lowercase) {
					value = value.toLowerCase();
				}
				if (settings.link) {
					value = value.replace(urlRegex, "");
				}
			}
			const newData = { ...data, [field]: value };
			setData(newData);
			localStorage.setItem("backup_edition", JSON.stringify(newData));
		};
	}

	function download() {
		console.log(data);
		const blob = new Blob([JSON.stringify(data, null, 2)], {
			type: "application/json",
		});
		saveAs(blob, `${data.link || "edition"}.json`);
	}

	return (
		<div>
			<button className="button is-primary" onClick={() => props.goBack()}>
				Go Back
			</button>
			<br />
			<br />
			<BasicInformation data={data} change={change} />
			<Dates data={data} change={change} />
			<Reveals data={data} change={change} />
			<VenueBidding data={data} change={change} />
			<div className="box">
				<h2>Output</h2>
				<textarea
					className="textarea field"
					value={JSON.stringify(data, null, 2)}
					rows="20"
					readOnly
				></textarea>
				<button onClick={download} className="button is-primary">
					Download
				</button>
			</div>
		</div>
	);
}

export default EditionFileEditor;
