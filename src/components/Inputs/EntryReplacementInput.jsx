import { useEffect } from "react";
import { countriesArray } from "../../modules/countryList";
import InputHeader from "./Util/InputHeader";
import Button from "../Button";
import UserList from "./UserList";

export default function EntryReplacementInput({ name, description, value, setValue, users }) {
	useEffect(() => {
		if (!value) {
			setValue([]);
		}
	}, [value, setValue]);

	function edit(i, field, newValue) {
		setValue(value.map((r, i2) => (i !== i2 ? r : { ...r, [field]: newValue })));
	}

	if (!value) {
		return <></>;
	}

	return (
		<InputHeader name={name} description={description}>
			{value.map((entry, i) => (
				<div key={i} className="field has-addons">
					<div className="control select">
						<select value={entry.country} onChange={(e) => edit(i, "country", e.target.value)}>
							{countriesArray.map((country) => (
								<option value={country.id} key={country.id}>
									{country.name}
								</option>
							))}
						</select>
					</div>
					<UserList
						users={users}
						value={entry.participant}
						setValue={(user) => edit(i, "participant", user)}
					/>
					<div className="control">
						<input
							type="text"
							className="input"
							value={entry.song.artists.join(", ")}
							placeholder="Artists"
							onChange={(e) => edit(i, "song", { ...entry.song, artists: e.target.value.split(", ") })}
						/>
					</div>
					<div className="control">
						<input
							type="text"
							className="input"
							value={entry.song.title}
							placeholder="Song"
							onChange={(e) => edit(i, "song", { ...entry.song, title: e.target.value })}
						/>
					</div>
					<div className="control">
						<input
							type="url"
							className="input"
							value={entry.song.link}
							placeholder="Link"
							onChange={(e) => edit(i, "song", { ...entry.song, link: e.target.value })}
						/>
					</div>
				</div>
			))}
			<Button
				onClick={() =>
					setValue([...value, { country: "", participant: "", song: { artists: [], song: "", link: "" } }])
				}
			>
				Add Another
			</Button>
		</InputHeader>
	);
}
