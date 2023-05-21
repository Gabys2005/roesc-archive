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
				<p>You can use markdown, mainly:</p>
				<ul>
					<li># for headers</li>
					<li>## for 2nd level headers (and so on)</li>
					<li>--- for a horizontal line</li>
					<li>*italics*, **bold**, ~~strikethrough~~</li>
				</ul>
			</div>
			<div className="box">
				<MarkdownInput value={data.textContent} setValue={(newText) => setValue("textContent", newText)} />
			</div>
		</div>
	);
}
