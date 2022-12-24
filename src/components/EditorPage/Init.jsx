import { useState, useEffect } from "react";

// const currentDate = new Date();
// const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

const defaultData = {
	longName: "",
	shortName: "",
	link: "",
	created: "",
	cancelled: "",
	owner: [""],
	links: {},
};

const defaultEditionData = {};

function EditorInit(props) {
	const [selected, setSelected] = useState("");
	const [selectedEdition, setSelectedEdition] = useState("");
	const [fileName, setFileName] = useState("");
	const [fileData, setFileData] = useState();
	const [roescs, setRoescs] = useState([]);
	const [editions, setEditions] = useState([]);

	const hasDataInLocalStorage = localStorage.getItem("backup_main") || localStorage.getItem("backup_edition");

	function initEmptyMain() {
		props.onInit({ type: "main", data: defaultData });
	}

	function initEmptyEdition() {
		props.onInit({ type: "edition", data: defaultEditionData });
	}

	function initTemplateMain() {
		const data = structuredClone(roescs.find((r) => r.link === selected));
		delete data.editions;
		props.onInit({ type: "main", data });
	}

	function initTemplateEdition() {
		const data = roescs.find((r) => r.link === selected);
		const edition = data.editions.find((r) => r.link === selectedEdition);
		props.onInit({ type: "edition", data: edition });
	}

	function handleFileInput(e) {
		const fileList = e.target.files;
		const file = fileList[0];
		if (file) {
			setFileName(file.name);
			const reader = new FileReader();
			reader.onload = function () {
				setFileData(JSON.parse(reader.result));
			};
			reader.readAsText(file);
		}
	}

	function initFile() {
		if (fileData) {
			if (fileData.owner) {
				props.onInit({ type: "main", data: fileData });
			} else {
				props.onInit({ type: "edition", data: fileData });
			}
		}
	}

	function initBackupMain() {
		const stored = localStorage.getItem("backup_main");
		if (stored) {
			const data = JSON.parse(stored);
			props.onInit({ type: "main", data });
		}
	}

	useEffect(() => {
		import("../../data/generated/combined.json").then((cData) => {
			setSelected(cData.default[0].link);
			setRoescs(cData.default);
		});
	}, []);

	useEffect(() => {
		const roesc = roescs.find((r) => r.link === selected);
		if (!roesc) return;
		setEditions(roesc.editions);
	}, [selected, roescs]);

	return (
		<div>
			<h2>How would you want to start?</h2>
			<p>
				"Main" files are files that contain information about a RoESC that isn't different during every edition:
				name, owner(s), created/cancelled dates, links
				<br />
				"Edition" files are files that contain information about a specific edition: host, songs, nfs, theme,
				dates, etc.
			</p>
			<div className="tile is-ancestor">
				<div className="tile is-parent">
					<article className="tile is-child box">
						<p className="title">Start with a blank template</p>
						<div className="buttons">
							<button className="button is-primary" onClick={initEmptyMain}>
								Main File
							</button>
							<button className="button is-primary" onClick={initEmptyEdition}>
								Edition File
							</button>
						</div>
					</article>
				</div>
				<div className="tile is-parent">
					<article className="tile is-child box">
						<p className="title">Choose an existing RoESC</p>
						<div className="select field is-fullwidth">
							<select onChange={(e) => setSelected(e.target.value)}>
								{roescs.map((r) => (
									<option key={r.link} value={r.link}>
										{r.longName}
									</option>
								))}
							</select>
						</div>
						<div className="select field is-fullwidth">
							<select onChange={(e) => setSelectedEdition(e.target.value)}>
								{editions.map((r) => (
									<option key={r.link} value={r.link}>
										{r.number} - {r.city} - {r.country}
									</option>
								))}
							</select>
						</div>
						<div className="buttons">
							<button className="button is-primary" onClick={initTemplateMain}>
								Main File
							</button>
							<button className="button is-primary" onClick={initTemplateEdition}>
								Edition File
							</button>
						</div>
					</article>
				</div>
				<div className="tile is-parent">
					<article className="tile is-child box">
						<p className="title">Import a file</p>
						<div className="file has-name is-fullwidth">
							<label className="file-label">
								<input
									accept=".json"
									className="file-input"
									type="file"
									name="resume"
									onChange={handleFileInput}
								></input>
								<span className="file-cta">
									<span className="file-label">Choose a file…</span>
								</span>
								<span className="file-name">{fileName}</span>
							</label>
						</div>
						<br></br>
						<button className="button is-primary" onClick={initFile}>
							Continue
						</button>
					</article>
				</div>
				{hasDataInLocalStorage && (
					<div className="tile is-parent">
						<article className="tile is-child box">
							<p className="title">Load from backup</p>
							<p>
								Every time you make a change, the data gets saved to your device. You can load the most
								recent edit by using the buttons below
							</p>
							<div className="buttons">
								<button className="button is-primary" onClick={initBackupMain}>
									Main File
								</button>
								<button className="button is-primary">Edition File</button>
							</div>
						</article>
					</div>
				)}
			</div>
		</div>
	);
}

export default EditorInit;
