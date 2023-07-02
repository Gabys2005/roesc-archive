import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getEdition } from "../../../modules/roesc";
import Editor from "../../../components/EditionEditor/Editor";

export default function ExistingEdit() {
	const { roesc, link } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		setData(null);
		setError("");

		getEdition(roesc, link)
			.then((roescData) => {
				setData(roescData);
			})
			.catch((err) => {
				setError(err);
			});
	}, [roesc, link]);

	if (error !== "") {
		return <h1>Error: {error}</h1>;
	}

	if (!data) {
		return <h1>Loading...</h1>;
	}

	return <Editor name={data.fullName} initialData={data} />;
}
