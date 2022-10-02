import { useEffect, useState } from "react";
import { revealNames as revealArr } from "../utils";

const revealNames = Object.keys(revealArr);
const roescFields = ["shortName", "longName", "link", "created", "cancelled", "owner", "links", "notes"];
const editionFields = [
	"number",
	"link",
	"city",
	"country",
	"venue",
	"slogan",
	"dates",
	"reveals",
	"presenters",
	"shows",
	"images",
	"venue_bidding",
	"pots",
	"entries",
];
const entryFields = ["country", "song", "artist", "participant"];
const showFields = ["order", "place", "points", "jury", "tele"];

function MissingPage() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		import("../data/generated/combined.json").then((cData) => {
			const dataToSet = [];

			cData.default.forEach((roesc) => {
				const thisData = {
					name: roesc.longName,
					missing: [],
				};
				roescFields.forEach((field) => {
					if (!roesc[field]) {
						thisData.missing.push(field);
					}
				});
				if (roesc.links?.length === 0) {
					thisData.missing.push("links");
				}

				roesc.editions.forEach((edition) => {
					editionFields.forEach((field) => {
						if (!edition[field]) {
							thisData.missing.push(`${edition.number}: ${field}`);
						}
					});
					revealNames.forEach((field) => {
						if (!edition.reveals?.[field]) {
							thisData.missing.push(`${edition.number} reveal: ${field}`);
						}
					});
					edition.entries.forEach((entry) => {
						entryFields.forEach((field) => {
							if (!entry[field]) {
								thisData.missing.push(`${edition.number} ${entry.country}: ${field}`);
							}
						});
						for (const showCode in entry.shows) {
							if (Object.hasOwnProperty.call(entry.shows, showCode)) {
								const showData = entry.shows[showCode];
								showFields.forEach((field) => {
									if (!showData[field]) {
										thisData.missing.push(
											`${edition.number} ${entry.country} ${showCode}: ${field}`
										);
									}
								});
							}
						}
					});
				});

				if (thisData.missing.length > 0) {
					dataToSet.push(thisData);
				}
			});

			setData(dataToSet);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Missing</h1>
			<hr></hr>
			{data.map((roesc) => (
				<div key={roesc.longName}>
					<h2>{roesc.name}</h2>
					<ul>
						{roesc.missing.map((r) => (
							<li key={r}>{r}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default MissingPage;
