import { useParams } from "react-router-dom";
import RoescEditor from "../../../components/RoescEditor";
import { useEffect, useState } from "react";
import { getRoescByLink } from "../../../modules/fetchData";

export default function Roesc() {
	const { link } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		setData(null);
		setError("");

		getRoescByLink(link)
			.then((roescData) => {
				setData(roescData);
			})
			.catch((err) => {
				setError(err);
			});
	}, [link]);

	if (error !== "") {
		return <h1>Error: {error}</h1>;
	}

	if (!data) {
		return <h1>Loading...</h1>;
	}

	return <RoescEditor name={data.name} initialData={data} />;
}
