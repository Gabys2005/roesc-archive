import { useState, useEffect } from "react";
import { getRoescs } from "../modules/fetchData";
import { Link } from "react-router-dom";
import UsersString from "./UsersString";
import Table from "./Table";

export default function RoescList() {
	const [roescs, setRoescs] = useState([]);

	useEffect(() => {
		getRoescs().then((result) => {
			setRoescs(result);
		});
	}, []);

	return (
		<Table columns={["#", "Name", "Owner(s)"]} smallFirst>
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
		</Table>
	);
}
