import { useEffect, useState } from "react";
import Button from "../components/Button";
import { getRoescs } from "../modules/fetchData";
import { Link } from "react-router-dom";
import { getEditions } from "../modules/roesc";
import OutLink from "../components/OutLink";

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
				<h2>Info</h2>
				<p>
					More information will go here in the future <br />
					<b>Files</b> - This website is fully static, so it{"'"}s impossible for you to upload files
					directly. When adding images, just write their name in the correct field (for example {'"'}logo.png
					{'"'}) and attach them on Discord
					<br />
					<b>Markdown / Written Text / Text Content</b> - in places marked as one of these, you can use
					Markdown to write some actual content for the pages. You can use *cursive*, **bold**,
					~~strikethrough~~, # Headings, etc.{" "}
					<OutLink to="https://www.markdownguide.org/basic-syntax/">Click here</OutLink> for a full guide
				</p>
			</div>
			<hr />
			<div className="columns is-multiline">
				<div className="column is-half">
					<div className="box">
						<h2>Start with a blank template</h2>
						<hr />
						<p>An empty template where you have to fill out everything. Use this for adding new pages.</p>
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
