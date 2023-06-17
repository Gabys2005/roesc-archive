import OutLink from "./OutLink";

export default function LinkList({ links }) {
	return links.map((l, i) => (
		<OutLink key={i} to={l.link}>
			{l.name}
			<br />
		</OutLink>
	));
}
