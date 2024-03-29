import { parseDate } from "../../modules/parseDate";
import UsersString from "../UsersString";
import { getMedia } from "../../modules/utils";
import LogoImage from "../LogoImage";

export default function SideTable({ data, style }) {
	return (
		<div className="table-container sideTable" style={style}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th colSpan={2} style={{ textAlign: "center" }}>
							{data.name}
						</th>
					</tr>
				</thead>
				<tbody>
					{getMedia(data.media, "logos").length > 0 ? (
						<tr>
							<td colSpan={2}>
								<LogoImage logos={getMedia(data.media, "logos")} />
							</td>
						</tr>
					) : (
						""
					)}
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
					{data.previousOwners.length > 0 ? (
						<tr>
							<th>Previous Owners: </th>
							<td>
								<UsersString userids={data.previousOwners} />
							</td>
						</tr>
					) : (
						""
					)}
					<tr>
						<th>Created: </th>
						<td>{parseDate(data.creationDate)}</td>
					</tr>
					{data.cancellationDate !== "" ? (
						<tr>
							<th>Cancelled: </th>
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
