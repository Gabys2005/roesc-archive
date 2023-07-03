import Twemoji from "react-twemoji";
import Country from "../Country";
import SidewaysText from "../SidewaysText";
import { votingMethods } from "../../modules/data/votingMethods";

function getTableContent(data, show) {
	const participants = [];
	const voters = [];
	const votingMethod = show.votingMethod;
	const pointsToGive = votingMethods.find((m) => m.value === votingMethod)?.points || [];

	data.entries.forEach((entry) => {
		const showData = entry.shows.find((s) => s.id === show.id);
		if (showData?.shouldveVoted) {
			voters.push({
				country: entry.country,
				order: showData.order !== 0 ? showData.order : -1000,
				votes: showData.votes,
			});
		}
	});
	voters.sort((a, b) => b.order - a.order);

	data.entries.forEach((entry) => {
		const showData = entry.shows.find((s) => s.id === show.id);
		if (showData) {
			if (showData.participated) {
				const points = [];
				voters.forEach((voter) => {
					const index = voter.votes?.indexOf(entry.country);
					if (index > -1) {
						points.push(pointsToGive[index]);
					} else if (entry.country === voter.country) {
						points.push("-");
					} else {
						points.push("");
					}
				});

				let className = "";
				if (showData.qualified) {
					className = "selected";
				} else if (showData.won) {
					className = "firstplace";
				}

				participants.push({
					country: entry.country,
					order: showData.order,
					showPoints: showData.points,
					className,
					points,
				});
			}
		}
	});

	return {
		participants: participants.sort((a, b) => b.order - a.order),
		voters,
	};
}

export default function DetailedVotingTable({ data, show }) {
	const content = getTableContent(data, show);

	return (
		<div className="table-container" style={{ display: "flex", justifyContent: "center" }}>
			<table
				className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
				style={{ width: "inherit" }}
			>
				<thead>
					<tr>
						<th rowSpan={2} colSpan={2}></th>
						<th rowSpan={2} style={{ verticalAlign: "bottom" }}>
							<SidewaysText>Total score</SidewaysText>
						</th>
						<th rowSpan={2} style={{ verticalAlign: "bottom" }}>
							<SidewaysText>Jury vote score</SidewaysText>
						</th>
						<th rowSpan={2} style={{ verticalAlign: "bottom" }}>
							<SidewaysText>Televoting score</SidewaysText>
						</th>
						<th style={{ textAlign: "center" }} colSpan={content.voters.length}>
							Jury vote
						</th>
					</tr>
					<tr>
						{content.voters.map((voter, i) => (
							<th key={i} style={{ verticalAlign: "bottom" }}>
								<SidewaysText>
									<Twemoji>
										<Country id={voter.country} rotateFlag />
									</Twemoji>
								</SidewaysText>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{content.participants.map((participant, i) => (
						<tr key={i}>
							{i === 0 && (
								<th style={{ verticalAlign: "middle" }} rowSpan={content.participants.length}>
									<SidewaysText>Contestants</SidewaysText>
								</th>
							)}
							<th className={participant.className}>
								<Twemoji>
									<Country id={participant.country} />
								</Twemoji>
							</th>
							<td className={participant.className}>{participant.showPoints.total}</td>
							<td className={participant.className}>{participant.showPoints.jury}</td>
							<td className={participant.className}>{participant.showPoints.tele}</td>
							{participant.points.map((point, i) => (
								<td
									style={{ textAlign: "center" }}
									key={i}
									className={`${participant.className} ${point === "-" && "blank"}`}
								>
									{point !== "-" && point}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
