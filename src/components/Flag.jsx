import Twemoji from "react-twemoji";

const flags = {
	"united states": "🇺🇸",
	romania: "🇷🇴",
	canada: "🇨🇦",
	greece: "🇬🇷",
	serbia: "🇷🇸",
	lithuania: "🇱🇹",
	iceland: "🇮🇸",
	"south korea": "🇰🇷",
	russia: "🇷🇺",
	australia: "🇦🇺",
	cyprus: "🇨🇾",
	"north korea": "🇰🇵",
	france: "🇫🇷",
	ukraine: "🇺🇦",
	italy: "🇮🇹",
	spain: "🇪🇸",
	sweden: "🇸🇪",
	iran: "🇮🇷",
	poland: "🇵🇱",
	kazakhstan: "🇰🇿",
	japan: "🇯🇵",
	israel: "🇮🇱",
	wales: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	finland: "🇫🇮",
	norway: "🇳🇴",
	belarus: "🇧🇾",
	ireland: "🇮🇪",
	germany: "🇩🇪",
	england: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
	"aland islands": "🇦🇽",
	scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	vietnam: "🇻🇳",
	"north macedonia": "🇲🇰",
	"south africa": "🇿🇦",
	"united kingdom": "🇬🇧",
	switzerland: "🇨🇭",
	philippines: "🇵🇭",
	slovenia: "🇸🇮",
	netherlands: "🇳🇱",
	india: "🇮🇳",
	moldova: "🇲🇩",
	bulgaria: "🇧🇬",
	jamaica: "🇯🇲",
	luxembourg: "🇱🇺",
	morocco: "🇲🇦",
	"saint lucia": "🇱🇨",
	belgium: "🇧🇪",
	ghana: "🇬🇭",
	turkey: "🇹🇷",
	malta: "🇲🇹",
	"san marino": "🇸🇲",
	kosovo: "🇽🇰",
	zimbabwe: "🇿🇼",
	portugal: "🇵🇹",
	nicaragua: "🇳🇮",
	malaysia: "🇲🇾",
	"new zealand": "🇳🇿",
	china: "🇨🇳",
	greenland: "🇬🇱",
	thailand: "🇹🇭",
	"northern ireland": "🏴󠁧󠁢󠁮󠁩󠁲󠁿",
	palau: "🇵🇼",
	brazil: "🇧🇷",
	denmark: "🇩🇰",
	albania: "🇦🇱",
	"czech republic": "🇨🇿",
	fiji: "🇫🇯",
	estonia: "🇪🇪",
	uganda: "🇺🇬",
	georgia: "🇬🇪",
	pakistan: "🇵🇰",
	montenegro: "🇲🇪",
	taiwan: "🇹🇼",
	latvia: "🇱🇻",
	chile: "🇨🇱",
	armenia: "🇦🇲",
	uzbekistan: "🇺🇿",
	"conch republic": "🇨🇨",
	"vatican city": "🇻🇦",
	austria: "🇦🇹",
	andorra: "🇦🇩",
	"faroe islands": "🇫🇴",
	singapore: "🇸🇬",
	hungary: "🇭🇺",
	croatia: "🇭🇷",
	azerbaijan: "🇦🇿",
	kiribati: "🇨🇮",
	mongolia: "🇲🇳",
	monaco: "🇲🇨",
	colombia: "🇨🇴",
	argentina: "🇦🇷",
	venezuela: "🇻🇪",
	liechtenstein: "🇱🇮",
	mexico: "🇲🇽",
	bangladesh: "🇧🇩",
	"bosnia and herz": "🇧🇦",
	egypt: "🇪🇬",
	iraq: "🇮🇶",
	algeria: "🇩🇿",
	indonesia: "🇮🇩",
	slovakia: "🇸🇰",
	"costa rica": "🇨🇷",
	bahamas: "🇧🇸",
	guyana: "🇬🇾",
	turkmenistan: "🇹🇲",
	ecuador: "🇪🇨",
	laos: "🇱🇦",
	"hong kong": "🇭🇰",
	lebanon: "🇱🇧",
	cambodia: "🇰🇭",
	nigeria: "🇳🇬",
	"u.s. virgin islands": "🇻🇮",
	zerrussia: "🇷🇺",
	honduras: "🇭🇳",
	guam: "🇬🇺",
	brunei: "🇧🇳",
	"puerto rico": "🇵🇷",
	"isle of man": "🇮🇲",
};

function Flag(props) {
	return (
		<Twemoji options={{ className: "twemoji" }} tag="span">
			{flags[props.country.toLowerCase()]}
		</Twemoji>
	);
}

export default Flag;
