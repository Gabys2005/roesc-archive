export default function BoundaryError({ error, resetErrorBoundary }) {
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
			<p>Something went wrong: {error.message}</p>
			<p>
				If you have time, please report this bug to me on Discord: <div className="tag">.gabys</div> with a
				short description of what you did before it happened
			</p>
			<button className="button is-primary" onClick={resetErrorBoundary}>
				Refresh
			</button>
		</div>
	);
}
