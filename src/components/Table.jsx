export default function Table({ columns, children, compact, smallFirst }) {
	return (
		<div className="table-container">
			<table className={`table is-bordered is-striped ${compact ? "is-narrow" : ""} is-hoverable is-fullwidth`}>
				<thead>
					<tr>
						{columns.map((name, i) => (
							<th key={i} style={smallFirst && i === 0 ? { width: "1%" } : {}}>
								{name}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
}
