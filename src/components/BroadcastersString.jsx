import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBroadcasterById } from "../modules/broadcasters";

export default function BroadcastersString({ ids }) {
	const [broadcasters, setBroadcasters] = useState([]);

	useEffect(() => {
		const broadcasters = ids.filter((b) => !!b).map((b) => getBroadcasterById(b));
		Promise.all(broadcasters).then((actualUsers) => {
			setBroadcasters(
				actualUsers.map((b, i) => (
					<Link key={b.id} to={`/broadcasters/${b.link}`}>
						{b.name}
						{i === actualUsers.length - 1 ? "" : ", "}
					</Link>
				))
			);
		});
	}, [ids]);

	return broadcasters;
}
