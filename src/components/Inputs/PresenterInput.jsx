import InputHeader from "./Util/InputHeader";
import Button from "../Button";
import UserList from "./UserList";

export default function PresenterInput({ value, setValue, name, description, users }) {
	function edit(i, field, newValue) {
		setValue(value.map((r, i2) => (i !== i2 ? r : { ...r, [field]: newValue })));
	}

	return (
		<InputHeader name={name} description={description}>
			{value.map((presenter, i) => (
				<div className="field has-addons" key={i}>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={presenter.name}
							onChange={(e) => edit(i, "name", e.target.value)}
							placeholder="Name"
						/>
					</div>
					<div className="control">
						<div className="button is-static">-</div>
					</div>
					<div className="control">
						<label className="b-checkbox checkbox input">
							<input
								type="checkbox"
								checked={presenter.bot}
								onChange={(e) => edit(i, "bot", e.target.checked)}
							/>
							<span className="check"></span>
							<span className="control-label">Bot?</span>
						</label>
					</div>
					<UserList
						users={users}
						value={presenter.id}
						setValue={(id) => edit(i, "id", id)}
						disabled={presenter.bot}
					/>
					<div className="control">
						<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i2 !== i))}>
							X
						</Button>
					</div>
				</div>
			))}
			<Button onClick={() => setValue([...value, { name: "", bot: false, id: "" }])}>Add Another</Button>
		</InputHeader>
	);
}
