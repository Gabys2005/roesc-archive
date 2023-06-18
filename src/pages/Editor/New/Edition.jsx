import Editor from "../../../components/EditionEditor/Editor";

export default function Edition() {
	return (
		<Editor
			name="Blank"
			initialData={{
				edition: "",
				link: "",
				cancelled: false,
				slogans: [],
				countries: [],
				venues: [],
				presenters: [],
				broadcasters: [],
				links: [],
				entries: [],

				textContent: "",

				sfDraw: [],
				sfDrawContent: "",

				bidding: [],
				biddingText: "",
			}}
		/>
	);
}