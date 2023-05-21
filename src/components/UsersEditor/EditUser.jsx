import { useState, useEffect } from "react";
import InputHeader from "../Inputs/Util/InputHeader";
import SingleUserInput from "./SingleUserInput";
import Button from "../Button";

export default function EditUser({ users, setUsers }) {
	const [selected, setSelected] = useState(users[0]?.id);
	const [current, setCurrent] = useState({ username: "", id: "" });
	const [previous, setPrevious] = useState([]);

	const usersOptions = users.map((userData) => (
		<option value={userData.id} key={userData.id}>
			{userData.current.username}{" "}
			{userData.previous.length > 0 ? `(${userData.previous.map((r) => r.username).join(", ")})` : ""}
		</option>
	));

	useEffect(() => {
		const currentUser = users.find((r) => r.id === selected);
		if (currentUser) {
			setCurrent(currentUser.current);
			setPrevious(currentUser.previous);
		}
	}, [users, selected]);

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

			<InputHeader name="Current Information" description="Current Roblox username and ID">
				<SingleUserInput
					value={current}
					setValue={(newData) =>
						setUsers(users.map((user) => (user.id === selected ? { ...user, current: newData } : user)))
					}
				/>
			</InputHeader>
			<InputHeader name="Previous Information" description="Previous Roblox usernames and IDs">
				{previous.map((data, i) => (
					<SingleUserInput
						key={i}
						value={data}
						setValue={(newData) =>
							setUsers(
								users.map((user) =>
									user.id === selected
										? {
												...user,
												previous: user.previous.map((prev, i2) => (i2 === i ? newData : prev)),
										  }
										: user
								)
							)
						}
						// setValue={(newData) => setPrevious(previous.map((r, i2) => (i == i2 ? newData : r)))}
						showDeleteButton
						remove={() => setPrevious(previous.filter((r, i2) => i2 !== i))}
					/>
				))}
				<Button
					onClick={() =>
						setUsers(
							users.map((user) =>
								user.id === selected
									? { ...user, previous: [...user.previous, { username: "", id: "" }] }
									: user
							)
						)
					}
				>
					Add Another
				</Button>
			</InputHeader>
		</div>
	);
}
