import { countries } from "../modules/countryList";

export default function Country({ id }) {
	if (!id) return <></>;
	return (
		<>
			{countries[id].emoji} {countries[id].name}
		</>
	);
}
