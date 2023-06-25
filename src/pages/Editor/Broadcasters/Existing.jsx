import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getBroadcastersDetailed } from "../../../modules/broadcasters";
import BroadcasterList from "../../../components/BroadcastersEditor/BroadcasterList";

export default function Existing() {
	const [selected, setSelected] = useState("");
	const [broadcasters, setBroadcasters] = useState();

	useEffect(() => {
		getBroadcastersDetailed().then((broadcasters) => setBroadcasters(broadcasters));
	}, []);

	if (!broadcasters) {
		return (
			<div>
				<h1>Loading</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Edit An Existing Broadcaster</h1>
			<hr />
			<h2>Choose the broadcaster that you want to edit</h2>
			<BroadcasterList value={selected} setSelected={setSelected} broadcasters={broadcasters} />
			<br />
			<br />
			<Link to={selected} className="button is-primary">
				Continue
			</Link>
		</div>
	);
}
