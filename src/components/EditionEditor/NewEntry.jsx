import { useEffect, useState } from "react";
import EntryInputs from "./EntryInputs";
import Button from "../Button";
import { showsWithPoints } from "../../modules/showList";

const defaultShowData = {
	order: 0,
	place: 0,
	points: {
		total: 0,
		tele: 0,
		jury: 0,
	},
	participated: false,
	attended: false,
	shouldveVoted: false,
	failedToVote: false,
};

const defaultData = {
	country: "",
	hods: [],
	performers: [],
	song: { artists: [], title: "", link: "" },
	shows: showsWithPoints.map((s) => {
		return { id: s, ...defaultShowData };
	}),
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
				fullData={data}
			/>
			<div className="box">
				<Button onClick={addEntry}>Add Entry</Button>
			</div>
		</div>
	);
}
