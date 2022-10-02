import { useEffect, useState } from "react";

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
				if (!roesc.links) {
					thisData.missing.push("links");
				}
				if (!roesc.owner) {
					thisData.missing.push("owner");
				}
				if (thisData.missing.length > 0) {
					dataToSet.push(thisData);
				}

				roesc.editions.forEach((edition) => {});
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
