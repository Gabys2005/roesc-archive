import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Button from "../../../components/Button";
import Info from "../../../components/Editor/Info";
import Inputs from "../../../components/UsersEditor/Inputs";
import Output from "../../../components/UsersEditor/Output";

export default function File() {
	const [file, setFile] = useState();
	const [error, setError] = useState("");
	const [data, setData] = useState();

	function verifyFile() {
		if (file.type !== "application/json") {
			return setError("This file is not valid");
		}
		const reader = new FileReader();
		reader.onload = async (e) => {
			const text = e.target.result;
			const data = JSON.parse(text);
			setData(data);
		};
		reader.readAsText(file);
	}

	if (data) {
		return (
			<div>
				<h1>Editing {data.current.username}</h1>
				<hr />
				<Info optional />
				<Inputs data={data} setData={(field, value) => setData({ ...data, [field]: value })} />
				<Output data={data} downloadName={`fileuser-${data.current.username}`} />
			</div>
		);
	}

	return (
		<div>
			<h1>Edit user data from file</h1>
			<hr />
			<div className={`file has-name is-fullwidth ${error && "is-danger"}`}>
				<label className="file-label">
					<input
						className="file-input"
						type="file"
						name="resume"
						// value={file}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<span className="file-cta">
						<span className="file-icon">
							<FaUpload />
						</span>
						<span className="file-label">Choose a file…</span>
					</span>
					<span className="file-name">{file?.name}</span>
				</label>
			</div>
			<br />
			<Button onClick={verifyFile}>Continue</Button>
		</div>
	);
}
