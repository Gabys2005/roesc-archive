import { useState } from "react";
import UserList from "../../../components/Inputs/UserList";
import { useEffect } from "react";
import { getUsersDetailed } from "../../../modules/users";
import { Link } from "react-router-dom";

export default function Existing() {
	const [selected, setSelected] = useState("");
	const [users, setUsers] = useState();

	useEffect(() => {
		getUsersDetailed().then((users) => setUsers(users));
	}, []);

	if (!users) {
		return (
			<div>
				<h1>Loading</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Edit An Existing User</h1>
			<hr />
			<h2>Choose the user that you want to edit</h2>
			<UserList value={selected} setValue={setSelected} users={users} />
			<br />
			<br />
			<Link to={selected} className="button is-primary">
				Continue
			</Link>
		</div>
	);
}
