import { useState } from "react";
import NewBroadcaster from "./NewBroadcaster";
import EditBroadcaster from "./EditBroadcaster";

export default function Editor({ broadcasters, setBroadcasters, users }) {
	const [tab, setTab] = useState("edit");

	return (
		<div className="box">
			<div className="tabs is-centered">
				<ul className="ml-0">
					<li className={tab === "edit" ? "is-active" : ""}>
						<a onClick={() => setTab("edit")}>Edit Broadcaster</a>
					</li>
					<li className={tab === "new" ? "is-active" : ""}>
						<a onClick={() => setTab("new")}>New Broadcaster</a>
					</li>
				</ul>
			</div>

			{tab === "new" ? (
				<NewBroadcaster
					users={users}
					addBroadcaster={(broadcaster) => setBroadcasters([...broadcasters, broadcaster])}
				/>
			) : (
				""
			)}
			{tab === "edit" ? (
				<EditBroadcaster broadcasters={broadcasters} setBroadcasters={setBroadcasters} users={users} />
			) : (
				""
			)}
		</div>
	);
}
