import { Link } from "react-router-dom";
import RoescList from "../components/RoescList";

export default function Home() {
	return (
		<div>
			<h1>RoESC Archive</h1>
			<hr />
			<p>blah blah blah</p>
			<Link to="/editor" className="button is-primary is-large">
				Editor
			</Link>
			<hr />
			<RoescList />
		</div>
	);
}
