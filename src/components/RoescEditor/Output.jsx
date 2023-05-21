import Textarea from "../Inputs/Textarea";
import Button from "../Button";
import { saveAs } from "file-saver";

export default function Output({ data, users }) {
	function download(what, name) {
		const blob = new Blob([JSON.stringify(what, null, 4)], {
			type: "application/json",
		});
		saveAs(blob, `${name}.json`);
	}

	return (
		<div>
			<div className="box">
				<p>
					Download both of the files below and send them as attachments in the thread of this RoESC in the
					#roesc-archive channel
				</p>
			</div>
			<div className="columns">
				<div className="column">
					<div className="box">
						<h2>Main File</h2>
						<Textarea disabled value={JSON.stringify(data, null, 4)} className="mb-2" />
						<Button onClick={() => download(data, "main")}>Download</Button>
					</div>
				</div>
				<div className="column">
					<div className="box">
						<h2>Users File</h2>
						<Textarea disabled value={JSON.stringify(users, null, 4)} className="mb-2" />
						<Button onClick={() => download(users, "users")}>Download</Button>
					</div>
				</div>
			</div>
		</div>
	);
}