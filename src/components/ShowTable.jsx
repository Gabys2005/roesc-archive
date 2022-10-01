import { joinTable } from "../utils";
import Flag from "./Flag";
import Table from "./Table";
import TableHeader from "./TableHeader";

function ShowTable(props) {
	const convertedData = [];

	const data = props.source;
	const show = props.show;

	data.entries.forEach((entry) => {
		const showData = entry.shows[show];
		if (showData) {
			let classes = "";
			if (showData.qualified) {
				classes += "qualified";
			} else if (showData.place === 1) {
				classes += "first-place";
			} else if (showData.place === 2) {
				classes += "second-place";
			} else if (showData.place === 3) {
				classes += "third-place";
			}
			convertedData.push({
				order: showData.order,
				country: entry.country,
				song: entry.song,
				artist: entry.artist,
				participant: entry.participant,
				place: showData.place,
				points: showData.points,
				classes: classes,
			});
		}
	});

	convertedData.sort((a, b) => {
		return a.order - b.order;
	});

	return (
		<Table>
			<TableHeader>
				<th>#</th>
				<th>Country</th>
				<th>Song</th>
				<th>Artist</th>
				<th>Participant</th>
				<th>Place</th>
				<th>Points</th>
			</TableHeader>
			<tbody>
				{convertedData.map((entry) => (
					<tr key={entry.order} className={entry.classes}>
						<td>{entry.order}</td>
						<td>
							{<Flag country={entry.country}></Flag>} {entry.country}
						</td>
						<td>{entry.song}</td>
						<td>{entry.artist}</td>
						<td>{joinTable(entry.participant)}</td>
						<td>{entry.place}</td>
						<td>{entry.points}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default ShowTable;
