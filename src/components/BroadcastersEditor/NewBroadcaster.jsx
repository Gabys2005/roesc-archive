import { useState } from "react";
import LinksInput from "../Inputs/LinksInput";
import TextInput from "../Inputs/TextInput";
import MarkdownInput from "../Inputs/MarkdownInput";
import InputHeader from "../Inputs/Util/InputHeader";
import UserInput from "../Inputs/UserInput";
import Button from "../Button";
import { v4 as uuid } from "uuid";

export default function NewBroadcaster({ users, addBroadcaster }) {
	const [name, setName] = useState("");
	const [shortName, setShortName] = useState("");
	const [link, setLink] = useState("");
	const [links, setLinks] = useState([]);
	const [logos, setLogos] = useState([]);
	const [textContent, setTextContent] = useState("");
	const [owners, setOwners] = useState([]);
	const [staff, setStaff] = useState([]);

	return (
		<div>
			<TextInput
				name="Name"
				description="Full name of this broadcaster, for example: Giorgio World Media"
				value={name}
				setValue={setName}
			/>
			<TextInput
				name="Short Name"
				description="Shortened name of this broadcaster, for example: GWM"
				value={shortName}
				setValue={setShortName}
			/>
			<TextInput
				name="Link"
				description="Link for this broadcaster, generally short name but lowercase, for example: gwm"
				value={link}
				setValue={setLink}
			/>
			<hr />
			<LinksInput
				name="Links"
				description="YouTube channel, Twitch channel, Roblox group, etc."
				value={links}
				setValue={setLinks}
			/>
			<hr />
			<LinksInput
				name="Logos"
				description="Logos of the broadcaster"
				value={logos}
				setValue={setLogos}
				namePlaceholder="Description"
			/>
			<hr />
			<UserInput
				users={users}
				multiple
				name="Owners"
				description="Owners of this broadcaster"
				value={owners}
				setValue={setOwners}
			/>
			<hr />
			<UserInput
				users={users}
				multiple
				name="Staff"
				description="People working for this broadcaster"
				value={staff}
				setValue={setStaff}
			/>
			<hr />
			<InputHeader
				name="Text content"
				description="Markdown that will be displayed next to all of the data from above"
			/>
			<MarkdownInput value={textContent} setValue={setTextContent} />

			<Button
				onClick={() => {
					addBroadcaster({
						id: uuid(),
						name,
						shortName,
						link,
						links,
						logos,
						owners,
						staff,
						textContent,
					});
					setName("");
					setShortName("");
					setLink("");
					setLinks([]);
					setLogos([]);
					setOwners([]);
					setStaff([]);
					setTextContent("");
				}}
			>
				Add Broadcaster
			</Button>
		</div>
	);
}
