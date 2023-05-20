import Button from "../components/Button";

export default function Editor() {
	return (
		<div>
			<h1>Editor</h1>
			<hr />
			<p>What would like to do?</p>
			<div className="columns">
				<div className="column">
					<div className="box">
						<h2>Start with a blank template</h2>
						<hr />
						<div className="buttons">
							<Button link to="/editor/new/main">
								RoESC File
							</Button>
							<Button link to="/editor/new/edition">
								Edition File
							</Button>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="box">
						<h2>Edit an existing RoESC</h2>
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
}
