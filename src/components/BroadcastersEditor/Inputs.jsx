import TextInput from "../Inputs/TextInput";
import LinksInput from "../Inputs/LinksInput";
import UserInput from "../Inputs/UserInput";
import InputHeader from "../Inputs/Util/InputHeader";
import MarkdownInput from "../Inputs/MarkdownInput";
import DateInput from "../Inputs/DateInput";
import ImagesInput from "../Inputs/ImagesInput";
import BroadcastingTable from "../BroadcasterPage/BroadcastingTable";

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
				<p>
					If someone is missing, you can add them in the <span className="tag">Users Editor</span> section
				</p>
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
				<p>Custom components for this editor:</p>
				<ul>
					<li>
						<span className="tag">
							{"<"}BroadcastTable /{">"}
						</span>{" "}
						will generate a table with all shows livestreamed by this broadcaster. If omitted, the table
						will be generated at the very bottom of this broadcaster{"'"}s page
					</li>
				</ul>
				<InputHeader
					name="Text content"
					description="Markdown that will be displayed next to all of the data from above"
				>
					<MarkdownInput
						value={data.textContent}
						setValue={(content) => setData("textContent", content)}
						overrides={{ BroadcastTable: { component: BroadcastingTable, props: { example: true } } }}
					/>
				</InputHeader>
			</div>
		</>
	);
}
