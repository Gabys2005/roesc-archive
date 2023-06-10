import { useEffect, useState } from "react";
import { getBroadcasters } from "../../modules/fetchData";
import BroadcastersEditor from "../../components/BroadcastersEditor/Editor";
import { getUsers } from "../../modules/users";

export default function Broadcasters() {
	const [broadcasters, setBroadcasters] = useState();
	const [users, setUsers] = useState();

	useEffect(() => {
		getBroadcasters().then((broadcasters) => {
			setBroadcasters(broadcasters);
		});
		getUsers().then((users) => {
			setUsers(users);
		});
	}, []);

	if (!broadcasters || !users) {
		return <h1>Loading...</h1>;
	}

	return <BroadcastersEditor showOutput broadcasters={broadcasters} setBroadcasters={broadcasters} users={users} />;
}