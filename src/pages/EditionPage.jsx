import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEdition } from "../modules/roesc";
import { getRoescByLink } from "../modules/fetchData";
import Markdown from "../components/Markdown";
import Table from "../components/Table";
import OutLink from "../components/OutLink";
import Media from "../components/Media";
import SideTable from "../components/EditionPage/SideTable";

export default function EditionPage() {
	const { roesc, edition } = useParams();
	const [data, setData] = useState();
	const [roescData, setRoescData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		getEdition(roesc, edition)
			.then((data) => setData(data))
			.catch((err) => setError(err));

		getRoescByLink(roesc)
			.then((roesc) => setRoescData(roesc))
			.catch(() => {});
	}, [roesc, edition]);

	if (!data || !roescData) return <h1>Loading...</h1>;
	if (error) return <h1>Error: {error}</h1>;

	return (
		<div>
			<h1>
				{roescData.name} {data.edition}
			</h1>
			<hr />
			<SideTable data={data} roescData={roescData} />
			<Markdown value={data.textContent} />

			<h1>Location</h1>
			<hr />
			<Markdown value={data.biddingText} />
			<Table columns={["City", "Venue", "Notes"]}>
				{data.bidding.map((biddingData, i) => (
					<tr key={i} className={biddingData.won ? "selected" : ""}>
						<td>{biddingData.city}</td>
						<td>
							<OutLink to={biddingData.link}>{biddingData.venue}</OutLink>
						</td>
						<td>{biddingData.notes}</td>
					</tr>
				))}
			</Table>

			<Media media={data.media} />
		</div>
	);
}
