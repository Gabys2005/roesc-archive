import Button from "../Button";

export default function SingleUserInput({ value, setValue, showDeleteButton, remove }) {
	return (
		<div className="field has-addons">
			<div className="control is-expanded">
				<input
					className="input"
					type="text"
					value={value.username}
					onChange={(e) => setValue({ ...value, username: e.target.value })}
					placeholder="Username"
				/>
			</div>
			<div className="control is-expanded">
				<input
					type="text"
					className="input"
					value={value.id}
					onChange={(e) => setValue({ ...value, id: e.target.value })}
					placeholder="Account ID"
				/>
			</div>
			{showDeleteButton ? (
				<div className="control">
					<Button color="danger" onClick={remove}>
						X
					</Button>
				</div>
			) : (
				""
			)}
		</div>
	);
}
