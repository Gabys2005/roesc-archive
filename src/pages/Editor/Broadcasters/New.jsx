import { useState } from "react";
import { defaultBroadcasterData } from "../../../modules/defaultEditorData";
import { v4 } from "uuid";
import Editor from "./Editor";

export default function New() {
	const [data, setData] = useState({ id: v4(), ...defaultBroadcasterData });

	return (
		<div>
			<h1>Creating New Broadcaster</h1>
			<hr />
			<Editor data={data} setData={setData} />
		</div>
	);
}
