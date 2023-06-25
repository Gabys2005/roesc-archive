import { useState } from "react";
import { defaultUserData } from "../../../modules/defaultEditorData";
import { v4 } from "uuid";
import Editor from "./Editor";

export default function New() {
	const [data, setData] = useState({ id: v4(), ...defaultUserData });

	return (
		<div>
			<h1>Creating New User</h1>
			<hr />
			<Editor data={data} setData={setData} />
		</div>
	);
}
