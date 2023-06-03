import InputHeader from "./Util/InputHeader";
import { parseDate } from "../../modules/parseDate";

export default function DateInput({ name, description, value, setValue }) {
	return (
		<InputHeader name={name} description={description}>
			<div className="field has-addons">
				<div className="control is-expanded">
					<input
						className="input"
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder="YYYY/MM/DD"
					/>
				</div>
				<div className="control">
					<div className="button is-static">{parseDate(value)}</div>
				</div>
			</div>
		</InputHeader>
	);
}
