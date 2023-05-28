import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getRoescs } from "../modules/fetchData";
import { Link } from "react-router-dom";

export default function Editor() {
	const [roescs, setRoescs] = useState([]);
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		getRoescs().then((roescs) => {
			setRoescs(roescs);
		});
	}, []);

	return (
		<div>
			<h1>Editor</h1>
			<hr />
			<p>What would like to do?</p>
			<div className="columns is-multiline">
				<div className="column is-half">
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

				<div className="column is-half">
					<div className="box">
						<h2>Edit an existing RoESC</h2>
						<div className="select is-fullwidth">
							<select value={selected} onChange={(e) => setSelected(e.target.value)}>
								{roescs.map((roesc, i) => (
									<option key={roesc.link} value={i}>
										{roesc.name}
									</option>
								))}
							</select>
						</div>
						<hr />
						<Link
							className="button is-primary"
							to={roescs.length > 0 ? `/editor/existing/${roescs[selected].link}` : ""}
						>
							RoESC File
						</Link>
					</div>
				</div>

				<div className="column is-half">
					<div className="box">
						<h2>Backups</h2>
						<p>Start from your last saved backup. Backups are saved every time you change anything</p>
						<hr />
						<Link className="button is-primary" to={"/editor/backup/main"}>
							RoESC Backup
						</Link>
					</div>
				</div>

				<div className="column is-half">
					<div className="box">
						<h2>Other Editors</h2>
						<hr />
						<div className="buttons">
							<Link className="button is-primary" to="/editor/users">
								Users Editor
							</Link>
							<Link className="button is-primary" to="/editor/broadcasters">
								Broadcasters Editor
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
