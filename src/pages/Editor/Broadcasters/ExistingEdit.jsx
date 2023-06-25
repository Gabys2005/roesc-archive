import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedBroadcasterById } from "../../../modules/broadcasters";
import Editor from "./Editor";

export default function ExistingEdit() {
	const { id } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		getDetailedBroadcasterById(id)
			.then((broadcaster) => setData(broadcaster))
			.catch((err) => setError(err));
	}, [id]);

	if (error) {
		return <h1>Error: {error}</h1>;
	}

	if (!data) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Editing {data.name}</h1>
			<hr />
			<Editor data={data} setData={setData} />
		</div>
	);
}
