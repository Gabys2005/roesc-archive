import Textarea from "../Inputs/Textarea";
import Button from "../Button";
import { download } from "../../modules/utils";

export default function Output({ users, broadcaster, downloadName }) {
	return (
		<>
			<div className="box">
				<h1>Output</h1>
				<p>
					Send these file in the <span className="tag">Users / Broadcasters</span> thread in the
					#roesc-archive channel
				</p>
			</div>

			<div className="columns">
				<div className="column">
					<div className="box">
						<Textarea disabled value={JSON.stringify(broadcaster, null, 4)} className="mb-2" />
						<Button onClick={() => download(broadcaster, downloadName || "broadcasters")}>Download</Button>
					</div>
				</div>

				<div className="column">
					<div className="box">
						<Textarea disabled value={JSON.stringify(users, null, 4)} className="mb-2" />
						<Button onClick={() => download(users, "users")}>Download</Button>
					</div>
				</div>
			</div>
		</>
	);
}
