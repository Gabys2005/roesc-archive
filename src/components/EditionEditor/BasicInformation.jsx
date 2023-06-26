import BroadcasterInput from "../Inputs/BroadcasterInput";
import Checkbox from "../Inputs/Checkbox";
import CountryInput from "../Inputs/CountryInput";
import LinksInput from "../Inputs/LinksInput";
import MarkdownInput from "../Inputs/MarkdownInput";
import MultiTextInput from "../Inputs/MultiTextInput";
import PresenterInput from "../Inputs/PresenterInput";
import TextInput from "../Inputs/TextInput";
import InputHeader from "../Inputs/Util/InputHeader";
import VenueInput from "../Inputs/VenueInput";
import Select from "../Inputs/Select";
import { editionTypes } from "../../modules/editionTypes";

export default function BasicInformation({ data, setValue, users, broadcasters }) {
	return (
		<div className="box">
			<TextInput
				name="Full Name"
				description="Full contest for this edition. For example: Gabys' Eurovision Song Contest #03. This has to be edition specific because the name of a RoESC can change over time"
				value={data.fullName}
				setValue={(name) => setValue("fullName", name)}
			/>
			<TextInput
				name="Edition Number"
				description="For example: #04 or WC #01. This will be visible in tables"
				value={data.edition}
				setValue={(edition) => setValue("edition", edition)}
			/>
			<TextInput
				name="Link"
				description="Generally the name from above, but without any special characters, for example: 04, wc_01 or 15_2021"
				value={data.link}
				setValue={(link) => setValue("link", link)}
			/>
			<InputHeader
				name="Edition Cancelled"
				description="Check this box if the edition was cancelled / was later restarted from scratch"
			>
				<Checkbox
					label="Cancelled"
					checked={data.cancelled}
					onChange={(checked) => setValue("cancelled", checked)}
				/>
			</InputHeader>
			<Select
				name="Edition Type"
				description="Was this edition an Earthvision? A Eurovision?"
				value={data.type}
				setValue={(type) => setValue("type", type)}
				values={editionTypes}
			/>
			<hr />
			<MultiTextInput
				name="Slogan(s)"
				description="Slogan(s) used for this edition"
				value={data.slogans}
				setValue={(slogans) => setValue("slogans", slogans)}
			/>
			<hr />
			<CountryInput
				name="Host Countries"
				description="Country or countries that hosted this edition"
				value={data.countries}
				setValue={(countries) => setValue("countries", countries)}
				multiple
			/>
			<hr />
			<VenueInput
				name="Host Venue(s)"
				description="Venue(s) that hosted this edition"
				value={data.venues}
				setValue={(venues) => setValue("venues", venues)}
			/>
			<hr />
			<PresenterInput
				name="Presenter(s)"
				description="People that hosted the show"
				value={data.presenters}
				setValue={(presenters) => setValue("presenters", presenters)}
				users={users}
			/>
			<hr />
			<LinksInput
				name="Links"
				description="Links to that edition's Roblox game, official wiki page, etc."
				value={data.links}
				setValue={(links) => setValue("links", links)}
			/>
			<hr />
			<BroadcasterInput
				name="Broadcaster(s)"
				description="Broadcasters that livestreamed the show"
				value={data.broadcasters}
				setValue={(broadcasters) => setValue("broadcasters", broadcasters)}
				broadcasters={broadcasters}
			/>
			<hr />
			<InputHeader
				name="Primary written content"
				description="This text will appear at the very top of this edition's page. You can find content boxes for individual sections in their tabs"
			>
				<MarkdownInput value={data.textContent} setValue={(text) => setValue("textContent", text)} />
			</InputHeader>
		</div>
	);
}
