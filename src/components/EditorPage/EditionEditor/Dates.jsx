import { useEffect } from "react";
import { useState } from "react";
import { objectToArray, showNames, arrayToObject } from "../../../utils";
import Collapsible from "../../Collapsible";
import DateInput from "../Inputs/DateInput";

function Dates({ data, change }) {
	const [dates, setDates] = useState(data.dates);

	function changeDate(showName) {
		return function (e) {
			const newDates = { ...dates, [showName]: e.target.value };
			setDates(newDates);
		};
	}

	useEffect(() => {
		const array = objectToArray(dates);
		const filtered = array.filter((r) => data.shows.find((a) => a === r[0]));
		setDates(arrayToObject(filtered));
	}, [data.shows]);

	useEffect(() => {
		change("dates")({ target: { value: dates } });
	}, [dates]);

	return (
		<Collapsible title="Dates">
			{Object.keys(data.shows).length === 0 ? (
				<p>Choose the shows that took part in this edition in the "Basic Information" section</p>
			) : (
				""
			)}
			{data.shows.map((showShortName) => (
				<DateInput
					key={showShortName}
					description=""
					placeholder={showNames[showShortName]}
					value={data.dates[showShortName] || ""}
					onChange={changeDate(showShortName)}
				/>
			))}
		</Collapsible>
	);
}

export default Dates;
