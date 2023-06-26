import Textarea from "../Inputs/Textarea";
import Button from "../Button";
import { download } from "../../modules/utils";

export default function Output({ data, users, broadcasters }) {
	return (
		<div>
			<div className="box">
				<p>
					Download all of the files below and send them as attachments in the thread of this RoESC in the
					#roesc-archive channel
				</p>
			</div>
			<div className="columns">
				<div className="column">
					<div className="box">
						<h2>Edition File</h2>
						<Textarea disabled value={JSON.stringify(data, null, 4)} className="mb-2" />
						<Button onClick={() => download(data, data.link)}>Download</Button>
					</div>
				</div>
				<div className="column">
					<div className="box">
						<h2>Users File</h2>
						<Textarea disabled value={JSON.stringify(users, null, 4)} className="mb-2" />
						<Button onClick={() => download(users, "users")}>Download</Button>
					</div>
				</div>
				<div className="column">
					<div className="box">
						<h2>Broadcasters File</h2>
						<Textarea disabled value={JSON.stringify(broadcasters, null, 4)} className="mb-2" />
						<Button onClick={() => download(broadcasters, "broadcasters")}>Download</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
