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

export { defaultUserData, defaultBroadcasterData };
