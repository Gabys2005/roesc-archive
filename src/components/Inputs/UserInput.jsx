import InputHeader from "./Util/InputHeader";
import Button from "../Button";

export default function UserInput({ name, description, users, value, setValue, multiple }) {
	const usersOptions = users.map((userData) => (
		<option value={userData.id} key={userData.id}>
			{userData.current.username}{" "}
			{userData.previous.length > 0 ? `(${userData.previous.map((r) => r.username).join(", ")})` : ""}
		</option>
	));

	function editName(e, i) {
		setValue(value.map((r, i2) => (i2 === i ? e.target.value : r)));
	}

	if (multiple) {
		return (
			<div>
				<InputHeader name={name} description={description}>
					{value.map((userId, i) => (
						<div key={i} className="field has-addons">
							<div className="control select is-fullwidth">
								<select value={userId} onChange={(e) => editName(e, i)}>
									<option default hidden>
										Select
									</option>
									{usersOptions}
								</select>
							</div>
							<div className="control">
								<Button color="danger" onClick={() => setValue(value.filter((_, i2) => i !== i2))}>
									X
								</Button>
							</div>
						</div>
					))}
				</InputHeader>
				<Button onClick={() => setValue([...value, ""])}>Add Another</Button>
			</div>
		);
	}

	return (
		<InputHeader name={name} description={description}>
			{/* <div className="select is-fullwidth">
				<select onChange={selectionChanged} value={selectedUser}>
					<option hidden value="select">
						Select
					</option>
					{users.map((userData) => (
						<option value={userData.id} key={userData.id}>
							{userData.current.username}{" "}
							{userData.previous.length > 0
								? `(${userData.previous.map((r) => r.username).join(", ")})`
								: ""}
						</option>
					))}
				</select>
			</div> */}
		</InputHeader>
	);
}
