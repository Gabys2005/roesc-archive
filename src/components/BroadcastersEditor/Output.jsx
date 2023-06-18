import Textarea from "../Inputs/Textarea";
import Button from "../Button";
import { download } from "../../modules/utils";

export default function Output({ data }) {
	return (
		<div className="box">
			<h1>Output</h1>
			<p>Send this file in the Broadcasters thread in the #roesc-archive channel</p>
			<Textarea disabled value={JSON.stringify(data, null, 4)} className="mb-2" />
			<Button onClick={() => download(data, "broadcasters")}>Download</Button>
		</div>
	);
}
