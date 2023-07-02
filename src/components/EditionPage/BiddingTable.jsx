import OutLink from "../OutLink";
import Table from "../Table";

export default function BiddingTable({ data, stopLinks }) {
	return (
		<Table columns={["City", "Venue", "Notes"]}>
			{data.map((biddingData, i) => (
				<tr key={i} className={biddingData.won ? "selected" : ""}>
					<td>{biddingData.city}</td>
					<td>
						<OutLink to={!stopLinks && biddingData.link}>{biddingData.venue}</OutLink>
					</td>
					<td>{biddingData.notes}</td>
				</tr>
			))}
		</Table>
	);
}
