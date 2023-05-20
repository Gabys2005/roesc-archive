import RoescEditor from "../../../components/RoescEditor";

export default function Roesc() {
	return (
		<RoescEditor
			name="Blank"
			initialData={{
				name: "",
				link: "",
				previousNames: [],
				creationDate: "",
				cancellationDate: "",
				textContent: "",
				links: [],
			}}
		/>
	);
}
