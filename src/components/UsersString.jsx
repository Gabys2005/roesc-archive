import { useState } from "react";
import { getUserById } from "../modules/fetchData";
import { useEffect } from "react";

export default function UsersString({ userids }) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const users = userids.map((u) => getUserById(u));
		Promise.all(users).then((actualUsers) => {
			setUsers(actualUsers.map((u) => u.current.username));
		});
	}, [userids]);

	return users.join(", ");
}
