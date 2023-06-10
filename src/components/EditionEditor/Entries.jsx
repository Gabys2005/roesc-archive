import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BoundaryError from "../BoundaryError";
import NewEntry from "./NewEntry";

export default function Entries({ data, setValue, users }) {
	const [tab, setTab] = useState("new");
	return (
		<div>
			<div className="box">
				<div className="tabs is-centered">
					<ul>
						<li className={tab === "edit" ? "is-active" : ""}>
							<a onClick={() => setTab("edit")}>Edit Entry</a>
						</li>
						<li className={tab === "new" ? "is-active" : ""}>
							<a onClick={() => setTab("new")}>New Entry</a>
						</li>
					</ul>
				</div>
			</div>

			<ErrorBoundary FallbackComponent={BoundaryError}>
				{tab === "new" && <NewEntry data={data} setValue={setValue} users={users} />}
			</ErrorBoundary>
		</div>
	);
}
