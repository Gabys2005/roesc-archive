import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedUserByUsername } from "../modules/users";
import SideTable from "../components/UserPage/SideTable";
import Markdown from "../components/Markdown";

export default function UserPage() {
	const { username } = useParams();
	const [user, setUser] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		setUser(null);
		setError("");

		getDetailedUserByUsername(username)
			.then((user) => setUser(user))
			.catch((err) => setError(err));
	}, [username]);

	if (error) {
		return <h1>Error: {error}</h1>;
	}

	if (!user) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>{user.current.username}</h1>
			<hr />
			<SideTable data={user} style={{ float: "right" }} />
			<div>
				<Markdown value={user.textContent} />
			</div>
		</div>
	);
}
