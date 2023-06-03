import Editor from "../../../components/EditionEditor/Editor";

export default function Edition() {
	return (
		<Editor
			name="Blank"
			initialData={{
				edition: "",
				link: "",
				slogans: [],
				countries: [],
				venues: [],
				presenters: [],
				broadcasters: [],
				links: [],
			}}
		/>
	);
}
