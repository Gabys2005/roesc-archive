export default function UserList({ value, setValue, users, disabled }) {
	return (
		<div className="control select">
			<select value={value} onChange={(e) => setValue(e.target.value)} disabled={disabled}>
				<option default hidden>
					Select user
				</option>
				<option value="unknown">Unknown</option>
				{users
					.sort((a, b) => a.current.username.localeCompare(b.current.username))
					.map((userData) => (
						<option value={userData.id} key={userData.id}>
							{userData.current.username}{" "}
							{userData.previous.length > 0
								? `(${userData.previous.map((r) => r.username).join(", ")})`
								: ""}
						</option>
					))}
			</select>
		</div>
	);
}
