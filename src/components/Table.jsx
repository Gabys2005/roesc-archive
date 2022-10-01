function Table(props) {
	return (
		<div className="table-container">
			<table className="table is-bordered is-striped is-hoverable is-fullwidth">{props.children}</table>
		</div>
	);
}

export default Table;
