import { useState } from "react";
import InputHeader from "../Inputs/Util/InputHeader";
import Inputs from "./Inputs";

export default function EditUser({ users, setUsers }) {
	const [selected, setSelected] = useState(users[0]?.id);

	const usersOptions = users.map((userData) => (
		<option value={userData.id} key={userData.id}>
			{userData.current.username}{" "}
			{userData.previous.length > 0 ? `(${userData.previous.map((r) => r.username).join(", ")})` : ""}
		</option>
	));

	return (
		<div>
			<InputHeader name="Choose a user to edit">
				<div className="select is-fullwidth">
					<select value={selected} onChange={(e) => setSelected(e.target.value)}>
						{usersOptions}
					</select>
				</div>
			</InputHeader>

			<hr />

			<Inputs
				data={users.find((user) => user.id === selected)}
				setData={(field, value) =>
					setUsers(users.map((user) => (user.id === selected ? { ...user, [field]: value } : user)))
				}
			/>
		</div>
	);
}
