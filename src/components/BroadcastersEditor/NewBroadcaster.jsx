import { useEffect, useState } from "react";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import Inputs from "./Inputs";

const defaultData = {
	name: "",
	shortName: "",
	link: "",
	links: [],
	logos: [],
	textContent: "",
	owners: [],
	staff: [],
};

export default function NewBroadcaster({ users, addBroadcaster }) {
	const localSave = localStorage.getItem("backup-broadcaster");
	const [data, setData] = useState(localSave ? JSON.parse(localSave) : defaultData);

	useEffect(() => {
		localStorage.setItem("backup-broadcaster", JSON.stringify(data));
	}, [data]);

	return (
		<div>
			<Inputs users={users} data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			<hr />
			<Button
				onClick={() => {
					addBroadcaster({
						id: uuid(),
						name: data.name,
						shortName: data.shortName,
						link: data.link,
						links: data.links,
						logos: data.logos,
						owners: data.owners,
						staff: data.staff,
						textContent: data.textContent,
					});
					setData(defaultData);
				}}
			>
				Create Broadcaster
			</Button>
		</div>
	);
}
