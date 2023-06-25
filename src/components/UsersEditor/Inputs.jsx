import InputHeader from "../Inputs/Util/InputHeader";
import SingleUserInput from "./SingleUserInput";
import Button from "../Button";
import MarkdownInput from "../Inputs/MarkdownInput";
import MultiTextInput from "../Inputs/MultiTextInput";
import DateInput from "../Inputs/DateInput";

export default function Inputs({ data, setData }) {
	return (
		<>
			<div className="box">
				<h2>Names</h2>
				<InputHeader name="Current Account" description="Current Roblox username and ID">
					<SingleUserInput value={data.current} setValue={(newVal) => setData("current", newVal)} />
				</InputHeader>
				<hr />
				<InputHeader name="Previous Accounts" description="Previous Roblox usernames and IDs">
					{data.previous.map((userData, i) => (
						<SingleUserInput
							key={i}
							value={userData}
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
				<hr />
				<MultiTextInput
					name="Aliases"
					description="Previous usernames that weren't separate accounts"
					value={data.aliases}
					setValue={(data) => setData("aliases", data)}
				/>
			</div>

			<div className="box">
				<h2>Written content</h2>
				<InputHeader
					name="Written content"
					description="This content will be displayed next to the info table on that user's page"
				>
					<MarkdownInput
						value={data.textContent}
						setValue={(newContent) => setData("textContent", newContent)}
					/>
				</InputHeader>
			</div>

			<div className="box">
				<h2>Dates</h2>
				<DateInput
					name="Join date"
					description="When this user joined the RoESC community"
					value={data.joined}
					setValue={(date) => setData("joined", date)}
				/>
				<DateInput
					name="Leave date"
					description="When this user left/quit the RoESC community. Leave empty if they're still active in the community"
					value={data.left}
					setValue={(date) => setData("left", date)}
				/>
			</div>
		</>
	);
}
