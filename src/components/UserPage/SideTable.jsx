import { parseDate } from "../../modules/parseDate";

export default function SideTable({ data, style }) {
	return (
		<div className="table-container" style={style}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th colSpan={2} style={{ textAlign: "center" }}>
							{data.current.username}
						</th>
					</tr>
				</thead>
				<tbody>
					{data.previous.length > 0 && (
						<tr>
							<th>Previous Usernames: </th>
							<td>{data.previous.map((u) => u.username).join(", ")}</td>
						</tr>
					)}

					{data.aliases.length > 0 && (
						<tr>
							<th>Also known as: </th>
							<td>{data.aliases.join(", ")}</td>
						</tr>
					)}

					{data.joined && (
						<tr>
							<th>Joined:</th>
							<td>{parseDate(data.joined)}</td>
						</tr>
					)}

					{data.left && (
						<tr>
							<th>Left:</th>
							<td>{parseDate(data.left)}</td>
						</tr>
					)}

					<tr>
						<td colSpan={2} style={{ textAlign: "center" }}>
							<a
								href={`https://roblox.com/users/${data.current.id}/profile`}
								target="_blank"
								rel="noreferrer"
							>
								Roblox Profile
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
