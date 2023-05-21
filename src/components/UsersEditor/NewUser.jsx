import { useState } from "react";
import InputHeader from "../Inputs/Util/InputHeader";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import SingleUserInput from "./SingleUserInput";

export default function NewUser({ addUser }) {
	const [current, setCurrent] = useState({ username: "", id: "" });
	const [previous, setPrevious] = useState([]);

	return (
		<div>
			<InputHeader name="Current Information" description="Current Roblox username and ID">
				<SingleUserInput value={current} setValue={setCurrent} />
			</InputHeader>
			<InputHeader name="Previous Information" description="Previous Roblox usernames and IDs">
				{previous.map((data, i) => (
					<SingleUserInput
						key={i}
						value={data}
						setValue={(newData) => setPrevious(previous.map((r, i2) => (i == i2 ? newData : r)))}
						showDeleteButton
						remove={() => setPrevious(previous.filter((r, i2) => i2 !== i))}
					/>
				))}
				<Button onClick={() => setPrevious([...previous, { username: "", id: "" }])}>Add Another</Button>
			</InputHeader>
			<hr />
			<Button
				onClick={() => {
					addUser({ id: uuid(), current, previous });
					setCurrent({ username: "", id: "" });
					setPrevious([]);
				}}
			>
				Add User
			</Button>
		</div>
	);
}
