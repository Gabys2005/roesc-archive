import { useEffect } from "react";
import { useState } from "react";
import { getRoescs } from "../../../modules/fetchData";
import { Link } from "react-router-dom";
import { getEditions } from "../../../modules/roesc";

export default function Existing() {
	const [roescs, setRoescs] = useState([]);
	const [selected, setSelected] = useState(0);
	const [selectedEdition, setSelectedEdition] = useState(0);
	const [editions, setEditions] = useState([]);

	useEffect(() => {
		getRoescs().then((roescs) => setRoescs(roescs));
	}, []);

	useEffect(() => {
		setEditions([]);
		setSelectedEdition(0);
		getEditions(roescs[selected]?.link).then((editions) => setEditions(editions));
	}, [selected, roescs]);

	if (!roescs) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Select a RoESC to edit</h1>
			<hr />
			<div className="select is-fullwidth">
				<select value={selected} onChange={(e) => setSelected(e.target.value)}>
					{roescs.map((roesc, i) => (
						<option key={roesc.link} value={i}>
							{roesc.name}
						</option>
					))}
				</select>
			</div>
			<div className="select is-fullwidth">
				<select value={selectedEdition} onChange={(e) => setSelectedEdition(e.target.value)}>
					{editions.map((edition, i) => (
						<option key={edition.link} value={i}>
							{edition.edition}
						</option>
					))}
				</select>
			</div>
			<br />
			<br />
			<Link
				className="button is-primary"
				to={roescs.length > 0 ? `${roescs[selected].link}/${editions[selectedEdition]?.link}` : ""}
			>
				Continue
			</Link>
		</div>
	);
}
