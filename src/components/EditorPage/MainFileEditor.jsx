import { useState } from "react";
import { urlRegex } from "../../utils";
import TextInput from "./Inputs/TextInput";
import MultiStringInput from "./Inputs/MultiStringInput";
import { saveAs } from "file-saver";
import ObjectInput from "./Inputs/ObjectInput";
import DateInput from "./Inputs/DateInput";

function MainFileEditor(props) {
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
			localStorage.setItem("backup_main", JSON.stringify(newData));
		};
	}

	function download() {
		const blob = new Blob([JSON.stringify(data, null, 2)], {
			type: "application/json",
		});
		saveAs(blob, "main.json");
	}

	return (
		<div>
			<button className="button is-primary" onClick={() => props.goBack()}>
				Go Back
			</button>
			<br />
			<br />
			<div className="box">
				<h2>Basic information</h2>
				<TextInput
					description="Full Name of the RoESC, for example Gabys' Eurovision Song Contest"
					placeholder="Long Name"
					value={data.longName}
					onChange={change("longName")}
				></TextInput>
				<TextInput
					description="The shortened name of the RoESC, for example GESC"
					placeholder="Short Name"
					value={data.shortName}
					onChange={change("shortName")}
				></TextInput>
				<TextInput
					description="The link that will be used for that RoESC. Generally it should be the short name but in
                    lowercase, but make sure to check if that link is not taken already"
					placeholder="Link"
					value={data.link}
					onChange={change("link", { lowercase: true, link: true })}
				></TextInput>
				<DateInput
					description="When was this RoESC created/announced?"
					placeholder="Date Created"
					value={data.created}
					onChange={change("created")}
					type="date"
				></DateInput>
				<DateInput
					description="When was this RoESC cancelled? (leave empty if not cancelled)"
					placeholder="Date Cancelled"
					value={data.cancelled}
					onChange={change("cancelled")}
					type="date"
				></DateInput>
				<MultiStringInput
					description="Current owner(s) (or owners at the time of cancellation)"
					placeholder="Owner"
					value={data.owners}
					onChange={change("owners")}
				></MultiStringInput>
				<MultiStringInput
					description="People who used to own this RoESC but are no longer the owners (or weren't at the time of cancellation)"
					placeholder="Previous Owner"
					value={data.previous_owners}
					onChange={change("previous_owners")}
				></MultiStringInput>
				<ObjectInput
					description="Links to the game, youtube videos, wikis, websites, scorewiz scorebords, etc."
					title="Links"
					leftPlaceholder="Title"
					rightPlaceholder="Link"
					value={data.links}
					onChange={change("links")}
					valueType="url"
				></ObjectInput>
			</div>
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

export default MainFileEditor;
