import { parseDate } from "../../modules/parseDate";
import LinkList from "../LinkList";
import LogoImage from "../LogoImage";
import UsersString from "../UsersString";

export default function SideTable({ data }) {
	return (
		<div className="table-container sideTable" style={{ float: "right", marginLeft: "1rem" }}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th colSpan={2} style={{ textAlign: "center" }}>
							{data.name}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={2}>
							<LogoImage logos={data.logos} />
						</td>
					</tr>
					<tr>
						<th>Short Name:</th>
						<td>{data.shortName}</td>
					</tr>
					<tr>
						<th>Owners:</th>
						<td>
							<UsersString userids={data.owners} />
						</td>
					</tr>
					{data.created && (
						<tr>
							<th>Created:</th>
							<td>{parseDate(data.created)}</td>
						</tr>
					)}
					{data.closed && (
						<tr>
							<th>Closed:</th>
							<td>{parseDate(data.closed)}</td>
						</tr>
					)}

					<tr>
						<td colSpan={2} style={{ textAlign: "center" }}>
							<LinkList links={data.links} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
