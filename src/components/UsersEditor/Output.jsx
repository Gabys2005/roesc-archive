import Textarea from "../Inputs/Textarea";
import Button from "../Button";
import { download } from "../../modules/utils";

export default function Output({ data }) {
	return (
		<div>
			<h2>Output</h2>
			<p>Send this file in the Users thread in the #roesc-archive channel</p>
			<Textarea disabled value={JSON.stringify(data, null, 4)} className="mb-2" />
			<Button onClick={() => download(data, "users")}>Download</Button>
		</div>
	);
}
