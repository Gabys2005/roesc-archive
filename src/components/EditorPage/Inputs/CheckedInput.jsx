import { useState } from "react";

function CheckedInput(props) {
	const [checked, setChecked] = useState(props.value !== "");
	const [val, setVal] = useState(props.value);

	function ticked() {
		console.log("checkbox checked");
		setChecked(!checked);
		if (!checked) {
			props.onChange({ target: { value: val } });
		} else {
			props.onChange({ target: { value: "" } });
		}
	}

	function changeValue(e) {
		setVal(e.target.value);
		if (checked) {
			props.onChange(e);
		}
	}

	return (
		<div className="mb-5">
			<p className="subtitle">{props.description}</p>
			<div className="field is-grouped">
				<label className="b-checkbox checkbox is-large">
					<input type="checkbox" checked={checked} value={val} onChange={ticked} />
					<span className="check"></span>
				</label>
				<input
					type={props.type || "text"}
					className="input"
					placeholder={props.placeholder}
					value={val}
					onChange={changeValue}
					disabled={!checked}
				/>
			</div>
			<hr />
		</div>
	);
}

export default CheckedInput;
