import Button from "../Button";
import InputHeader from "./Util/InputHeader";

export default function LinksInput({
	name,
	description,
	value,
	setValue,
	namePlaceholder,
	linkPlaceholder,
	requiredValues,
}) {
	if (!requiredValues) {
		requiredValues = [];
	}

	function editName(i, v) {
		const newValue = value.map((r, i2) => {
			if (i2 === i) return { name: v, link: r.link };
			return r;
		});
		setValue(newValue);
	}
	function editDestination(i, v) {
		const newValue = value.map((r, i2) => {
			if (i2 === i) return { name: r.name, link: v };
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
							disabled={requiredValues.indexOf(link.name) > -1}
							onChange={(e) => editName(i, e.target.value)}
							placeholder={namePlaceholder || "Name"}
						/>
					</div>
					<div className="control">
						<div className="button is-static">:</div>
					</div>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={link.link}
							onChange={(e) => editDestination(i, e.target.value)}
							placeholder={linkPlaceholder || "Destination (Link)"}
						/>
					</div>
					{requiredValues.indexOf(link.name) === -1 ? (
						<div className="control">
							<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i2 !== i))}>
								X
							</Button>
						</div>
					) : (
						""
					)}
				</div>
			))}
			<Button onClick={() => setValue([...value, { name: "", link: "" }])}>Add Another</Button>
		</InputHeader>
	);
}
