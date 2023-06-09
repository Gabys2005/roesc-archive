export default function BoundaryError() {
	return (
		<div
			style={{
				width: "100%",
				background: "var(--pastel-red)",
				padding: "2rem",
				borderRadius: "1rem",
				border: "1px solid red",
			}}
		>
			Something went wrong
		</div>
	);
}
