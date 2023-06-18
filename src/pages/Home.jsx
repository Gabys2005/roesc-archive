import { Link } from "react-router-dom";
import RoescList from "../components/RoescList";

export default function Home() {
	return (
		<div>
			<h1>RoESC Archive</h1>
			<hr />
			<div className="notification is-danger">
				RoESC Archive is currently in development. Stuff might not work or data might be deleted
			</div>
			<Link to="/editor" className="button is-primary is-large">
				Editor
			</Link>
			<hr />
			<RoescList />
		</div>
	);
}
