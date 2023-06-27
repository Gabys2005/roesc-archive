import SongInput from "../Inputs/SongInput";
import UserInput from "../Inputs/UserInput";
import CountryInput from "../Inputs/CountryInput";
import { shows, showsWithPoints } from "../../modules/showList";
import Checkbox from "../Inputs/Checkbox";
import NumberInput from "../Inputs/NumberInput";
import { votingMethods } from "../../modules/data/votingMethods";

const defaultShowData = {
	order: 0,
	place: 0,
	points: {
		total: 0,
		tele: 0,
		jury: 0,
		penalty: 0,
	},
	participated: false,
	attended: false,
	shouldveVoted: false,
	failedToVote: false,
	votes: [],
};

function JuryVote({ fullData, setData, data, showId }) {
	const showData = fullData.shows.find((s) => s.id === showId);
	const points = votingMethods.find((m) => m.value === showData.votingMethod)?.points;

	if (!points) {
		return (
			<p>
				Choose a voting method in the <span className="tag">Shows</span> tab
			</p>
		);
	}
	return (
		<div>
			{points.map((point, i) => (
				<CountryInput
					name={`${point} points`}
					key={i}
					value={data.votes[i]}
					setValue={(country) => setData(i, country)}
				/>
			))}
		</div>
	);
}

export default function EntryInputs({ data, setData, users, fullData }) {
	const showsData = showsWithPoints.map(
		(showId) => data.shows.find((s) => s.id === showId) || { id: showId, ...defaultShowData }
	);

	function editShow(id, field, value) {
		if (data.shows.find((s) => s.id === id)) {
			setData(
				"shows",
				data.shows.map((s) => (s.id !== id ? s : { ...s, [field]: value }))
			);
		} else {
			setData("shows", [...data.shows, { id, ...defaultShowData, [field]: value }]);
		}
	}

	function editVotes(i, country, show) {
		if (show.votes.at(i)) {
			editShow(
				show.id,
				"votes",
				show.votes.map((v, i2) => (i != i2 ? v : country))
			);
		} else {
			const newVotes = structuredClone(show.votes);
			newVotes[i] = country;
			editShow(show.id, "votes", newVotes);
		}
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

			{showsData.map((show) => (
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
							<br />
							{show.id === "gf" ? (
								<Checkbox
									label="Won?"
									checked={show.won}
									onChange={(won) => editShow(show.id, "won", won)}
								/>
							) : (
								<Checkbox
									label="Qualified?"
									checked={show.qualified}
									onChange={(qualified) => editShow(show.id, "qualified", qualified)}
								/>
							)}
							<div className="field is-grouped mt-2">
								<NumberInput
									name="Running Order"
									value={show.order}
									setValue={(order) => editShow(show.id, "order", order)}
									margin
								/>
								<NumberInput
									name="Place"
									value={show.place}
									setValue={(place) => editShow(show.id, "place", place)}
									margin
								/>
							</div>
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
									name="Jury Points"
									value={show.points.jury}
									setValue={(points) => editShow(show.id, "points", { ...show.points, jury: points })}
									margin
								/>
								<NumberInput
									name="Tele Points"
									value={show.points.tele}
									setValue={(points) => editShow(show.id, "points", { ...show.points, tele: points })}
									margin
								/>
								<NumberInput
									name="Penalty Points"
									value={show.points.penalty}
									setValue={(points) =>
										editShow(show.id, "points", { ...show.points, penalty: points })
									}
									margin
								/>
							</div>
						</div>
					)}
					<hr />
					<Checkbox
						label="Was supposed to vote in this show?"
						checked={show.shouldveVoted}
						onChange={(shouldve) => editShow(show.id, "shouldveVoted", shouldve)}
					/>
					{show.shouldveVoted && (
						<div>
							<Checkbox
								label="Failed to vote?"
								checked={show.failedToVote}
								onChange={(failed) => editShow(show.id, "failedToVote", failed)}
							/>

							<h3>Jury Vote</h3>
							<JuryVote
								fullData={fullData}
								data={show}
								setData={(i, country) => editVotes(i, country, show)}
								showId={show.id}
							/>
						</div>
					)}
				</div>
			))}
		</>
	);
}
