import { useState } from "react";
import Select from "../Inputs/Select";
import { getCountryFromCode } from "../../modules/countryList";
import EntryInputs from "./EntryInputs";

export default function EditEntry({ data, setValue, users }) {
	const [selected, setSelected] = useState(0);

	return (
		<>
			<div className="box">
				<Select
					name="Select an entry to edit"
					value={selected}
					setValue={setSelected}
					values={data.entries.map((entry, i) => {
						return { value: i, label: getCountryFromCode(entry.country) };
					})}
				/>
			</div>

			{data.entries.length > 0 && (
				<EntryInputs
					data={data.entries[selected]}
					users={users}
					fullData={data}
					setData={(
						field,
						value //console.log(field, value, selected)
					) =>
						setValue(
							"entries",
							data.entries.map((e, i) => (i != selected ? e : { ...e, [field]: value }))
						)
					}
				/>
			)}
		</>
	);
}
