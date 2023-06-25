import { useState } from "react";
import NewBroadcaster from "./NewBroadcaster";
import EditBroadcaster from "./EditBroadcaster";
import { ErrorBoundary } from "react-error-boundary";
import BoundaryError from "../BoundaryError";

export default function Editor({ broadcasters, setBroadcasters, users }) {
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
	];

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
