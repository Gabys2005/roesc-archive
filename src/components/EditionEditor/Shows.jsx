/* eslint-disable no-mixed-spaces-and-tabs */
import { shows, showsArray } from "../../modules/showList";
import Checkbox from "../Inputs/Checkbox";
import InputHeader from "../Inputs/Util/InputHeader";
import DateInput from "../Inputs/DateInput";
import SongInput from "../Inputs/SongInput";
import MarkdownInput from "../Inputs/MarkdownInput";

export default function Shows({ data, setValue }) {
	return (
		<div>
			<div className="box">
				<InputHeader name="Shows" description="Which shows were a part of this edition?">
					{showsArray.map((show) => (
						<div key={show.id}>
							<Checkbox
								label={show.name}
								checked={!!data.shows.find((r) => r.id === show.id)}
								onChange={() =>
									setValue(
										"shows",
										data.shows.find((r) => r.id === show.id)
											? data.shows.filter((r) => r.id !== show.id)
											: [
													...data.shows,
													{ id: show.id, date: "", openings: [], intervals: [] },
											  ].sort(
													(a, b) =>
														showsArray.findIndex((r) => r.id === a.id) -
														showsArray.findIndex((r) => r.id === b.id)
											  )
									)
								}
							/>
						</div>
					))}
				</InputHeader>
			</div>
			{data.shows.map((show, i) => (
				<div className="box" key={show.id}>
					<h2>{shows[show.id]}</h2>
					<DateInput
						name="Show Date"
						description="When did this show happen?"
						value={show.date}
						setValue={(newDate) =>
							setValue(
								"shows",
								data.shows.map((r, i2) => (i !== i2 ? r : { ...r, date: newDate }))
							)
						}
					/>
					<SongInput
						name="Opening Acts"
						description="Songs that opened the show"
						multiple
						value={show.openings}
						setValue={(openings) =>
							setValue(
								"shows",
								data.shows.map((r, i2) => (i !== i2 ? r : { ...r, openings: openings }))
							)
						}
					/>
					<SongInput
						name="Interval Acts"
						description="Intevals"
						multiple
						value={show.intervals}
						setValue={(intervals) =>
							setValue(
								"shows",
								data.shows.map((r, i2) => (i !== i2 ? r : { ...r, intervals: intervals }))
							)
						}
					/>
					<InputHeader
						name="Written Content"
						description="This text will be shown above the results table (if there is one)"
					>
						<MarkdownInput
							value={show.textContent}
							setValue={(text) =>
								setValue(
									"shows",
									data.shows.map((r, i2) => (i !== i2 ? r : { ...r, textContent: text }))
								)
							}
						/>
					</InputHeader>
				</div>
			))}
		</div>
	);
}
