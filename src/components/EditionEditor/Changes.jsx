import EntryReplacementInput from "../Inputs/EntryReplacementInput";

export default function Changes({ data, setValue, users }) {
	return (
		<div>
			<div className="box">
				<h1>Entry Changes</h1>
				<EntryReplacementInput
					value={data.replacements}
					setValue={(newReplacements) => setValue("replacements", newReplacements)}
					users={users}
				/>
			</div>
		</div>
	);
}
