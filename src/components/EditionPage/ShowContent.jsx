import { shows } from "../../modules/showList";
import Markdown from "../Markdown";
import MaxPointsTable from "./MaxPointsTable";
import ResultsTable from "./ResultsTable";
import SplitResultsTable from "./SplitResultsTable";

export default function ShowContent({ data, show }) {
	return (
		<div className="mb-5">
			<h2>{shows[show.id]}</h2>
			<Markdown value={show.textContent} />
			<ResultsTable data={data} show={show.id} />
			<div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-around", flexWrap: "wrap" }}>
				<SplitResultsTable data={data} show={show.id} />
				<MaxPointsTable data={data} show={show} />
			</div>
		</div>
	);
}
