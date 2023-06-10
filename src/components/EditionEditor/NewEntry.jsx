import { useEffect, useState } from "react";
import EntryInputs from "./EntryInputs";
import Button from "../Button";

const defaultData = {
	country: "",
	hods: [],
	performers: [],
	song: { artists: [], title: "", link: "" },
};

export default function NewEntry({ data, setValue, users }) {
	const localData = localStorage.getItem("backup-entry");
	const [newData, setNewData] = useState(JSON.parse(localData) || defaultData);

	function addEntry() {
		setValue("entries", [...data.entries, newData]);
		setNewData(defaultData);
	}

	useEffect(() => {
		localStorage.setItem("backup-entry", JSON.stringify(newData));
	}, [newData]);

	return (
		<div>
			<EntryInputs
				data={newData}
				setData={(field, value) => setNewData({ ...newData, [field]: value })}
				users={users}
			/>
			<div className="box">
				<Button onClick={addEntry}>Add Entry</Button>
			</div>
		</div>
	);
}
