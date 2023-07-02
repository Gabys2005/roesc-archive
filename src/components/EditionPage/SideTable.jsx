import { getMedia } from "../../modules/utils";
import MediaImage from "../MediaImage";
import { shows as showList } from "../../modules/showList";
import { parseDate } from "../../modules/parseDate";
import Song from "../Song";
import UsersString from "../UsersString";
import BroadcastersString from "../BroadcastersString";

function Acts({ name, shows, showIndex }) {
	const showsToShow = shows.filter((s) => s[showIndex].length > 0);

	if (showsToShow.length === 0) {
		return <></>;
	}

	return (
		<>
			<tr style={{ textAlign: "center" }}>
				<th colSpan={2}>{name} Acts</th>
			</tr>
			{showsToShow.map((show) => (
				<tr key={show.id}>
					<th>{showList[show.id]}</th>
					<td>
						{show[showIndex].map((act, i) => (
							<div key={i}>
								<Song data={act} />
								<br />
							</div>
						))}
					</td>
				</tr>
			))}
		</>
	);
}

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
					<tr>
						<th>Presenters</th>
						<td>
							{data.presenters.map((presenter, i) => (
								<span key={i}>
									{presenter.name}{" "}
									{presenter.id && (
										<span>
											(<UsersString userids={[presenter.id]} />)
										</span>
									)}
									<br />
								</span>
							))}
						</td>
					</tr>
					{data.broadcasters.length > 0 && (
						<tr>
							<th>Broadcaster</th>
							<td>
								<BroadcastersString ids={data.broadcasters} />
							</td>
						</tr>
					)}
					<tr style={{ textAlign: "center" }}>
						<th colSpan={2}>Dates</th>
					</tr>
					{data.shows.map((show) => (
						<tr key={show.id}>
							<th>{showList[show.id]}</th>
							<td>{parseDate(show.date)}</td>
						</tr>
					))}
					<Acts name="Opening" shows={data.shows} showIndex="openings" />
					<Acts name="Interval" shows={data.shows} showIndex="intervals" />
				</tbody>
			</table>
		</div>
	);
}
