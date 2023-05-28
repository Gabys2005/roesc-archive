import { useEffect, useState } from "react";
import { getUsers } from "../../modules/fetchData";
import UsersEditor from "../../components/UsersEditor/Editor";

export default function Users() {
	const [users, setUsers] = useState();

	useEffect(() => {
		getUsers().then((users) => {
			setUsers(users);
		});
	}, []);

	if (!users) {
		return <h1>Loading...</h1>;
	}

	return <UsersEditor showOutput users={users} setUsers={setUsers} />;
}
