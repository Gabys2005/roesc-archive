import TextInput from "../Inputs/TextInput";
import MultiStringInput from "../Inputs/MultiStringInput";
import CheckboxList from "../Inputs/CheckboxList";
import { showNames } from "../../../utils";
import Collapsible from "../../Collapsible";

function BasicInformation({ data, change }) {
	return (
		<Collapsible title="Basic Information">
			<TextInput
				description="The hashtagged number used in this edition, for example #03"
				placeholder="Number"
				value={data.number}
				onChange={change("number")}
			></TextInput>
			<TextInput
				description="The link to this edition's page, generally it should be the number but without special characters"
				placeholder="Link"
				value={data.link}
				onChange={change("link", { lowercase: true, link: true })}
			></TextInput>
			<MultiStringInput
				description="The city (or cities) that this edition took place in"
				placeholder="City"
				value={data.cities}
				onChange={change("cities")}
				inline
			></MultiStringInput>
			<MultiStringInput
				description="The country (or countries) that this edition took place in" // TODO: country selector
				placeholder="Country"
				value={data.countries}
				onChange={change("countries")}
				inline
			></MultiStringInput>
			<MultiStringInput
				description="The venue(s) that this edition took place in"
				placeholder="Venue"
				value={data.venues}
				onChange={change("venues")}
				inline
			></MultiStringInput>
			<MultiStringInput
				description="The slogan(s) for this edition"
				placeholder="Slogan"
				value={data.slogans}
				onChange={change("slogans")}
				inline
			></MultiStringInput>
			<MultiStringInput
				description="The host(s) of this edition"
				placeholder="Presenter"
				value={data.presenters}
				onChange={change("presenters")}
				inline
			></MultiStringInput>
			<CheckboxList
				description="Which shows were a part of this edition"
				placeholder="Shows"
				value={data.shows}
				values={Object.keys(showNames)}
				comments={{ sf: "only one" }}
				onChange={change("shows")}
			></CheckboxList>
			<MultiStringInput
				description="Additional written notes"
				placeholder="Notes"
				value={data.notes}
				onChange={change("notes")}
			></MultiStringInput>
		</Collapsible>
	);
}

export default BasicInformation;
