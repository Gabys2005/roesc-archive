import Button from "../Button";
import CountryInput from "../Inputs/CountryInput";
import MarkdownInput from "../Inputs/MarkdownInput";
import InputHeader from "../Inputs/Util/InputHeader";

export default function SemiFinalDraw({ data, setValue }) {
	return (
		<div className="box">
			{data.sfDraw.map((pot, i) => (
				<div key={i}>
					<CountryInput
						name={`Pot ${i + 1}`}
						value={pot}
						setValue={(countries) =>
							setValue(
								"sfDraw",
								data.sfDraw.map((r, i2) => (i !== i2 ? r : countries))
							)
						}
						multiple
						buttonText="Add Another Country"
					/>
					<Button
						color="danger"
						onClick={() =>
							setValue(
								"sfDraw",
								data.sfDraw.filter((_, i2) => i !== i2)
							)
						}
					>
						Remove Pot
					</Button>
					<br />
					<br />
				</div>
			))}
			<br />
			<Button onClick={() => setValue("sfDraw", [...data.sfDraw, []])}>Add Another Pot</Button>
			<hr />
			<InputHeader name="Written content">
				<MarkdownInput value={data.sfDrawText} setValue={(text) => setValue("sfDrawText", text)} />
			</InputHeader>
		</div>
	);
}
