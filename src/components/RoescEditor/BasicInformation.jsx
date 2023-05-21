import DateInput from "../Inputs/DateInput";
import MultiTextInput from "../Inputs/MultiTextInput";
import TextInput from "../Inputs/TextInput";

export default function BasicInformation({ data, setValue }) {
	return (
		<div className="box">
			<TextInput
				name="Name"
				description="The FULL name of this RoESC, for example: Gabys' Eurovision Song Contest"
				value={data.name}
				setValue={(newName) => setValue("name", newName)}
			/>
			<TextInput
				name="Link"
				description="The link for this RoESC, generally the shortened version of the name, for example: gesc"
				value={data.link}
				setValue={(newLink) => setValue("link", newLink)}
				link
			/>
			<MultiTextInput
				name="Previous Names"
				description="Previous names the contest had"
				value={data.previousNames}
				setValue={(names) => {
					setValue("previousNames", names);
				}}
			/>
			<DateInput
				name="Creation Date"
				description="When the contest was created, use the YYYY/MM/DD format, for example: 2019/11/25"
				value={data.creationDate}
				setValue={(date) => setValue("creationDate", date)}
			/>
			<DateInput
				name="Cancellation Date"
				description="When the contest was cancelled, use the YYYY/MM/DD format, for example: 2019/11/25. Leave empty if the contest is still running"
				value={data.cancellationDate}
				setValue={(date) => setValue("cancellationDate", date)}
			/>
		</div>
	);
}