import { useState } from "react";
import { defaultUserData } from "../../../modules/defaultEditorData";
import Inputs from "../../../components/UsersEditor/Inputs";
import Output from "../../../components/UsersEditor/Output";
import Info from "../../../components/Editor/Info";
import { v4 } from "uuid";

export default function New() {
	const [data, setData] = useState({ id: v4(), ...defaultUserData });

	return (
		<div>
			<h1>Creating New User</h1>
			<hr />
			<Info optional />
			<Inputs data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			<Output data={data} downloadName={`newuser-${data.current.username}`} />
		</div>
	);
}
