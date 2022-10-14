import Table from "../Table";
import TableHeader from "../TableHeader";

function SongsTable(props) {
	const data = props.source;
	let hasPoints = false;
	let hasPlace = false;
	if (data.find((r) => r.points !== undefined)) {
		hasPoints = true;
	}
	if (data.find((r) => r.place !== undefined)) {
		hasPlace = true;
	}

	const convertedData = [];
	data.forEach((entry) => {
		let classes = "";
		if (entry.place === 1 || entry.winner) {
			classes = "first-place";
		} else if (entry.place === 2) {
			classes = "second-place";
		} else if (entry.place === 3) {
			classes = "third-place";
		}
		convertedData.push({
			artist: entry.artist,
			song: entry.song,
			place: entry.place,
			points: entry.points,
			class: classes,
		});
	});

	return (
		<Table>
			<TableHeader>
				<th>#</th>
				<th>Song</th>
				<th>Artist</th>
				{hasPlace && <th>Place</th>}
				{hasPoints && <th>Points</th>}
			</TableHeader>
			<tbody>
				{convertedData.map((r, i) => (
					<tr key={r.song} className={r.class}>
						<td>{i + 1}</td>
						<td>{r.song}</td>
						<td>{r.artist}</td>
						{hasPlace && <td>{r.place}</td>}
						{hasPoints && <td>{r.points}</td>}
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default SongsTable;
