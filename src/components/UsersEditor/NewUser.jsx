import { useEffect, useState } from "react";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import Inputs from "./Inputs";
import { defaultUserData } from "../../modules/defaultEditorData";

export default function NewUser({ addUser }) {
	const localSave = localStorage.getItem("backup-users");
	const [data, setData] = useState(localSave ? JSON.parse(localSave) : defaultUserData);

	useEffect(() => {
		localStorage.setItem("backup-users", JSON.stringify(data));
	}, [data]);

	return (
		<>
			<Inputs data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			<div className="box">
				<Button
					onClick={() => {
						addUser({
							id: uuid(),
							current: data.current,
							previous: data.previous,
							aliases: data.aliases,
							textContent: data.textContent,
						});
						setData(defaultUserData);
					}}
				>
					Create User
				</Button>
			</div>
		</>
	);
}
