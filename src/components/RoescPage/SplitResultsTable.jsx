import Flag from "../Flag";
import Table from "../Table";
import TableHeader from "../TableHeader";

function SplitResultsTable(props) {
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
				country: entry.country,
				jury: showData.jury,
				tele: showData.tele,
				classes: classes,
			});
		}
	});

	const jurySorted = convertedData.slice().sort((a, b) => {
		return b.jury - a.jury;
	});

	const teleSorted = convertedData.sort((a, b) => {
		return b.tele - a.tele;
	});

	return (
		<div className="columns">
			<div className="column">
				<Table>
					<TableHeader>
						<th>#</th>
						<th>Country</th>
						<th>Jury points</th>
					</TableHeader>
					<tbody>
						{jurySorted.map((data, i) => (
							<tr key={data.country} className={data.classes}>
								<td>{i + 1}</td>
								<td>
									<Flag country={data.country} /> {data.country}
								</td>
								<td>{data.jury}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
			<div className="column">
				<Table>
					<TableHeader>
						<th>#</th>
						<th>Country</th>
						<th>Tele points</th>
					</TableHeader>
					<tbody>
						{teleSorted.map((data, i) => (
							<tr key={data.country} className={data.classes}>
								<td>{i + 1}</td>
								<td>
									<Flag country={data.country} /> {data.country}
								</td>
								<td>{data.tele}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default SplitResultsTable;
