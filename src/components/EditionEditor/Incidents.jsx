import MarkdownInput from "../Inputs/MarkdownInput";
import InputHeader from "../Inputs/Util/InputHeader";

export default function Incidents({ data, setValue }) {
	return (
		<div className="box">
			<h1>Incidents</h1>
			<p>List stuff exploiters, prop malfunctions, and so on here. No template, just text content</p>
			<InputHeader name="Written Content">
				<MarkdownInput value={data.incidents} setValue={(newText) => setValue("incidents", newText)} />
			</InputHeader>
		</div>
	);
}
