import Textarea from "./Textarea";
import Markdown from "../Markdown";

export default function MarkdownInput({ value, setValue, overrides }) {
	return (
		<div className="columns">
			<div className="column">
				<Textarea style={{ height: "100%" }} value={value} setValue={setValue}></Textarea>
			</div>
			<div className="column">
				<Markdown value={value} overrides={overrides} />
			</div>
		</div>
	);
}
