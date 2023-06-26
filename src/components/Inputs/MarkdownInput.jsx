import Textarea from "./Textarea";
import Markdown from "../Markdown";
import { useEffect } from "react";

export default function MarkdownInput({ value, setValue, overrides }) {
	useEffect(() => {
		if (value === undefined || value === null) {
			setValue("");
		}
	}, [value, setValue]);

	if (value === undefined || value === null) {
		return <></>;
	}

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
