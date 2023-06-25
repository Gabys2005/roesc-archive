import { useEffect } from "react";
import { useState } from "react";
import { getRoescs } from "../../../modules/fetchData";
import { Link } from "react-router-dom";

export default function Existing() {
	const [roescs, setRoescs] = useState();
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		getRoescs().then((roescs) => setRoescs(roescs));
	}, []);

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
			<br />
			<br />
			<Link to={roescs[selected].link} className="button is-primary">
				Continue
			</Link>
		</div>
	);
}
