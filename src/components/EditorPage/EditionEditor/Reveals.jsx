import { useState, useEffect } from "react";
import { arrayToObject, objectToArray, revealNames } from "../../../utils";
import Collapsible from "../../Collapsible";
import DateInput from "../Inputs/DateInput";

function Reveals({ data, change }) {
	const [reveals, setReveals] = useState(data.reveals);

	function changeReveals(revealShortName) {
		return function (e) {
			setReveals({ ...reveals, [revealShortName]: e.target.value });
		};
	}

	useEffect(() => {
		const array = objectToArray(reveals);
		const filtered = array.filter((r) => r[1] !== "");
		change("reveals")({ target: { value: arrayToObject(filtered) } });
	}, [reveals]);

	return (
		<Collapsible title="Reveals">
			{objectToArray(revealNames).map((r) => (
				<DateInput
					key={r[0]}
					description=""
					placeholder={r[1]}
					value={data.reveals[r[0]] || ""}
					onChange={changeReveals(r[0])}
				/>
			))}
		</Collapsible>
	);
}

export default Reveals;
