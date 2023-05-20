import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Textarea from "./Textarea";
import remarkGfm from "remark-gfm";

export default function MarkdownInput({ value, setValue }) {
	return (
		<div className="columns">
			<div className="column">
				<Textarea style={{ height: "100%" }} value={value} setValue={setValue}></Textarea>
			</div>
			<div className="column">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
			</div>
		</div>
	);
}
