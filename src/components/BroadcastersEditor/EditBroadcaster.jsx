import { useState } from "react";
import InputHeader from "../Inputs/Util/InputHeader";
import Inputs from "./Inputs";

export default function EditBroadcaster({ broadcasters, setBroadcasters, users }) {
	const [selected, setSelected] = useState(broadcasters[0]?.id);

	const broadcastersOptions = broadcasters.map((broadcasterData) => (
		<option value={broadcasterData.id} key={broadcasterData.id}>
			{broadcasterData.name} ({broadcasterData.shortName})
		</option>
	));

	return (
		<div>
			<div className="box">
				<InputHeader name="Choose a broadcaster to edit">
					<div className="select is-fullwidth">
						<select value={selected} onChange={(e) => setSelected(e.target.value)}>
							{broadcastersOptions}
						</select>
					</div>
				</InputHeader>
			</div>

			<Inputs
				data={broadcasters.find((user) => user.id === selected)}
				setData={(field, value) =>
					setBroadcasters(
						broadcasters.map((user) => (user.id === selected ? { ...user, [field]: value } : user))
					)
				}
				users={users}
			/>
		</div>
	);
}
