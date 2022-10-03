import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageSection from "../components/PageSection";
import Table from "../components/Table";
import Row from "../components/Row";
import SongsTable from "../components/NationalFinalPage/SongsTable";
import Media from "../components/Media";
import Flag from "../components/Flag";
import { joinTable, objectToArray } from "../utils";

function NationalFinalPage() {
	const [loading, setLoading] = useState(true);
	const [nfData, setData] = useState({});
	const [roescData, setRoescData] = useState({});
	const [editionData, setEditionData] = useState({});
	const { roesc, edition, nf } = useParams();

	useEffect(() => {
		import(`../data/generated/${roesc}.json`).then((roescData) => {
			const editionData = roescData.editions.find((r) => r.link === edition);
			const nfData = editionData.nfs.find((r) => r.link === nf);
			setData(nfData);
			setRoescData(roescData);
			setEditionData(editionData);
			setLoading(false);
		});
	}, [roesc, edition, nf]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>
				{nfData.name} - {roescData.shortName} {editionData.number}
			</h1>
			<hr></hr>
			<h2>Basic information</h2>
			<Table>
				<tbody>
					<Row title="Country">
						<Flag country={nfData.country}></Flag>
						{nfData.country}
					</Row>
					<Row title="Type">{nfData.type}</Row>
					<Row title="Voting method">{nfData.voting_method}</Row>
					<Row title="Hosts">{joinTable(nfData.hosts)}</Row>
				</tbody>
			</Table>
			<h2>Links</h2>
			<hr></hr>
			<ul>
				{objectToArray(nfData.links).map((r) => (
					<li>
						{r[0]}: <a href={r[1]}>{r[1]}</a>
					</li>
				))}
			</ul>
			<PageSection check={nfData.spotify}>
				<h2>Spotify Playlist</h2>
				<iframe
					title="spotify embed"
					style={{ borderRadius: "12px" }}
					src={nfData.spotify}
					width="100%"
					height="380"
					frameBorder="0"
					allowFullScreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</PageSection>

			<h2>Songs</h2>
			<hr></hr>
			<SongsTable source={nfData.entries}></SongsTable>

			<PageSection check={nfData.images}>
				<h2>Media</h2>
				<hr></hr>
				<div className="columns is-multiline">
					{nfData.images?.map((r) => (
						<div key={r} className="column is-one-quarter">
							<a href={r} target="_blank" rel="noreferrer">
								<Media alt="" src={r}></Media>
							</a>
						</div>
					))}
				</div>
			</PageSection>
		</div>
	);
}

export default NationalFinalPage;
