import SongInput from "../Inputs/SongInput";
import UserInput from "../Inputs/UserInput";
import CountryInput from "../Inputs/CountryInput";

export default function EntryInputs({ data, setData, users }) {
	return (
		<div className="box">
			<h2>The Basics</h2>
			<SongInput
				name="Song"
				description="The song that represented this entry. Separate artists with commas (,)"
				value={data.song}
				setValue={(song) => setData("song", song)}
			/>
			<hr />
			<CountryInput
				name="Country"
				description="The country being represented"
				value={data.country}
				setValue={(country) => setData("country", country)}
			/>
			<hr />
			<UserInput
				name="Heads Of Delegation"
				description="People who were chosen as the 'Participants'"
				value={data.hods}
				setValue={(hods) => setData("hods", hods)}
				users={users}
				multiple
			/>
			<hr />
			<UserInput
				name="Performers"
				description="People who performed on stage"
				value={data.performers}
				setValue={(performers) => setData("performers", performers)}
				users={users}
				multiple
			/>
		</div>
	);
}
