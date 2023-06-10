import Button from "../Button";
import InputHeader from "./Util/InputHeader";

import { countriesArray } from "../../modules/countryList";

export default function CountryInput({ name, description, value, setValue, buttonText }) {
	return (
		<InputHeader name={name} description={description}>
			{value.map((selected, i) => (
				<div key={i} className="field has-addons">
					<div className="select control is-fullwidth">
						<select
							value={selected}
							onChange={(e) => setValue(value.map((r, i2) => (i !== i2 ? r : e.target.value)))}
						>
							<option default hidden>
								Select
							</option>
							{countriesArray.map((country) => (
								<option value={country.id} key={country.id}>
									{country.name}
								</option>
							))}
						</select>
					</div>
					<div className="control">
						<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i !== i2))}>
							X
						</Button>
					</div>
				</div>
			))}
			<Button onClick={() => setValue([...value, ""])}>{buttonText || "Add Another"}</Button>
		</InputHeader>
	);
}
