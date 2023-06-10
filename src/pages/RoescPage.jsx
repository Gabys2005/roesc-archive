import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoescByLink } from "../modules/fetchData";
import Content from "../components/RoescPage/Content";

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

	return <Content data={data} />;
}
