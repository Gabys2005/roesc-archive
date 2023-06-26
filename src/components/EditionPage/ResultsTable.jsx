import Twemoji from "react-twemoji";
import Country from "../Country";
import Table from "../Table";
import UsersString from "../UsersString";
import Song from "../Song";
import { fancyNumber } from "../../modules/utils";

function getShowEntries(data, show) {
	const entries = [];
	data.entries.forEach((entry) => {
		const showData = entry.shows.find((s) => s.id === show);
		if (showData) {
			let className = "";
			if (showData.qualified) className = "selected";
			if (show === "gf") {
				console.log(showData);
				if (showData.place === 1) {
					className = "firstplace";
				} else if (showData.place === 2) {
					className = "secondplace";
				} else if (showData.place === 3) {
					className = "thirdplace";
				}
			}

			entries.push({
				ro: showData.order,
				country: entry.country,
				participant: entry.hods,
				song: entry.song,
				place: showData.place,
				points: showData.points.total,
				qualified: showData.qualified,
				className,
			});
		}
	});
	entries.sort((a, b) => a.ro - b.ro);
	return entries;
}

export default function ResultsTable({ show, data }) {
	return (
		<Twemoji>
			<div className="my-5">
				<Table
					columns={["Order", "Country", "Participant", "Artist", "Song", "Place", "Points"]}
					smallFirst
					compact
				>
					{getShowEntries(data, show).map((entry, i) => (
						<tr key={i} className={entry.className}>
							<td style={{ textAlign: "center" }}>{fancyNumber(entry.ro)}</td>
							<td>
								<Country id={entry.country} />
							</td>
							<td>
								<UsersString userids={entry.participant} />
							</td>
							<td>{entry.song.artists}</td>
							<td>
								<Song data={entry.song} titleOnly />
							</td>
							<td>{entry.place}</td>
							<td>{entry.points}</td>
						</tr>
					))}
				</Table>
			</div>
		</Twemoji>
	);
}
