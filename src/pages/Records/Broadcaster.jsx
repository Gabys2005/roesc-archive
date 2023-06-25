import { useEffect, useState } from "react";
import { getBroadcastersDetailed } from "../../modules/broadcasters";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

export default function BroadcasterRecords() {
	const [broadcasters, setBroadcasters] = useState([]);
	const [records, setRecords] = useState({});

	useEffect(() => {
		getBroadcastersDetailed().then((broadcasters) => {
			setBroadcasters(broadcasters);

			const livestreams = broadcasters
				.map((broadcaster) => {
					return {
						id: broadcaster.id,
						name: broadcaster.name,
						link: broadcaster.link,
						amount: broadcaster.broadcastedShows.length,
					};
				})
				.sort((a, b) => b.amount - a.amount);

			setRecords({ livestreams });
		});
	}, []);

	if (broadcasters.length === 0) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Broadcaster Records</h1>
			<hr />
			<h2>
				Most shows broadcasted:{" "}
				<Link to={`/broadcasters/${records.livestreams[0].link}`}>{records.livestreams[0].name}</Link>
			</h2>
			<Table columns={["#", "Broadcaster", "Show Count"]} smallFirst>
				{records.livestreams.map((data, i) => (
					<tr key={i}>
						<td>{i + 1}</td>
						<td>
							<Link to={`/broadcasters/${data.link}`}>{data.name}</Link>
						</td>
						<td>{data.amount}</td>
					</tr>
				))}
			</Table>
		</div>
	);
}
