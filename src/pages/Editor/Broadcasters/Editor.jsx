import { useEffect } from "react";
import Inputs from "../../../components/BroadcastersEditor/Inputs";
import Output from "../../../components/BroadcastersEditor/Output";
import Info from "../../../components/Editor/Info";
import UsersEditor from "../../../components/UsersEditor/Editor";
import { getUsersDetailed } from "../../../modules/users";
import { useState } from "react";

export default function Editor({ data, setData, users }) {
	const [actualUsers, setUsers] = useState(users);
	const [tab, setTab] = useState("editor");

	useEffect(() => {
		if (!users) {
			getUsersDetailed().then((users) => setUsers(users));
		}
	}, [users]);

	if (!actualUsers) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<div className="box">
				<div className="tabs is-boxed is-centered">
					<ul>
						<li className={tab === "editor" ? "is-active" : ""}>
							<a onClick={() => setTab("editor")}>Editor</a>
						</li>
						<li className={tab === "users" ? "is-active" : ""}>
							<a onClick={() => setTab("users")}>Users Editor</a>
						</li>
						<li className={tab === "output" ? "is-active" : ""}>
							<a onClick={() => setTab("output")}>Output</a>
						</li>
					</ul>
				</div>
			</div>

			{tab === "editor" && (
				<>
					<Info optional />
					<Inputs
						data={data}
						setData={(field, value) => setData({ ...data, [field]: value })}
						users={actualUsers}
					/>
				</>
			)}
			{tab === "users" && <UsersEditor users={actualUsers} setUsers={setUsers} />}
			{tab === "output" && (
				<Output broadcaster={data} users={actualUsers} downloadName={`newbroadcaster-${data.name}`} />
			)}
		</>
	);
}
