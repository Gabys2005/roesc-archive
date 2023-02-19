import { useState } from "react";
import { showNames } from "../../../utils";

function CheckboxList(props) {
	const [val, setVal] = useState(props.value);

	function change(name) {
		return function () {
			let newVal;
			if (val.indexOf(name) === -1) {
				newVal = [...val, name];
			} else {
				newVal = val.filter((r) => r !== name);
			}
			setVal(newVal);
			const toSet = [];
			props.values.forEach((v) => {
				if (newVal.indexOf(v) !== -1) {
					toSet.push(v);
				}
			});
			props.onChange({ target: { value: toSet } });
		};
	}

	return (
		<div className="mb-5">
			<p className="subtitle">
				<b>{props.placeholder}: </b>
				{props.description}
			</p>
			{props.values.map((showShortName) => (
				<div key={showShortName}>
					<label className="b-checkbox checkbox">
						<input
							type="checkbox"
							value={showShortName}
							checked={val.indexOf(showShortName) !== -1}
							onChange={change(showShortName)}
						/>
						<span className="check"></span>
						<span className="control-label">
							{showNames[showShortName]}{" "}
							{props.comments && props.comments[showShortName]
								? `(${props.comments[showShortName]})`
								: ""}
						</span>
					</label>
					<br></br>
				</div>
			))}
			<hr />
		</div>
	);
}

export default CheckboxList;
