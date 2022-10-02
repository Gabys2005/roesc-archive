import { Link } from "react-router-dom";
import Flag from "../Flag";
import Table from "../Table";
import TableHeader from "../TableHeader";

function NationalFinalsList(props) {
	return (
		<Table>
			<TableHeader>
				<th>#</th>
				<th>Country</th>
				<th>National Final</th>
			</TableHeader>
			<tbody>
				{props.source?.map((data, i) => (
					<tr key={data.country}>
						<td>{i + 1}</td>
						<td>
							<Flag country={data.country} /> {data.country}
						</td>
						<td>
							<Link to={`/roescs/${props.roesc}/editions/${props.edition}/nfs/${data.link}`}>
								{data.name}
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default NationalFinalsList;
