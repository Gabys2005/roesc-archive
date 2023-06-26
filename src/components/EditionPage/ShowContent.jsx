import { shows } from "../../modules/showList";
import ResultsTable from "./ResultsTable";

export default function ShowContent({ data, show }) {
	return (
		<div>
			<h2>{shows[show.id]}</h2>
			<p>text text text</p>
			<ResultsTable data={data} show={show.id} />
		</div>
	);
}
