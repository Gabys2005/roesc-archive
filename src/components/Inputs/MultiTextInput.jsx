import Button from "../Button";
import InputHeader from "./Util/InputHeader";

export default function MultiTextInput({ name, description, value, setValue }) {
	function editValue(i, v) {
		const newValue = value.map((r, i2) => {
			if (i2 === i) return v;
			return r;
		});
		setValue(newValue);
	}

	return (
		<InputHeader name={name} description={description}>
			{value.map((str, i) => (
				<div className="field has-addons" key={i}>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={str}
							onChange={(e) => editValue(i, e.target.value)}
						></input>
					</div>
					<div className="control">
						<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i2 !== i))}>
							X
						</Button>
					</div>
				</div>
			))}
			<Button onClick={() => setValue([...value, ""])}>Add Another</Button>
		</InputHeader>
	);
}
