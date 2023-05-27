import { useEffect, useState } from "react";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import Inputs from "./Inputs";

const defaultData = { current: "", previous: [], textContent: "" };

export default function NewUser({ addUser }) {
	const localSave = localStorage.getItem("backup-users");
	const [data, setData] = useState(localSave ? JSON.parse(localSave) : defaultData);

	useEffect(() => {
		localStorage.setItem("backup-users", JSON.stringify(data));
	}, [data]);

	return (
		<div>
			<Inputs data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			<hr />
			<Button
				onClick={() => {
					addUser({
						id: uuid(),
						current: data.current,
						previous: data.previous,
						textContent: data.textContent,
					});
					setData(defaultData);
				}}
			>
				Create User
			</Button>
		</div>
	);
}
