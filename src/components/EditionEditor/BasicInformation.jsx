import CountryInput from "../Inputs/CountryInput";
import MultiTextInput from "../Inputs/MultiTextInput";
import PresenterInput from "../Inputs/PresenterInput";
import TextInput from "../Inputs/TextInput";
import VenueInput from "../Inputs/VenueInput";

export default function BasicInformation({ data, setValue, users }) {
	return (
		<div className="box">
			<TextInput
				name="Edition Name"
				description="Generally the number, for example: #04 or WC #01"
				value={data.edition}
				setValue={(edition) => setValue("edition", edition)}
			/>
			<TextInput
				name="Link"
				description="Generally the name from above, but without any special characters, for example: 04, wc_01 or 15_2021"
				value={data.link}
				setValue={(link) => setValue("link", link)}
			/>
			<MultiTextInput
				name="Slogan(s)"
				description="Slogan(s) used for this edition"
				value={data.slogans}
				setValue={(slogans) => setValue("slogans", slogans)}
			/>
			<CountryInput
				name="Host Countries"
				description="Country or countries that hosted this edition"
				value={data.countries}
				setValue={(countries) => setValue("countries", countries)}
			/>
			<VenueInput
				name="Host Venue(s)"
				description="City or cities that hosted this edition"
				value={data.venues}
				setValue={(venues) => setValue("venues", venues)}
			/>
			<PresenterInput
				name="Presenter(s)"
				description="People that hosted the show"
				value={data.presenters}
				setValue={(presenters) => setValue("presenters", presenters)}
				users={users}
			/>
		</div>
	);
}
