import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEdition } from "../modules/roesc";
import { getRoescByLink } from "../modules/fetchData";
import Markdown from "../components/Markdown";
import Table from "../components/Table";
import Media from "../components/Media";
import SideTable from "../components/EditionPage/SideTable";
import Country from "../components/Country";
import Twemoji from "react-twemoji";
import ShowContent from "../components/EditionPage/ShowContent";
import BiddingTable from "../components/EditionPage/BiddingTable";
import { containsComponent } from "../modules/utils";
import ParticipantsTable from "../components/EditionPage/ParticipantsTable";

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
			<h1>{data.fullName}</h1>
			<hr />
			<SideTable data={data} roescData={roescData} />
			<Markdown value={data.textContent} />

			{(data.biddingText || data.bidding.length > 0) && (
				<>
					<h1>Location</h1>
					<hr />
					<Markdown
						value={data.biddingText}
						overrides={{
							BiddingTable: { component: BiddingTable, props: { data: data.bidding } },
						}}
					/>
					{data.bidding.length > 0 && !containsComponent(data.biddingText, "BiddingTable") && (
						<BiddingTable data={data.bidding} />
					)}
				</>
			)}

			{(data.sfDrawText || data.sfDraw.length > 0) && (
				<>
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
				</>
			)}

			<ParticipantsTable entries={data.entries} />

			<h1>Shows</h1>
			<hr />

			{data.shows.map((show) => (
				<ShowContent show={show} key={show.id} data={data} />
			))}

			<div style={{ marginTop: "2rem" }}></div>

			{data.incidents != "" && (
				<>
					<h1>Incidents</h1>
					<hr />
					<Markdown value={data.incidents} />
					<div style={{ marginTop: "2rem" }}></div>
				</>
			)}

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
