import { useEffect, useState } from "react";
import Table from "./Table";
import { getEditions } from "../modules/roesc";
import { Link } from "react-router-dom";
import { parseDate } from "../modules/parseDate";
import Country from "../components/Country";
import Twemoji from "react-twemoji";
import OutLink from "./OutLink";

function Row({ edition, roesc }) {
	return (
		<tr>
			<td>
				<Link to={`/roescs/${roesc}/${edition.link}`}>{edition.edition}</Link>
			</td>
			<td>
				<Twemoji>
					{edition.venues[0].city}, <Country id={edition.venues[0].country} />
				</Twemoji>
			</td>
			{edition.cancelled ? (
				<td colSpan={6} style={{ textAlign: "center" }}>
					Edition cancelled
				</td>
			) : (
				<>
					<td>{parseDate(edition.date)}</td>
					<td>
						<Twemoji>
							<Country id={edition.winner?.country} />
						</Twemoji>
					</td>
					<td>
						<OutLink to={edition.winner?.link}>{edition.winner?.song}</OutLink>
					</td>
					<td>{edition.winner?.artists}</td>
					<td>{edition.winner?.points}</td>
					<td>
						<Twemoji>
							<Country id={edition.runnerup} />
						</Twemoji>
					</td>
				</>
			)}
		</tr>
	);
}

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
		<Table columns={["Edition", "Host City", "Date", "Winner", "Song", "Performer(s)", "Points", "Runner-Up"]}>
			{data.map((edition, i) => (
				<Row key={i} edition={edition} roesc={roesc} />
			))}
		</Table>
	);
}
