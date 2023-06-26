import { shows } from "../../modules/showList";
import Markdown from "../Markdown";
import ResultsTable from "./ResultsTable";

export default function ShowContent({ data, show }) {
	return (
		<div>
			<h2>{shows[show.id]}</h2>
			<Markdown value={show.textContent} />
			<ResultsTable data={data} show={show.id} />
		</div>
	);
}
