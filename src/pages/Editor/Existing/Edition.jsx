import { useParams } from "react-router-dom";
import EditionEditor from "../../../components/EditionEditor/Editor";
import { useEffect, useState } from "react";
import { getEdition } from "../../../modules/roesc";

export default function Roesc() {
	const { roesc, edition } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		setData(null);
		setError("");

		getEdition(roesc, edition)
			.then((roescData) => setData(roescData))
			.catch((err) => setError(err));
	}, [roesc, edition]);

	if (error !== "") {
		return <h1>Error: {error}</h1>;
	}

	if (!data) {
		return <h1>Loading...</h1>;
	}

	return <EditionEditor name={data.edition} initialData={data} />;
}
