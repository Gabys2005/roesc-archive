import { countries } from "../modules/countryList";

export default function Country({ id }) {
	return (
		<>
			{countries[id].emoji} {countries[id].name}
		</>
	);
}
