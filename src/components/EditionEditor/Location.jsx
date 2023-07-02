import Button from "../Button";
import BiddingTable from "../EditionPage/BiddingTable";
import Checkbox from "../Inputs/Checkbox";
import MarkdownInput from "../Inputs/MarkdownInput";
import Table from "../Table";

export default function Location({ data, setValue }) {
	function edit(i, field, newValue) {
		setValue(
			"bidding",
			data.bidding.map((r, i2) => (i !== i2 ? r : { ...r, [field]: newValue }))
		);
	}

	return (
		<div>
			<div className="box">
				<h1>Bidding Table</h1>
				<Table columns={["City", "Venue", "Notes", "Wikipedia link", "Won?", ""]}>
					{data.bidding.map((bidData, i) => (
						<tr key={i}>
							<td>
								<input
									type="text"
									className="input is-small"
									value={bidData.city}
									onChange={(e) => edit(i, "city", e.target.value)}
								/>
							</td>
							<td>
								<input
									type="text"
									className="input is-small"
									value={bidData.venue}
									onChange={(e) => edit(i, "venue", e.target.value)}
								/>
							</td>
							<td>
								<input
									type="text"
									className="input is-small"
									value={bidData.notes}
									onChange={(e) => edit(i, "notes", e.target.value)}
								/>
							</td>
							<td>
								<input
									type="text"
									className="input is-small"
									value={bidData.link}
									onChange={(e) => edit(i, "link", e.target.value)}
								/>
							</td>
							<td>
								<Checkbox
									size="small"
									border
									checked={bidData.won}
									onChange={(val) => edit(i, "won", val)}
								/>
							</td>
							<td>
								<Button
									color="danger"
									size="small"
									onClick={() =>
										setValue(
											"bidding",
											data.bidding.filter((bid, i2) => i !== i2)
										)
									}
								>
									X
								</Button>
							</td>
						</tr>
					))}
				</Table>
				<Button
					onClick={() =>
						setValue("bidding", [...data.bidding, { city: "", venue: "", notes: "", link: "", won: false }])
					}
				>
					Add Another Row
				</Button>
			</div>
			<div className="box">
				<h1>Written Content</h1>
				<p>Custom components for this editor:</p>
				<ul>
					<li>
						<span className="tag">
							{"<"}BiddingTable /{">"}
						</span>{" "}
						will insert the table from above. If omitted, the table will be generated at the very bottom of
						this section
					</li>
				</ul>
				<MarkdownInput
					value={data.biddingText}
					setValue={(text) => setValue("biddingText", text)}
					overrides={{
						BiddingTable: { component: BiddingTable, props: { data: data.bidding, stopLinks: true } },
					}}
				/>
			</div>
		</div>
	);
}
