import { useState } from "react";
import NewBroadcaster from "./NewBroadcaster";
import EditBroadcaster from "./EditBroadcaster";
import Output from "./Output";
import { ErrorBoundary } from "react-error-boundary";
import BoundaryError from "../BoundaryError";
import UsersEditor from "../UsersEditor/Editor";
import Info from "../Editor/Info";

export default function Editor({ broadcasters, setBroadcasters, users, setUsers, embedded }) {
	const tabs = [
		{
			name: "Edit Broadcasters",
			component: <EditBroadcaster broadcasters={broadcasters} setBroadcasters={setBroadcasters} users={users} />,
		},
		{
			name: "New Broadcaster",
			component: (
				<NewBroadcaster
					users={users}
					addBroadcaster={(broadcaster) => setBroadcasters([...broadcasters, broadcaster])}
				/>
			),
		},
		// {
		// 	name: "|",
		// },
		// {
		// 	name: "Users Editor",
		// 	component: <UsersEditor users={users} setUsers={setUsers} />,
		// },
	];

	// if (!embedded) {
	// 	tabs.splice(0, 0, {
	// 		name: "Info",
	// 		component: <Info />,
	// 	});
	// 	tabs.splice(3, 0, {
	// 		name: "Output",
	// 		component: <Output data={broadcasters} />,
	// 	});
	// }

	const [tab, setTab] = useState(tabs[0].name);

	return (
		<div>
			<div className="box">
				<div className="tabs is-centered">
					<ul className="ml-0">
						{tabs.map((tabData) => (
							<li className={tab === tabData.name ? "is-active" : ""} key={tabData.name}>
								<a onClick={() => tabData.name !== "|" && setTab(tabData.name)}>{tabData.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<ErrorBoundary FallbackComponent={BoundaryError}>
				{tabs.find((t) => t.name === tab).component}
			</ErrorBoundary>
		</div>
	);
}
