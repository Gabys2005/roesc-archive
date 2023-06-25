import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRoescByLink } from "../../../modules/fetchData";
import RoescEditor from "../../../components/RoescEditor/RoescEditor";

export default function ExistingEdit() {
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
