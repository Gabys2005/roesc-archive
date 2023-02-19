import { useState } from "react";

function MultiStringInput(props) {
	const [fields, setFields] = useState(props.value || []);

	function addNew() {
		const newFields = [...fields, ""];
		setFields(newFields);
		props.onChange({ target: { value: newFields } });
	}

	function changeField(i) {
		return function (e) {
			const newFields = fields.map((r, i2) => {
				if (i === i2) {
					return e.target.value;
				} else {
					return r;
				}
			});
			setFields(newFields);
			props.onChange({ target: { value: newFields } });
		};
	}

	function removeField(i) {
		return function () {
			const newFields = fields.filter((r, i2) => i2 !== i);
			setFields(newFields);
			props.onChange({ target: { value: newFields } });
		};
	}

	return (
		<div className="mb-5">
			<p className="subtitle">
				<b>{props.placeholder}: </b>
				{props.description}
			</p>
			{fields.map((r, i) => (
				<div className="field has-addons" key={i}>
					<p className="control is-expanded">
						<input
							className="input"
							type="text"
							value={r}
							onChange={changeField(i)}
							placeholder={`${props.placeholder} ${fields.length > 1 ? i + 1 : ""}`}
						></input>
					</p>
					<p className="control">
						<button className="button is-danger is-outlined" onClick={removeField(i)}>
							X
						</button>
					</p>
					{props.inline && i + 1 === fields.length ? (
						<button className="button is-primary is-outlined" onClick={addNew}>
							Add another
						</button>
					) : (
						<></>
					)}
				</div>
			))}
			{!props.inline || fields.length === 0 ? (
				<button className="button is-primary" onClick={addNew}>
					Add another
				</button>
			) : (
				<></>
			)}
			<hr />
		</div>
	);
}

export default MultiStringInput;
