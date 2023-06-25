import { useState } from "react";
import Inputs from "../../../components/UsersEditor/Inputs";
import Info from "../../../components/Editor/Info";
import Output from "../../../components/UsersEditor/Output";

export default function Editor({ data, setData }) {
	const [tab, setTab] = useState("info");

	return (
		<>
			<div className="box">
				<div className="tabs is-boxed is-centered">
					<ul>
						<li className={tab === "info" ? "is-active" : ""}>
							<a onClick={() => setTab("info")}>Info</a>
						</li>
						<li className={tab === "editor" ? "is-active" : ""}>
							<a onClick={() => setTab("editor")}>Editor</a>
						</li>
						<li className={tab === "output" ? "is-active" : ""}>
							<a onClick={() => setTab("output")}>Output</a>
						</li>
					</ul>
				</div>
			</div>

			{tab === "info" && <Info />}
			{tab === "editor" && (
				<Inputs data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			)}
			{tab === "output" && <Output data={data} downloadName={`user-${data.current.username}`} />}
		</>
	);
}
