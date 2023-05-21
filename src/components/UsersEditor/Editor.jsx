import { useState } from "react";
import NewUser from "./NewUser";
import EditUser from "./EditUser";

export default function UsersEditor({ users, setUsers }) {
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
				</ul>
			</div>

			{tab === "new" ? <NewUser addUser={(user) => setUsers([...users, user])} /> : ""}
			{tab === "edit" ? <EditUser users={users} setUsers={setUsers} /> : ""}
		</div>
	);
}
