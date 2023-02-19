import { useState } from "react";
import { objectToArray } from "../../../utils";

function ObjectInput(props) {
	const [fields, setFields] = useState(
		objectToArray(props.value).map((r) => {
			return { key: r[0], value: r[1] };
		}) || []
	);

	function send(fields) {
		const toSend = {};
		fields.forEach((field) => {
			toSend[field.key] = field.value;
		});
		props.onChange({ target: { value: toSend } });
	}

	function addNew() {
		const newFields = [...fields, { key: "", value: "" }];
		setFields(newFields);
		send(newFields);
	}

	function changeField(i, val) {
		return function (e) {
			const newFields = fields.map((r, i2) => {
				if (i === i2) {
					if (val === "key") {
						return {
							key: e.target.value,
							value: r.value,
						};
					} else {
						return {
							key: r.key,
							value: e.target.value,
						};
					}
				} else {
					return r;
				}
			});
			setFields(newFields);
			send(newFields);
		};
	}

	function remove(i) {
		return function () {
			const newFields = fields.filter((r, i2) => i2 !== i);
			setFields(newFields);
			send(newFields);
		};
	}

	return (
		<div className="mb-5">
			<p className="subtitle">
				<b>{props.title}: </b>
				{props.description}
			</p>
			{fields.map((r, i) => (
				<div key={i} className="field has-addons">
					<p className="control is-expanded">
						<input
							type="text"
							className="input"
							value={r.key}
							onChange={changeField(i, "key")}
							placeholder={`${props.leftPlaceholder} ${i + 1}`}
						/>
					</p>
					<p className="control is-static">
						<button className="button is-secondary" disabled>
							:
						</button>
					</p>
					<p className="control is-expanded">
						<input
							type={props.valueType || "text"}
							className="input"
							value={r.value}
							onChange={changeField(i, "value")}
							placeholder={`${props.rightPlaceholder} ${i + 1}`}
						/>
					</p>
					<p className="control">
						<button className="button is-danger is-outlined" onClick={remove(i)}>
							X
						</button>
					</p>
				</div>
			))}
			<button className="button is-primary" onClick={addNew}>
				Add another
			</button>
			<hr />
		</div>
	);
}

export default ObjectInput;
