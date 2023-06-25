import { Link } from "react-router-dom";

export default function Broadcasters() {
	return (
		<div>
			<h1>Broadcasters Editor</h1>
			<hr />
			<h2>What would you like to do?</h2>
			<div className="buttons">
				<Link to="new" className="button is-primary">
					Create a new broadcaster
				</Link>
				<Link to="existing" className="button is-primary">
					Edit an existing broadcaster
				</Link>
				<Link to="file" className="button is-primary">
					Edit from file
				</Link>
			</div>
		</div>
	);
}
