import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NationalFinalsList from "../components/RoescPage/NationalFinalsList";

function NationalFinalsPage() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const { roesc, edition, nf } = useParams();

	useEffect(() => {
		import(`../data/generated/${roesc}.json`).then((roescData) => {
			const editionData = roescData.editions.find((r) => r.link === edition);
			setData(editionData.nfs);
			setLoading(false);
		});
	}, [roesc, edition, nf]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>National Finals</h1>
			<hr></hr>
			<NationalFinalsList source={data} roesc={roesc} edition={edition}></NationalFinalsList>
		</div>
	);
}

export default NationalFinalsPage;
