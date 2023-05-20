import InputHeader from "./Util/InputHeader";

export default function TextInput({ name, description, value, setValue, link }) {
	function valueChanged(e) {
		let value = e.target.value;

		if (link) {
			value = value.toLowerCase(); // TODO: filter some characters
		}

		setValue(value);
	}

	return (
		<InputHeader name={name} description={description}>
			<div className="control">
				<input className="input" type="text" value={value} onChange={valueChanged} />
			</div>
		</InputHeader>
	);
}
