import roescs from "../data/roescs.json";
import { Link } from "react-router-dom";
import { joinTable } from "../utils";

function RoescList() {
	return (
		<ul>
			{roescs.map((data) => (
				<li key={data.link}>
					<Link to={`/roescs/${data.link}`}>
						{data.shortName} - {data.longName} - {joinTable(data.owner)}{" "}
						{data.previousOwners ? `(previously owned by ${data.previousOwners.join(", ")})` : ""}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default RoescList;
