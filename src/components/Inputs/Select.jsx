import InputHeader from "./Util/InputHeader";

export default function Select({ value, setValue, values, name, description }) {
	return (
		<InputHeader name={name} description={description}>
			<div className="control select is-fullwidth">
				<select value={value} onChange={(e) => setValue(e.target.value)}>
					<option default hidden>
						Select
					</option>
					{values.map((value) => (
						<option value={value.value} key={value.value}>
							{value.label}
						</option>
					))}
				</select>
			</div>
		</InputHeader>
	);
}
