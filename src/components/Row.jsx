function Row(props) {
	return (
		<tr>
			<th>{props.title}</th>
			<td>
				{props.content}
				{props.children}
			</td>
		</tr>
	);
}

export default Row;
