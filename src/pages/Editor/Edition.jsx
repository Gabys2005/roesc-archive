import { Link } from "react-router-dom";

export default function Edition() {
	return (
		<div>
			<h1>Edition Page Editor</h1>
			<hr />
			<h2>What would you like to do?</h2>
			<div className="buttons">
				<Link to="new" className="button is-primary">
					Create a new edition page
				</Link>
				<Link to="existing" className="button is-primary">
					Editing an existing edition page
				</Link>
				<Link to="file" className="button is-primary">
					Edit from file
				</Link>
			</div>
		</div>
	);
}
