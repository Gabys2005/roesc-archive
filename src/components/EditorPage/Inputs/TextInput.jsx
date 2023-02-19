function TextInput(props) {
	return (
		<div className="mb-5">
			<p className="subtitle">
				<b>{props.placeholder}: </b>
				{props.description}
			</p>
			<input
				type={props.type || "text"}
				className="input"
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
			<hr />
		</div>
	);
}

export default TextInput;
