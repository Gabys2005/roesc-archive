import { joinTable } from "../../utils";
import Flag from "../Flag";
import Table from "../Table";
import TableHeader from "../TableHeader";

function ParticipantTable(props) {
	const data = props.source;
	if (data.length === 0) {
		return <></>;
	}

	return (
		<Table>
			<TableHeader>
				<th>#</th>
				<th>Country</th>
				<th>Song</th>
				<th>Artist</th>
				<th>Participant</th>
			</TableHeader>
			<tbody>
				{data.map((entry, i) => (
					<tr key={entry.participant}>
						<td>{i + 1}</td>
						<td>
							{<Flag country={entry.country}></Flag>} {entry.country}
						</td>
						<td>{entry.song}</td>
						<td>{entry.artist}</td>
						<td>{joinTable(entry.participant)}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default ParticipantTable;
