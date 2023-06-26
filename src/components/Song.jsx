import OutLink from "./OutLink";

export default function Song({ data, titleOnly }) {
	const content = titleOnly ? data.title : `${data.artists.join(", ")} - ${data.title}`;

	return (
		<span>
			<OutLink to={data.link}>{content}</OutLink>
		</span>
	);
}
