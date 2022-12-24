import { useState } from "react";
import { isValidDate } from "../../utils";

function DateInput(props) {
	const [exactDate, setExactDate] = useState(props.value === "" ? true : isValidDate(props.value));
	const [checkedDate, setCheckedDate] = useState(isValidDate(props.value) ? props.value : "");
	const [uncheckedDate, setUncheckedDate] = useState(props.value);

	function change(e) {
		if (exactDate) {
			setCheckedDate(e.target.value);
		} else {
			setUncheckedDate(e.target.value);
		}
		props.onChange(e);
	}

	function changeExactDate() {
		setExactDate(!exactDate);
		if (!exactDate) {
			props.onChange({ target: { value: checkedDate } });
		} else {
			props.onChange({ target: { value: uncheckedDate } });
		}
	}

	return (
		<div className="mb-5">
			<p className="subtitle">{props.description}</p>
			<label className="switch field is-rounded">
				<input type="checkbox" checked={exactDate} onChange={changeExactDate} />
				<span className="check"></span>
				<span className="control-label">Is the date exact?</span>
			</label>
			<input
				type={exactDate ? "date" : "text"}
				className="input"
				placeholder={props.placeholder}
				value={exactDate ? checkedDate : uncheckedDate}
				onChange={change}
			/>
			<hr />
		</div>
	);
}

export default DateInput;
