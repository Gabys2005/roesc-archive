import Button from "../Button";
import InputHeader from "./Util/InputHeader";

export default function SongInput({ value, setValue, name, description, multiple }) {
	function edit(i, field, newValue) {
		setValue(value.map((r, i2) => (i !== i2 ? r : { ...r, [field]: newValue })));
	}

	function editSingle(field, newValue) {
		setValue({ ...value, [field]: newValue });
	}

	if (multiple) {
		return (
			<InputHeader name={name} description={description}>
				{value.map((song, i) => (
					<div className="field has-addons" key={i}>
						<div className="control is-expanded">
							<input
								className="input"
								type="text"
								value={song.artists.join(", ")}
								placeholder="Artist"
								onChange={(e) => edit(i, "artists", e.target.value.split(", "))}
							/>
						</div>
						<div className="control">
							<div className="button is-static">-</div>
						</div>
						<div className="control is-expanded">
							<input
								className="input"
								type="text"
								value={song.title}
								placeholder="Song"
								onChange={(e) => edit(i, "title", e.target.value)}
							/>
						</div>
						<div className="control">
							<div className="button is-static">-</div>
						</div>
						<div className="control is-expanded">
							<input
								type="url"
								className="input"
								value={song.link}
								placeholder="YouTube Link"
								onChange={(e) => edit(i, "link", e.target.value)}
							/>
						</div>
						<div className="control">
							<Button color="danger" onClick={() => setValue(value.filter((_, i2) => i !== i2))}>
								X
							</Button>
						</div>
					</div>
				))}
				<Button onClick={() => setValue([...value, { artists: [], title: "", link: "" }])}>Add Another</Button>
			</InputHeader>
		);
	}

	return (
		<InputHeader name={name} description={description}>
			<div className="field has-addons">
				<div className="control is-expanded">
					<input
						className="input"
						type="text"
						value={value.artists.join(", ")}
						placeholder="Artist"
						onChange={(e) => editSingle("artists", e.target.value.split(", "))}
					/>
				</div>
				<div className="control">
					<div className="button is-static">-</div>
				</div>
				<div className="control is-expanded">
					<input
						className="input"
						type="text"
						value={value.title}
						placeholder="Song"
						onChange={(e) => editSingle("title", e.target.value)}
					/>
				</div>
				<div className="control">
					<div className="button is-static">-</div>
				</div>
				<div className="control is-expanded">
					<input
						type="url"
						className="input"
						value={value.link}
						placeholder="YouTube Link"
						onChange={(e) => editSingle("link", e.target.value)}
					/>
				</div>
			</div>
		</InputHeader>
	);
}
