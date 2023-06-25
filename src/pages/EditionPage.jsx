import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEdition } from "../modules/roesc";
import { getRoescByLink } from "../modules/fetchData";
import Markdown from "../components/Markdown";
import Table from "../components/Table";
import OutLink from "../components/OutLink";
import Media from "../components/Media";
import SideTable from "../components/EditionPage/SideTable";
import Country from "../components/Country";
import Twemoji from "react-twemoji";

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

			<h1>Semi-Final Allocation Draw</h1>
			<hr />
			<Markdown value={data.sfDrawText} />
			<Twemoji>
				<Table columns={data.sfDraw.map((_, i) => `Pot ${i + 1}`)}>
					<tr>
						{data.sfDraw.map((countries, i) => (
							<td key={i}>
								<ul style={{ marginTop: 0 }}>
									{countries.map((country, i) => (
										<li key={i}>
											<Country id={country} />
										</li>
									))}
								</ul>
							</td>
						))}
					</tr>
				</Table>
			</Twemoji>

			<div style={{ marginTop: "2rem" }}></div>

			<Media media={data.media} />

			<hr style={{ clear: "both" }} />
			<Link
				to={`/editor/edition/existing/${roescData.link}/${data.link}`}
				className="button is-primary is-outlined"
			>
				Edit This Page
			</Link>
		</div>
	);
}
