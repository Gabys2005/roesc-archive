import Button from "../Button";
import InputHeader from "./Util/InputHeader";

export default function MultiSelect({ name, description, value, setValue, options }) {
	return (
		<InputHeader name={name} description={description}>
			{value.map((val, i) => (
				<div className="field has-addons" key={i}>
					<div className="control is-expanded">
						<div className="select is-fullwidth">
							<select
								value={val}
								onChange={(e) => setValue(value.map((r, i2) => (i2 === i ? e.target.value : r)))}
							>
								<option hidden default value="select">
									Select
								</option>
								{options.map((option) => (
									<option key={option.value} value={option.value}>
										{option.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="control">
						<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i !== i2))}>
							X
						</Button>
					</div>
				</div>
			))}
			<Button onClick={() => setValue([...value, ""])}>Add Another</Button>
		</InputHeader>
	);
}
