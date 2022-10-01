import Table from "../Table";
import TableHeader from "../TableHeader";

function VenueBidding(props) {
	if (!props.venues) {
		return <></>;
	}
	return (
		<Table>
			<TableHeader>
				<th>City</th>
				<th>Venue</th>
			</TableHeader>
			<tbody>
				{props.venues.map((venue) => (
					<tr key={venue.venue} className={venue.venue === props.venue ? "selected" : ""}>
						<td>{venue.city}</td>
						<td>{venue.venue}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default VenueBidding;
