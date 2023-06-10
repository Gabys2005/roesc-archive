import { useEffect, useState } from "react";
import { getBroadcasters } from "../modules/broadcasters";
import { Link } from "react-router-dom";

export default function BroadcasterList() {
	const [broadcasters, setBroadcasters] = useState([]);

	useEffect(() => {
		getBroadcasters().then((broadcasters) => setBroadcasters(broadcasters));
	}, []);

	return (
		<ul>
			{broadcasters.map((broadcaster) => (
				<li key={broadcaster.id}>
					<Link to={`/broadcasters/${broadcaster.link}`}>
						{broadcaster.name} ({broadcaster.shortName})
					</Link>
				</li>
			))}
		</ul>
	);
}
