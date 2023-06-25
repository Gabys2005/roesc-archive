import SideTable from "./SideTable";
import Markdown from "../Markdown";
import EditionTable from "../EditionTable";
import Media from "../Media";
import { Link } from "react-router-dom";

export default function Content({ data }) {
	return (
		<div>
			<h1>{data.name}</h1>
			<hr />
			<SideTable data={data} style={{ float: "right" }} />
			<div>
				<Markdown value={data.textContent} />
			</div>
			<div style={{ clear: "both" }}></div>
			<h1>Editions</h1>
			<EditionTable roesc={data.link} />
			<hr />
			<Media media={data.media} />
			<hr style={{ clear: "both" }} />
			<Link to={`/editor/main/existing/${data.link}`} className="button is-primary is-outlined">
				Edit This Page
			</Link>
		</div>
	);
}
