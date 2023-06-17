import TextInput from "../Inputs/TextInput";
import LinksInput from "../Inputs/LinksInput";
import UserInput from "../Inputs/UserInput";
import InputHeader from "../Inputs/Util/InputHeader";
import MarkdownInput from "../Inputs/MarkdownInput";
import DateInput from "../Inputs/DateInput";

export default function Inputs({ users, data, setData }) {
	return (
		<div>
			<TextInput
				name="Name"
				description="Full name of this broadcaster, for example: Giorgio World Media"
				value={data.name}
				setValue={(name) => setData("name", name)}
			/>
			<TextInput
				name="Short Name"
				description="Shortened name of this broadcaster, for example: GWM"
				value={data.shortName}
				setValue={(shortName) => setData("shortName", shortName)}
			/>
			<TextInput
				name="Link"
				description="Link for this broadcaster, generally short name but lowercase, for example: gwm"
				value={data.link}
				setValue={(link) => setData("link", link)}
			/>
			<hr />
			<DateInput
				name="Creation Date"
				description="When this broadcaster started their journey"
				value={data.created}
				setValue={(date) => setData("created", date)}
			/>
			<DateInput
				name="Closure Date"
				description="When this broadcaster stopped broadcasting"
				value={data.closed}
				setValue={(date) => setData("closed", date)}
			/>
			<hr />
			<LinksInput
				name="Links"
				description="YouTube channel, Twitch channel, Roblox group, etc."
				value={data.links}
				setValue={(links) => setData("links", links)}
			/>
			<hr />
			<LinksInput
				name="Logos"
				description="Logos of the broadcaster"
				value={data.logos}
				setValue={(logos) => setData("logos", logos)}
				namePlaceholder="Description"
				linkPlaceholder="File Name"
				requiredValues={["Dark Logo", "Light Logo"]}
			/>
			<hr />
			<UserInput
				users={users}
				multiple
				name="Owners"
				description="Owners of this broadcaster"
				value={data.owners}
				setValue={(owners) => setData("owners", owners)}
			/>
			<hr />
			<UserInput
				users={users}
				multiple
				name="Staff"
				description="People working for this broadcaster"
				value={data.staff}
				setValue={(staff) => setData("staff", staff)}
			/>
			<hr />
			<InputHeader
				name="Text content"
				description="Markdown that will be displayed next to all of the data from above"
			>
				<MarkdownInput value={data.textContent} setValue={(content) => setData("textContent", content)} />
			</InputHeader>
		</div>
	);
}
