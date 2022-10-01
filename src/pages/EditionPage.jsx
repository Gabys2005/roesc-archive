import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageSection from "../components/PageSection";
import ParticipantTable from "../components/RoescPage/ParticipantTable";
import VenueBidding from "../components/RoescPage/VenueBidding";
import Row from "../components/Row";
import ShowTable from "../components/ShowTable";
import Table from "../components/Table";
import { getRoesc, getEdition } from "../getData";
import { getShowName, joinTable } from "../utils";
import SplitResultsTable from "../components/RoescPage/SplitResultsTable";
import NationalFinalsList from "../components/RoescPage/NationalFinalsList";
import PotsTable from "../components/RoescPage/PotsTable";
import Media from "../components/Media";

function DatesText(props) {
	const dates = props.object;
	const datesFinal = [];
	for (const showShortName in dates) {
		if (Object.hasOwnProperty.call(dates, showShortName)) {
			const date = dates[showShortName];
			datesFinal.push(`${getShowName(showShortName)}: ${date}`);
		}
	}
	return datesFinal.map((r, i) => (
		<React.Fragment key={i}>
			{r}
			<br></br>
		</React.Fragment>
	));
}

function EditionPage() {
	const { roesc, edition } = useParams();
	const [data, setData] = useState({});
	const [editionData, setEditionData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function run() {
			try {
				const data = await getRoesc(roesc);
				const editionData = await getEdition(roesc, edition);
				setData(data);
				setEditionData(editionData);
				setLoading(false);
			} catch (err) {
				setError(err);
			}
		}
		run();
	}, [roesc, edition]);

	if (error !== "") {
		return <h1>error 🦆</h1>;
	}

	if (loading) {
		return <h1>loading</h1>;
	}

	return (
		<>
			<h1>
				{data.longName} {editionData.number}
			</h1>
			<hr></hr>
			<h2>Basic information</h2>
			<Table>
				<tbody>
					<Row title="Host City">
						{editionData.city}, {editionData.country}
					</Row>
					<Row title="Slogan">{editionData.slogan}</Row>
					<Row title="Dates">
						<DatesText object={editionData.dates}></DatesText>
					</Row>
					<Row title="Reveals">
						<DatesText object={editionData.reveals}></DatesText>
					</Row>
					<Row title="Presenters">{joinTable(editionData.presenters)}</Row>
					<Row title="Number of entries">{editionData.entries.length}</Row>
				</tbody>
			</Table>

			<PageSection check={editionData.venue_bidding}>
				<h2>Venue Bidding</h2>
				<hr></hr>
				<VenueBidding venues={editionData.venue_bidding} venue={editionData.venue}></VenueBidding>
			</PageSection>

			<PageSection check={editionData.entries.length !== 0}>
				<h2>Participants</h2>
				<hr></hr>
				<ParticipantTable source={editionData.entries}></ParticipantTable>
			</PageSection>

			<PageSection check={editionData.pots}>
				<h2>Pots</h2>
				<hr></hr>
				<PotsTable source={editionData.pots}></PotsTable>
			</PageSection>

			<PageSection check={editionData.gf_pots}>
				<h2>GF Pots</h2>
				<hr></hr>
				<PotsTable source={editionData.gf_pots}></PotsTable>
			</PageSection>

			<h2>National Finals</h2>
			<hr></hr>
			<NationalFinalsList source={editionData}></NationalFinalsList>

			<h2>Shows</h2>
			<hr></hr>
			{editionData.shows.map((r) => (
				<PageSection key={r} check={true}>
					<h3>{getShowName(r)}</h3>
					<ShowTable show={r} source={editionData}></ShowTable>
				</PageSection>
			))}

			<h2>Split Results</h2>
			<hr></hr>
			{editionData.shows.map((r) => (
				<PageSection key={r} check={true}>
					<h3>{getShowName(r)}</h3>
					<SplitResultsTable show={r} source={editionData}></SplitResultsTable>
				</PageSection>
			))}

			<PageSection check={editionData.images}>
				<h2>Media</h2>
				<hr></hr>
				<div className="is-flex is-flex-wrap-wrap">
					{editionData.images?.map((r) => (
						<div className="column is-one-quarter">
							<a href={r} target="_blank" rel="noreferrer">
								<Media alt="" src={r}></Media>
							</a>
						</div>
					))}
				</div>
			</PageSection>
		</>
	);
}

export default EditionPage;
