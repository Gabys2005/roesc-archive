import Button from "../Button";
import Checkbox from "../Inputs/Checkbox";
import MarkdownInput from "../Inputs/MarkdownInput";
import InputHeader from "../Inputs/Util/InputHeader";
import Table from "../Table";

export default function Location({ data, setValue }) {
	function edit(i, field, newValue) {
		setValue(
			"bidding",
			data.bidding.map((r, i2) => (i !== i2 ? r : { ...r, [field]: newValue }))
		);
	}

	return (
		<div className="box">
			<InputHeader name="Bidding Table" description="add description here">
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
			</InputHeader>

			<InputHeader name="Written Content" description="">
				<MarkdownInput value={data.biddingText} setValue={(text) => setValue("biddingText", text)} />
			</InputHeader>
		</div>
	);
}
