import Twemoji from "react-twemoji";
import { votingMethods } from "../../modules/data/votingMethods";
import Country from "../Country";

function getMaxPoints(data, show) {
	const votingMethod = show.votingMethod;
	const maxPoints = votingMethods.find((m) => m.value === votingMethod)?.points[0];
	const getters = [];
	data.entries.forEach((entry) => {
		const showData = entry.shows.find((s) => s.id === show.id);
		if (showData && showData.votes && showData.votes[0]) {
			const maxPointsGetter = showData.votes[0];
			const existing = getters.find((g) => (g.country = maxPointsGetter));
			if (existing) {
				existing.givers.push(entry.country);
			} else {
				getters.push({ country: maxPointsGetter, givers: [entry.country] });
			}
		}
	});

	const toReturn = {
		maxPoints,
		getters,
	};

	console.log(toReturn);
	return toReturn;
}

export default function MaxPointsTable({ data, show }) {
	const points = getMaxPoints(data, show);

	return (
		<Twemoji>
			<table className="table is-bordered is-striped is-hoverable is-narrow" style={{ width: "inherit" }}>
				<thead>
					<tr>
						<th>N.</th>
						<th>Contestant</th>
						<th>Nation(s) giving {points.maxPoints} points</th>
					</tr>
				</thead>
				<tbody>
					{points.getters.map((getter, i) => (
						<tr key={i}>
							<th>{getter.givers.length}</th>
							<td>
								<Country id={getter.country} />
							</td>
							<td>
								{getter.givers.map((giver, i) => (
									<Country id={giver} key={i} />
								))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Twemoji>
	);
}
