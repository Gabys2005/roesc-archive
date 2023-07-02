import Twemoji from "react-twemoji";
import Country from "../Country";

function getShowEntries(data, show, sortBy) {
	const entries = [];
	data.entries.forEach((entry) => {
		const showData = entry.shows.find((s) => s.id === show);
		if (showData) {
			let className = "";
			if (showData.qualified) className = "selected";

			entries.push({
				country: entry.country,
				juryPoints: showData.points.jury,
				telePoints: showData.points.tele,
				className,
			});
		}
	});
	return entries.sort((a, b) => b[sortBy] - a[sortBy]);
}

export default function SplitResultsTable({ show, data }) {
	const jurySorted = getShowEntries(data, show, "juryPoints");
	const teleSorted = getShowEntries(data, show, "telePoints");

	return (
		<Twemoji>
			<div className="my-5">
				<div className="table-container">
					<table className="table is-bordered is-striped is-hoverable is-narrow" style={{ width: "inherit" }}>
						<thead>
							<tr>
								<th style={{ textAlign: "center" }} colSpan={5}>
									Split Results
								</th>
							</tr>
							<tr style={{ textAlign: "center" }}>
								<th rowSpan={2}>Place</th>
								<th colSpan={2}>Jury</th>
								<th colSpan={2}>Televoting</th>
							</tr>
							<tr>
								<th>Country</th>
								<th>Points</th>
								<th>Country</th>
								<th>Points</th>
							</tr>
						</thead>
						<tbody>
							{jurySorted.map((juryEntry, i) => (
								<tr key={i}>
									<th style={{ textAlign: "center" }}>{i + 1}</th>
									<td>
										<Country id={juryEntry.country} />
									</td>
									<td>{juryEntry.juryPoints}</td>
									<td>
										<Country id={teleSorted[i].country} />
									</td>
									<td>{teleSorted[i].telePoints}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Twemoji>
	);
}
