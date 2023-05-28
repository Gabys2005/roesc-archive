export default function SideTable({ data, style }) {
	return (
		<div className="table-container" style={style}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th colSpan={2}>{data.current.username}</th>
					</tr>
				</thead>
				<tbody>
					{data.previous.length > 0 ? (
						<tr>
							<td>Previous Usernames: </td>
							<td>{data.previous.map((u) => u.username).join(", ")}</td>
						</tr>
					) : (
						""
					)}
				</tbody>
			</table>
		</div>
	);
}
