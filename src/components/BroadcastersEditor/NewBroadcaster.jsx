import { useEffect, useState } from "react";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import Inputs from "./Inputs";
import { defaultBroadcasterData } from "../../modules/defaultEditorData";

export default function NewBroadcaster({ users, addBroadcaster }) {
	const localSave = localStorage.getItem("backup-broadcaster");
	const [data, setData] = useState(localSave ? JSON.parse(localSave) : defaultBroadcasterData);

	useEffect(() => {
		localStorage.setItem("backup-broadcaster", JSON.stringify(data));
	}, [data]);

	return (
		<div>
			<Inputs users={users} data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			<div className="box">
				<Button
					onClick={() => {
						addBroadcaster({
							id: uuid(),
							name: data.name,
							shortName: data.shortName,
							link: data.link,
							created: data.created,
							closed: data.closed,
							links: data.links,
							logos: data.logos,
							owners: data.owners,
							staff: data.staff,
							textContent: data.textContent,
						});
						setData(defaultBroadcasterData);
					}}
				>
					Create Broadcaster
				</Button>
			</div>
		</div>
	);
}
