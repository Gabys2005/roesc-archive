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
				shows: [],
				media: [
					{
						name: "logos",
						images: [],
					},
				],

				textContent: "",

				sfDraw: [],
				sfDrawText: "",

				bidding: [],
				biddingText: "",
			}}
		/>
	);
}
