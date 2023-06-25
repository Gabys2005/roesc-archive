import { Link } from "react-router-dom";

export default function Editor() {
	return (
		<div>
			<h1>Editor</h1>
			<hr />
			<h2>What would you like to edit?</h2>
			<div className="buttons">
				<Link className="button is-primary" to="main">
					RoESC Homepage
				</Link>
				<Link className="button is-primary" to="edition">
					Edition Page
				</Link>
				<Link className="button is-primary" to="users">
					Users / Players
				</Link>
				<Link className="button is-primary" to="broadcasters">
					Broadcasters
				</Link>
			</div>
		</div>
	);
}
