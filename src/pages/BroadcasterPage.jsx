import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBroadcasterByLink } from "../modules/broadcasters";
import Markdown from "../components/Markdown";
import SideTable from "../components/BroadcasterPage/SideTable";
import MediaSection from "../components/MediaSection";
import BroadcastingTable from "../components/BroadcasterPage/BroadcastingTable";

export default function BroadcasterPage() {
	const { link } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		getBroadcasterByLink(link)
			.then((broadcaster) => setData(broadcaster))
			.catch((err) => setError(err));
	}, [link]);

	if (error) {
		return <h1>Error: {error}</h1>;
	}

	if (!data) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>{data.name}</h1>
			<hr />
			<SideTable data={data} />
			<div>
				<Markdown
					value={data.textContent}
					overrides={{
						BroadcastTable: { component: BroadcastingTable, props: { data: data.broadcastedShows } },
					}}
				/>
			</div>
			{data.textContent.search(/<BroadcastTable(?:(?: )*|)\/>/g) === -1 && (
				<div>
					<h2>Broadcasted Shows</h2>
					<BroadcastingTable data={data.broadcastedShows} />
				</div>
			)}
			<MediaSection images={data.logos} name="logos" />
			<hr style={{ clear: "both" }} />
			<Link to={`/editor/broadcasters/existing/${data.id}`} className="button is-primary is-outlined">
				Edit This Page
			</Link>
		</div>
	);
}
