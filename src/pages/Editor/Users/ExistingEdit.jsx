import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedUserById } from "../../../modules/users";
import Info from "../../../components/Editor/Info";
import Inputs from "../../../components/UsersEditor/Inputs";
import Output from "../../../components/UsersEditor/Output";

export default function ExistingEdit() {
	const { id } = useParams();
	const [data, setData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		getDetailedUserById(id)
			.then((user) => setData(user))
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
			<h1>Editing {data.current.username}</h1>
			<hr />
			<Info optional />
			<Inputs data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
			<Output data={data} downloadName={`changeduser-${data.current.username}`} />
		</div>
	);
}
