import MarkdownInput from "../Inputs/MarkdownInput";

export default function TextContent({ data, setValue }) {
	return (
		<div>
			<div className="box">
				<p>
					The main, manually written, content of the RoESC page. Describe the history in more than a table.
					You
					{"'"}ll see a live preview on the right of the text box
				</p>
			</div>
			<div className="box">
				<MarkdownInput value={data.textContent} setValue={(newText) => setValue("textContent", newText)} />
			</div>
		</div>
	);
}
