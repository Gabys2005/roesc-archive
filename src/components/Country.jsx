import { countries } from "../modules/countryList";

export default function Country({ id, rotateFlag }) {
	if (!id || !countries[id]) return <></>;
	return (
		<>
			<div style={{ display: "inline-block", transform: rotateFlag ? "rotate(180deg)" : "" }}>
				{countries[id].emoji}
			</div>{" "}
			{countries[id].name}
		</>
	);
}
