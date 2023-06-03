export default function OutLink({ to, children }) {
	if (!to) return children;

	return (
		<a href={to} target="_blank" rel="noreferrer">
			{children}
		</a>
	);
}
