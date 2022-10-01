import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getParticipantData } from "../getData";

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
			<h1>{data.username}</h1>
			<hr></hr>
		</div>
	);
}

export default ParticipantPage;
