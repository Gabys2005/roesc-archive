import { getMedia } from "../../modules/utils";
import MediaImage from "../MediaImage";
import { shows } from "../../modules/showList";
import { parseDate } from "../../modules/parseDate";
import Song from "../Song";

export default function SideTable({ data, roescData }) {
	return (
		<div className="table-container sideTable" style={{ float: "right", marginLeft: "1rem" }}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr style={{ textAlign: "center" }}>
						<th colSpan={2}>
							{roescData.name} {data.edition}
						</th>
					</tr>
				</thead>
				<tbody>
					{getMedia(data.media, "logos").length > 0 ? (
						<tr>
							<td colSpan={2}>
								<MediaImage link={getMedia(data.media, "logos")[0].link} />
							</td>
						</tr>
					) : (
						""
					)}
					<tr style={{ textAlign: "center" }}>
						<th colSpan={2}>Dates</th>
					</tr>
					{data.shows.map((show) => (
						<tr key={show.id}>
							<th>{shows[show.id]}</th>
							<td>{parseDate(show.date)}</td>
						</tr>
					))}
					<tr style={{ textAlign: "center" }}>
						<th colSpan={2}>Opening Acts</th>
					</tr>
					{data.shows.map((show) => (
						<tr key={show.id}>
							<th>{shows[show.id]}</th>
							<td>
								{show.openings.map((opening, i) => (
									<div key={i}>
										<Song data={opening} />
										<br />
									</div>
								))}
							</td>
						</tr>
					))}
					<tr style={{ textAlign: "center" }}>
						<th colSpan={2}>Interval Acts</th>
					</tr>
					{data.shows.map((show) => (
						<tr key={show.id}>
							<th>{shows[show.id]}</th>
							<td>
								{show.intervals.map((interval, i) => (
									<div key={i}>
										<Song data={interval} />
										<br />
									</div>
								))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}