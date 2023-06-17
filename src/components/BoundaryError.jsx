export default function BoundaryError({ error, resetErrorBoundary }) {
	function clearBackups() {
		localStorage.removeItem("backup-main");
		localStorage.removeItem("backup-broadcasters");
		localStorage.removeItem("backup-entry");
		localStorage.removeItem("backup-users");
		resetErrorBoundary();
	}

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
			<p>
				You can try clearing your backups to see if that solves the issue. All progress saved in the backups
				will be lost forever
			</p>
			<div className="buttons">
				<button className="button is-primary" onClick={resetErrorBoundary}>
					Refresh
				</button>
				<button className="button is-danger" onClick={clearBackups}>
					Clear Backups
				</button>
			</div>
		</div>
	);
}
