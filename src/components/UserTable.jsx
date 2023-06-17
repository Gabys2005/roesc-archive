import { useEffect, useState } from "react";
import { getUsers } from "../modules/users";
import Table from "./Table";
import { Link } from "react-router-dom";

export default function UserTable() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then((users) => setUsers(users));
	}, []);

	if (users.length === 0) {
		return <p>Loading...</p>;
	}

	return (
		<Table columns={["#", "Username", "Also Known As", "Previous Usernames"]} smallFirst>
			{users.map((user, i) => (
				<tr key={user.id}>
					<th>{i + 1}</th>
					<td>
						<Link to={`/users/${user.name}`}>{user.name}</Link>
					</td>
					<td>{user.aliases.join(", ")}</td>
					<td>{user.previousNames.join(", ")}</td>
				</tr>
			))}
		</Table>
	);
}
