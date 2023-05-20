import Button from "../Button";
import InputHeader from "./Util/InputHeader";

export default function LinksInput({ name, description, value, setValue }) {
	function editName(i, v) {
		const newValue = value.map((r, i2) => {
			if (i2 === i) return { name: v, destination: r.destination };
			return r;
		});
		setValue(newValue);
	}
	function editDestination(i, v) {
		const newValue = value.map((r, i2) => {
			if (i2 === i) return { name: r.name, destination: v };
			return r;
		});
		setValue(newValue);
	}

	return (
		<InputHeader name={name} description={description}>
			{value.map((link, i) => (
				<div className="field has-addons" key={i}>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={link.name}
							onChange={(e) => editName(i, e.target.value)}
							placeholder="Name"
						/>
					</div>
					<div className="control">
						<div className="button is-static">:</div>
					</div>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={link.destination}
							onChange={(e) => editDestination(i, e.target.value)}
							placeholder="Destination (Link)"
						/>
					</div>
					<div className="control">
						<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i2 !== i))}>
							X
						</Button>
					</div>
				</div>
			))}
			<Button onClick={() => setValue([...value, { name: "", destination: "" }])}>Add Another</Button>
		</InputHeader>
	);
}
