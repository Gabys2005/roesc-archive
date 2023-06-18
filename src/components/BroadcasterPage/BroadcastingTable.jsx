import { Link } from "react-router-dom";
import Table from "../Table";

const exampleData = [
	{
		roesc: "RESC",
		edition: "#04",
	},
	{
		roesc: "SESC",
		edition: "#08",
	},
];

export default function BroadcastingTable({ example, data }) {
	let actualData = data || [];
	if (example) {
		actualData = exampleData;
	}
	return (
		<Table columns={["#", "RoESC", "Edition"]} smallFirst>
			{actualData.map((broadcast, i) => (
				<tr key={i}>
					<td>{i + 1}</td>
					<td>
						<Link to={example ? "" : `/roescs/${broadcast.roescLink}`}>{broadcast.roesc}</Link>
					</td>
					<td>
						<Link to={example ? "" : `/roescs/${broadcast.roescLink}/${broadcast.editionLink}`}>
							{broadcast.edition}
						</Link>
					</td>
				</tr>
			))}
		</Table>
	);
}
