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
				owners: [],
				previousOwners: [],
				developers: [],
				staff: [],
				designers: [],
				broadcasters: [],
				media: [
					{
						name: "logos",
						images: [
							{
								name: "Light Logo",
								link: "",
							},
							{
								name: "Dark Logo",
								link: "",
							},
						],
					},
				],
			}}
		/>
	);
}
