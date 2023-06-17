import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBroadcasterByLink } from "../modules/broadcasters";
import Markdown from "../components/Markdown";
import SideTable from "../components/BroadcasterPage/SideTable";
import MediaSection from "../components/MediaSection";

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
				<Markdown value={data.textContent} />
			</div>
			<MediaSection images={data.logos} name="logos" />
		</div>
	);
}
