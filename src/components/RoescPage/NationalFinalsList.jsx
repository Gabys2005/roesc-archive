import Flag from "../Flag";
import Table from "../Table";
import TableHeader from "../TableHeader";

function NationalFinalsList(props) {
	const convertedData = [];

	const data = props.source;

	data.entries.forEach((entry) => {
		if (entry.nf) {
			convertedData.push({
				country: entry.country,
				name: entry.nf,
			});
		}
	});

	return (
		<Table>
			<TableHeader>
				<th>#</th>
				<th>Country</th>
				<th>National Final</th>
			</TableHeader>
			<tbody>
				{convertedData.map((data, i) => (
					<tr key={data.country}>
						<td>{i + 1}</td>
						<td>
							<Flag country={data.country} /> {data.country}
						</td>
						<td>{data.name}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default NationalFinalsList;
