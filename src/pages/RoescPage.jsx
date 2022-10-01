import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Row from "../components/Row";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { getRoesc } from "../getData";
import { joinTable, objectToArray } from "../utils";

function RoescPage() {
	const { roesc } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function run() {
			try {
				const data = await getRoesc(roesc);
				setData(data);
				setLoading(false);
			} catch (err) {
				setError(err);
			}
		}
		run();
	}, [roesc]);

	if (error !== "") {
		return <h1>error 🦆 {error.toString()}</h1>;
	}

	if (loading) {
		return <h1>loading</h1>;
	}

	return (
		<>
			<h1>{data.longName}</h1>
			<hr></hr>
			<h2>Basic information</h2>
			<hr></hr>
			<Table>
				<tbody>
					<Row title="Created" content={data.created}></Row>
					<Row title="Cancelled" content={data.cancelled}></Row>
					<Row title="Owner" content={joinTable(data.owner)}></Row>
				</tbody>
			</Table>
			<h2>Links</h2>
			<hr></hr>
			<ul>
				{objectToArray(data.links).map((r) => (
					<li>
						{r[0]}: <a href={r[1]}>{r[1]}</a>
					</li>
				))}
			</ul>
			<h2>Editions</h2>
			<hr></hr>
			<Table>
				<TableHeader>
					<th>Edition</th>
					<th>Host City</th>
				</TableHeader>
				<tbody>
					{data.editions.map((data) => (
						<tr key={data.number}>
							<td>
								<Link to={`editions/${data.link}`}>{data.number}</Link>
							</td>
							<td>
								{data.city} - {data.country}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}

export default RoescPage;
