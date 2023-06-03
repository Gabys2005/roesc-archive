import OutLink from "./OutLink";

export default function Song({ data }) {
	return (
		<span>
			<OutLink to={data.link}>
				{data.artists.join(", ")} - {data.title}
			</OutLink>
		</span>
	);
}
