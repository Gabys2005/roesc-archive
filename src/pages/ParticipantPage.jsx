import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import { getParticipantData } from "../getData";
import { getShowName } from "../utils";

function ResultsText(props) {
	const results = [];
	for (const showCode in props.data) {
		if (Object.hasOwnProperty.call(props.data, showCode)) {
			const showData = props.data[showCode];
			results.push({
				name: getShowName(showCode),
				place: showData.place,
				points: showData.points,
			});
		}
	}
	const strings = results.map((r) => `${r.name}: ${r.place}th place, ${r.points} points`);
	return (
		<>
			{strings.map((r) => (
				<>
					{r}
					<br></br>
				</>
			))}
		</>
	);
}

function ParticipantPage() {
	const { participant } = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});

	useEffect(() => {
		async function load() {
			const pData = await getParticipantData(participant);
			console.log(pData);
			setData(pData);
			setLoading(false);
		}
		load();
	}, [participant]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>{participant}</h1>
			<hr></hr>
			<h2>Participations</h2>
			<Table>
				<TableHeader>
					<th>roesc</th>
					<th>country</th>
					<th>song</th>
					<th>artist</th>
					<th>results</th>
				</TableHeader>
				<tbody>
					{data.map((r, i) => (
						<tr key={i}>
							<td>
								<Link to={`/roescs/${r.fullData.link}/editions/${r.editionData.link}`}>
									{r.fullData.shortName} {r.editionData.number}
								</Link>
							</td>
							<td>{r.participantData.country}</td>
							<td>{r.participantData.song}</td>
							<td>{r.participantData.artist}</td>
							<td>
								<ResultsText data={r.participantData.shows}></ResultsText>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default ParticipantPage;
