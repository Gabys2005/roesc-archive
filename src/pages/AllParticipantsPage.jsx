import { useEffect, useState } from "react";
import { getParticipantsData } from "../getData";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { Link } from "react-router-dom";
import { sum, average } from "../utils";

function AllParticipantsPage() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		async function load() {
			const participantData = await getParticipantsData();
			setData(participantData);
			setLoading(false);
		}
		load();
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Participants</h1>
			<hr></hr>
			<Table>
				<TableHeader>
					<th>#</th>
					<th>Username</th>
					<th>Total Points</th>
					<th>Average Place</th>
				</TableHeader>
				<tbody>
					{data.map((r, i) => (
						<tr key={r.username}>
							<td>{i + 1}</td>
							<td>
								<Link to={`/participants/${r.username}`}>{r.username}</Link>
							</td>
							<td>{sum(r.points)}</td>
							<td>{average(r.places, 2)}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default AllParticipantsPage;
