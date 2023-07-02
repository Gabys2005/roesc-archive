import Twemoji from "react-twemoji";
import Country from "../Country";
import Table from "../Table";
import UsersString from "../UsersString";
import Song from "../Song";

export default function ParticipantsTable({ entries }) {
	const shouldShow = !entries.find((e) => e.shows.length > 0);

	if (!shouldShow) {
		return <></>;
	}

	return (
		<>
			<h1>Participants</h1>
			<hr />
			<Table columns={["Country", "Participant", "Artist", "Song"]}>
				{entries.map((entry, i) => (
					<tr key={i}>
						<td>
							<Twemoji>
								<Country id={entry.country} />
							</Twemoji>
						</td>
						<td>
							<UsersString userids={entry.hods} />
						</td>
						<td>{entry.song.artists}</td>
						<td>
							<Song data={entry.song} titleOnly />
						</td>
					</tr>
				))}
			</Table>
		</>
	);
}
