import { useState, useEffect } from "react";
import { getRoescs } from "../modules/fetchData";
import { Link } from "react-router-dom";
import UsersString from "./UsersString";

export default function RoescList() {
	const [roescs, setRoescs] = useState([]);

	useEffect(() => {
		getRoescs().then((result) => {
			setRoescs(result);
		});
	}, []);

	return (
		<div className="table-container">
			<table className="table is-bordered is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th style={{ width: "1%" }}>#</th>
						<th>Name</th>
						<th>Owner(s)</th>
					</tr>
				</thead>
				<tbody>
					{roescs.map((roescData, i) => (
						<tr key={roescData.link}>
							<td>{i + 1}</td>
							<td>
								<Link to={`/roescs/${roescData.link}`}>{roescData.name}</Link>
							</td>
							<td>
								<UsersString userids={roescData.owners} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
