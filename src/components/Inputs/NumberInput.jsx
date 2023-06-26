import InputHeader from "./Util/InputHeader";

export default function NumberInput({ name, description, value, setValue, margin }) {
	function valueChanged(e) {
		setValue(Number(e.target.value.replaceAll("e", "").replaceAll(",", "")));
		// setValue(e.target.value);
	}

	return (
		<div className={margin ? "mr-3" : ""}>
			<InputHeader name={name} description={description}>
				<div className="control">
					<input className="input" type="number" value={value} onChange={valueChanged} />
				</div>
			</InputHeader>
		</div>
	);
}
