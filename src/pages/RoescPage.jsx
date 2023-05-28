import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoescByLink } from "../modules/fetchData";
import Markdown from "../components/Markdown";
import SideTable from "../components/RoescPage/SideTable";

export default function RoescPage() {
	const { roesc } = useParams();

	const [data, setData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		setData(null);
		setError("");
		getRoescByLink(roesc)
			.then((roescData) => {
				setData(roescData);
			})
			.catch((err) => {
				setError(err);
			});
	}, [roesc]);

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
			<SideTable data={data} style={{ float: "right" }} />
			<div style={{ float: "left" }}>
				<Markdown value={data.textContent} />
			</div>
		</div>
	);
}
