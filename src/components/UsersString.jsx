import { useState } from "react";
import { getUserById } from "../modules/fetchData";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function UsersString({ userids }) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const users = userids.map((u) => getUserById(u));
		Promise.all(users).then((actualUsers) => {
			setUsers(
				actualUsers.map((u, i) => (
					<Link key={u.id} to={`/users/${u.current.username}`}>
						{u.current.username}
						{i === actualUsers.length - 1 ? "" : ", "}
					</Link>
				))
			);
		});
	}, [userids]);

	return users;
}
