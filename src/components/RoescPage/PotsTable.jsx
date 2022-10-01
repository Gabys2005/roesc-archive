import Flag from "../Flag";
import Table from "../Table";
import TableHeader from "../TableHeader";

function PotsTable(props) {
	const data = props.source;

	return (
		<Table>
			<TableHeader>
				{data.map((r, i) => (
					<th key={r}>Pot {i + 1}</th>
				))}
			</TableHeader>
			<tbody>
				<tr>
					{data.map((r, i) => (
						<td key={r}>
							<ul>
								{r.map((a) => (
									<li>
										<Flag country={a}></Flag> {a}
										<br></br>
									</li>
								))}
							</ul>
						</td>
					))}
				</tr>
			</tbody>
		</Table>
	);
}

export default PotsTable;
