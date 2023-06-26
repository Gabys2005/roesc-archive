import { useEffect, useState } from "react";
import Table from "./Table";
import { getEditions } from "../modules/roesc";
import { Link } from "react-router-dom";
import { parseDate } from "../modules/parseDate";
import Country from "../components/Country";
import Twemoji from "react-twemoji";

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

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<Table columns={["Edition", "Host City", "Date"]}>
			{data.map((edition, i) => (
				<tr key={i}>
					<td>
						<Link to={`/roescs/${roesc}/${edition.link}`}>{edition.edition}</Link>
					</td>
					<td>
						<Twemoji>
							{edition.venues[0].city}, <Country id={edition.venues[0].country} />
						</Twemoji>
					</td>
					<td>{parseDate(edition.date)}</td>
				</tr>
			))}
		</Table>
	);
}
