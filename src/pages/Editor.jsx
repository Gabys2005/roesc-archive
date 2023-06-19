import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getRoescs } from "../modules/fetchData";
import { Link } from "react-router-dom";
import { getEditions } from "../modules/roesc";

export default function Editor() {
	const [roescs, setRoescs] = useState([]);
	const [editions, setEditions] = useState([]);
	const [selected, setSelected] = useState(0);
	const [selectedEdition, setSelectedEdition] = useState(0);

	useEffect(() => {
		getRoescs().then((roescs) => {
			setRoescs(roescs);
		});
	}, []);

	useEffect(() => {
		setEditions([]);
		setSelectedEdition(0);
		getEditions(roescs[selected]?.link).then((editions) => setEditions(editions));
	}, [selected, roescs]);

	return (
		<div>
			<h1>Editor</h1>
			<hr />
			<div className="box">
				<h2>Quick terminology explanation</h2>
				<p>
					<span className="tag">RoESC File</span> - file containing the {'"'}main{'"'} content for a RoESC,
					for example owners, creation/cancellation dates, name, youtube channel, etc.
				</p>
				<p>
					<span className="tag">Edition File</span> - file containing information about a specific edition
				</p>
			</div>
			<div className="columns is-multiline">
				<div className="column is-half">
					<div className="box">
						<h2>Start with a blank template</h2>
						<hr />
						<p>An empty template where you have to fill out everything. Use this to add new pages.</p>
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
						<hr />
						<div className="select is-fullwidth">
							<select value={selected} onChange={(e) => setSelected(e.target.value)}>
								{roescs.map((roesc, i) => (
									<option key={roesc.link} value={i}>
										{roesc.name}
									</option>
								))}
							</select>
						</div>
						<div className="select is-fullwidth">
							<select value={selectedEdition} onChange={(e) => setSelectedEdition(e.target.value)}>
								{editions.map((edition, i) => (
									<option key={edition.link} value={i}>
										{edition.edition}
									</option>
								))}
							</select>
						</div>
						<hr />
						<div className="buttons">
							<Link
								className="button is-primary"
								to={roescs.length > 0 ? `/editor/existing/${roescs[selected].link}` : ""}
							>
								RoESC File
							</Link>
							<Link
								className="button is-primary"
								to={
									roescs.length > 0
										? `/editor/existing/${roescs[selected].link}/${editions[selectedEdition]?.link}`
										: ""
								}
							>
								Edition File
							</Link>
						</div>
					</div>
				</div>

				<div className="column is-half">
					<div className="box">
						<h2>Backups</h2>
						<hr />
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
						<p>
							Those editors are editing 1 long file instead of a few smaller ones. They{"'"}re also
							available inside other editors, which is why their layout is different
						</p>
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
