import { useEffect, useState } from "react";
import Table from "./Table";
import { getEditions } from "../modules/roesc";
import { Link } from "react-router-dom";

export default function EditionTable({ roesc }) {
	const [data, setData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		setData(null);
		setError("");

		getEditions(roesc)
			.then((data) => setData(data))
			.catch((err) => setError(err));
	}, [roesc]);

	if (!data) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Error: {error}</h1>;
	}

	return (
		<Table columns={["Edition", "Host City"]}>
			{data.map((edition, i) => (
				<tr key={i}>
					<td>
						<Link to={`/roescs/${roesc}/${edition.link}`}>{edition.edition}</Link>
					</td>
					<td>{edition.venues[0].city}</td>
				</tr>
			))}
		</Table>
	);
}
