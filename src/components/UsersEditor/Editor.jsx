import { useState } from "react";
import NewUser from "./NewUser";
import EditUser from "./EditUser";
import Output from "./Output";

export default function UsersEditor({ users, setUsers, showOutput }) {
	const [tab, setTab] = useState("edit");

	return (
		<div className="box">
			<div className="tabs is-centered">
				<ul className="ml-0">
					<li className={tab === "edit" ? "is-active" : ""}>
						<a onClick={() => setTab("edit")}>Edit User</a>
					</li>
					<li className={tab === "new" ? "is-active" : ""}>
						<a onClick={() => setTab("new")}>New User</a>
					</li>
					{showOutput ? (
						<li className={tab === "output" ? "is-active" : ""}>
							<a onClick={() => setTab("output")}>Output</a>
						</li>
					) : (
						""
					)}
				</ul>
			</div>

			{tab === "new" ? <NewUser addUser={(user) => setUsers([...users, user])} /> : ""}
			{tab === "edit" ? <EditUser users={users} setUsers={setUsers} /> : ""}
			{tab === "output" ? <Output data={users} /> : ""}
		</div>
	);
}
