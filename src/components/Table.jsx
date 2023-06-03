export default function Table({ columns, children }) {
	return (
		<div className="table-container">
			<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
				<thead>
					<tr>
						{columns.map((name, i) => (
							<td key={i}>{name}</td>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
}
