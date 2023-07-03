import { shows } from "../../modules/showList";
import Markdown from "../Markdown";
import DetailedVotingTable from "./DetailedVotingTable";
import MaxPointsTable from "./MaxPointsTable";
import ResultsTable from "./ResultsTable";
import SplitResultsTable from "./SplitResultsTable";

export default function ShowContent({ data, show }) {
	const shouldShow = show.textContent || data.entries.find((e) => e.shows.find((s) => s.id === show.id));

	if (!shouldShow) {
		return <></>;
	}

	return (
		<div className="mb-5">
			<h2>{shows[show.id]}</h2>
			<Markdown value={show.textContent} />
			<ResultsTable data={data} show={show.id} />
			<div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-around", flexWrap: "wrap" }}>
				<SplitResultsTable data={data} show={show.id} />
				<MaxPointsTable data={data} show={show} />
			</div>
			<DetailedVotingTable data={data} show={show} />
		</div>
	);
}
