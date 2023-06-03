export default function Table({ columns, children, compact }) {
	return (
		<div className="table-container">
			<table className={`table is-bordered is-striped ${compact ? "is-narrow" : ""} is-hoverable is-fullwidth`}>
				<thead>
					<tr>
						{columns.map((name, i) => (
							<th key={i}>{name}</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
}
