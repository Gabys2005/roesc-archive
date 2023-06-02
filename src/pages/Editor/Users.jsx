import { useEffect, useState } from "react";
import { getUsersDetailed } from "../../modules/users";
import UsersEditor from "../../components/UsersEditor/Editor";

export default function Users() {
	const [users, setUsers] = useState();

	useEffect(() => {
		getUsersDetailed().then((users) => {
			setUsers(users);
		});
	}, []);

	if (!users) {
		return <h1>Loading...</h1>;
	}

	return <UsersEditor showOutput users={users} setUsers={setUsers} />;
}
