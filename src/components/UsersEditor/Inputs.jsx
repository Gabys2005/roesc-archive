import InputHeader from "../Inputs/Util/InputHeader";
import SingleUserInput from "./SingleUserInput";
import Button from "../Button";
import MarkdownInput from "../Inputs/MarkdownInput";
import MultiTextInput from "../Inputs/MultiTextInput";

export default function Inputs({ data, setData }) {
	return (
		<div>
			<InputHeader name="Current Account" description="Current Roblox username and ID">
				<SingleUserInput value={data.current} setValue={(newVal) => setData("current", newVal)} />
			</InputHeader>
			<InputHeader name="Previous Accounts" description="Previous Roblox usernames and IDs">
				{data.previous.map((data, i) => (
					<SingleUserInput
						key={i}
						value={data}
						setValue={(newData) =>
							setData(
								"previous",
								data.previous.map((r, i2) => (i == i2 ? newData : r))
							)
						}
						showDeleteButton
						remove={() =>
							setData(
								"previous",
								data.previous.filter((r, i2) => i2 !== i)
							)
						}
					/>
				))}
				<Button onClick={() => setData("previous", [...data.previous, { username: "", id: "" }])}>
					Add Another
				</Button>
			</InputHeader>
			<MultiTextInput
				name="Aliases"
				description="Previous usernames that weren't separate accounts"
				value={data.aliases}
				setValue={(data) => setData("aliases", data)}
			/>

			<hr />

			<InputHeader
				name="Written content"
				description="This content will be displayed next to the info table on that user's page"
			>
				<MarkdownInput value={data.textContent} setValue={(newContent) => setData("textContent", newContent)} />
			</InputHeader>
		</div>
	);
}
