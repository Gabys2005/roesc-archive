import SongInput from "../Inputs/SongInput";
import UserInput from "../Inputs/UserInput";
import CountryInput from "../Inputs/CountryInput";
import { shows } from "../../modules/showList";
import Checkbox from "../Inputs/Checkbox";
import NumberInput from "../Inputs/NumberInput";

export default function EntryInputs({ data, setData, fullData, users }) {
	function editShow(id, field, value) {
		setData(
			"shows",
			data.shows.map((s) => (s.id !== id ? s : { ...s, [field]: value }))
		);
	}

	return (
		<>
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
				<hr />
				<UserInput
					name="Delegation Members"
					description="Other delegation members"
					value={data.delegationMembers}
					setValue={(delegationMembers) => setData("delegationMembers", delegationMembers)}
					users={users}
					multiple
				/>
			</div>

			{data.shows.map((show) => (
				<div className="box" key={show.id}>
					<h1>{shows[show.id]}</h1>
					<Checkbox
						label="Took part in this show?"
						checked={show.participated}
						onChange={(participated) => editShow(show.id, "participated", participated)}
					/>
					{show.participated && (
						<div>
							<Checkbox
								label="Attended the show?"
								checked={show.attended}
								onChange={(attended) => editShow(show.id, "attended", attended)}
							/>
							<NumberInput
								name="Running Order"
								value={show.order}
								setValue={(order) => editShow(show.id, "order", order)}
							/>
							<div className="field is-grouped mt-2">
								<NumberInput
									name="Total Points"
									value={show.points.total}
									setValue={(points) =>
										editShow(show.id, "points", { ...show.points, total: points })
									}
									margin
								/>
								<NumberInput
									name="Tele Points"
									value={show.points.tele}
									setValue={(points) => editShow(show.id, "points", { ...show.points, tele: points })}
									margin
								/>
								<NumberInput
									name="Jury Points"
									value={show.points.jury}
									setValue={(points) => editShow(show.id, "points", { ...show.points, jury: points })}
									margin
								/>
							</div>
						</div>
					)}
					<hr />
					<Checkbox
						label="Was supposed to vote in this show?"
						value={show.shouldveVoted}
						onChange={(shouldve) => editShow(show.id, "shouldveVoted", shouldve)}
					/>
					{show.shouldveVoted && (
						<div>
							<Checkbox
								label="Failed to vote?"
								value={show.failedToVote}
								onChange={(failed) => editShow(show.id, "failedToVote", failed)}
							/>
						</div>
					)}
				</div>
			))}
		</>
	);
}
