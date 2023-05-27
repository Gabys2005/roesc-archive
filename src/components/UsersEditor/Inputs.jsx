import InputHeader from "../Inputs/Util/InputHeader";
import SingleUserInput from "./SingleUserInput";
import Button from "../Button";
import MarkdownInput from "../Inputs/MarkdownInput";

export default function Inputs({ data, setData }) {
	return (
		<div>
			<InputHeader name="Current Information" description="Current Roblox username and ID">
				<SingleUserInput value={data.current} setValue={(newVal) => setData("current", newVal)} />
			</InputHeader>
			<InputHeader name="Previous Information" description="Previous Roblox usernames and IDs">
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
			<InputHeader name="Written content">
				<MarkdownInput value={data.textContent} setValue={(newContent) => setData("textContent", newContent)} />
			</InputHeader>
		</div>
	);
}
