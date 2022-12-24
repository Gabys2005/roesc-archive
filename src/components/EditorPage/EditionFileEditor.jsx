function EditionFileEditor(props) {
	return (
		<div>
			<button className="button is-primary" onClick={() => props.goBack()}>
				Go Back
			</button>
			<br />
			<br />
		</div>
	);
}

export default EditionFileEditor;
