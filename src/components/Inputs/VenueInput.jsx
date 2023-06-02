import InputHeader from "./Util/InputHeader";
import Button from "../Button";

export default function VenueInput({ name, description, value, setValue }) {
	function edit(i, field, newValue) {
		setValue(value.map((r, i2) => (i !== i2 ? r : { ...r, [field]: newValue })));
	}

	return (
		<InputHeader name={name} description={description}>
			{value.map((venue, i) => (
				<div className="field has-addons" key={i}>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={venue.name}
							onChange={(e) => edit(i, "name", e.target.value)}
							placeholder="Name"
						/>
					</div>
					<div className="control">
						<div className="button is-static">-</div>
					</div>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={venue.city}
							onChange={(e) => edit(i, "city", e.target.value)}
							placeholder="City"
						/>
					</div>
					<div className="control">
						<div className="button is-static">-</div>
					</div>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={venue.link}
							onChange={(e) => edit(i, "link", e.target.value)}
							placeholder="Wikipedia link"
						/>
					</div>
					<div className="control">
						<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i2 !== i))}>
							X
						</Button>
					</div>
				</div>
			))}
			<Button onClick={() => setValue([...value, { name: "", city: "", link: "" }])}>Add Another</Button>
		</InputHeader>
	);
}
