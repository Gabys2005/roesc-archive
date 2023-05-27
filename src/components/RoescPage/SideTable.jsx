import { parseDate } from "../../modules/parseDate";
import UsersString from "../UsersString";

export default function SideTable({ data, style }) {
	return (
		<div className="table-container" style={style}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th colSpan={2}>{data.name}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={2}>*logo here*</td>
					</tr>
					<tr>
						<td>Owners:</td>
						<td>
							<UsersString userids={data.owners} />
						</td>
					</tr>
					{data.previousOwners.length > 0 ? (
						<tr>
							<td>Previous Owners: </td>
							<td>
								<UsersString userids={data.previousOwners} />
							</td>
						</tr>
					) : (
						""
					)}
					<tr>
						<td>Created: </td>
						<td>{parseDate(data.creationDate)}</td>
					</tr>
					{data.cancellationDate !== "" ? (
						<tr>
							<td>Cancelled: </td>
							<td>{parseDate(data.cancellationDate)}</td>
						</tr>
					) : (
						""
					)}
					<tr>
						<td colSpan={2} style={{ textAlign: "center" }}>
							{data.links.map((l, i) => (
								<a href={l.link} key={i} target="_blank" rel="noreferrer">
									{l.name}
									<br />
								</a>
							))}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
