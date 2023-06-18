import TextInput from "../Inputs/TextInput";
import LinksInput from "../Inputs/LinksInput";
import UserInput from "../Inputs/UserInput";
import InputHeader from "../Inputs/Util/InputHeader";
import MarkdownInput from "../Inputs/MarkdownInput";
import DateInput from "../Inputs/DateInput";
import ImagesInput from "../Inputs/ImagesInput";

export default function Inputs({ users, data, setData }) {
	return (
		<>
			<div className="box">
				<h1>Names</h1>
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
			</div>
			<div className="box">
				<h1>Dates</h1>
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
			</div>
			<div className="box">
				<h1>Lists</h1>
				<LinksInput
					name="Links"
					description="YouTube channel, Twitch channel, Roblox group, etc."
					value={data.links}
					setValue={(links) => setData("links", links)}
				/>
				<hr />
				<ImagesInput
					name="Logos"
					description="Logos of the broadcaster"
					value={data.logos}
					setValue={(logos) => setData("logos", logos)}
					requiredValues={["Dark Logo", "Light Logo"]}
				/>
			</div>
			<div className="box">
				<h1>People</h1>
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
			</div>
			<div className="box">
				<h1>Text</h1>
				<InputHeader
					name="Text content"
					description="Markdown that will be displayed next to all of the data from above"
				>
					<MarkdownInput value={data.textContent} setValue={(content) => setData("textContent", content)} />
				</InputHeader>
			</div>
		</>
	);
}
