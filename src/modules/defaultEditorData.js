const defaultUserData = {
	current: { username: "", id: "" },
	previous: [],
	aliases: [],
	joined: "",
	left: "",
	textContent: "",
};

const defaultBroadcasterData = {
	name: "",
	shortName: "",
	link: "",

	created: "",
	roescJoin: "",
	closed: "",

	links: [],
	logos: [
		{
			name: "Light Logo",
			link: "",
		},
		{
			name: "Dark Logo",
			link: "",
		},
	],

	textContent: "",

	owners: [],
	staff: [],
};

const defaultMainData = {
	name: "",
	shortName: "",
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
};

const defaultEditionData = {
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
};

export { defaultUserData, defaultBroadcasterData, defaultMainData, defaultEditionData };
