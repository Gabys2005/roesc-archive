import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Button from "../../../components/Button";
import Editor from "./Editor";

export default function File() {
	const [file, setFile] = useState();
	const [usersFile, setUsersFile] = useState();
	const [error, setError] = useState("");
	const [data, setData] = useState();
	const [users, setUsers] = useState();

	function verifyFile() {
		if (file.type !== "application/json") {
			return setError("This file is not valid");
		}

		const reader = new FileReader();
		reader.onload = async (e) => {
			const text = e.target.result;
			const data = JSON.parse(text);

			if (usersFile) {
				const usersReader = new FileReader();
				usersReader.onload = (e) => {
					const text = e.target.result;
					const users = JSON.parse(text);

					setUsers(users);
					setData(data);
				};
				usersReader.readAsText(usersFile);
			} else {
				setData(data);
			}
		};
		reader.readAsText(file);
	}

	if (data) {
		return (
			<div>
				<h1>Editing {data.name}</h1>
				<hr />
				<Editor data={data} setData={setData} users={users} />
			</div>
		);
	}

	return (
		<div>
			<h1>Edit user data from file</h1>
			<hr />
			<div className={`file has-name is-fullwidth ${error && "is-danger"}`}>
				<label className="file-label">
					<input className="file-input" type="file" onChange={(e) => setFile(e.target.files[0])} />
					<span className="file-cta">
						<span className="file-icon">
							<FaUpload />
						</span>
						<span className="file-label">Choose a broadcaster file…</span>
					</span>
					<span className="file-name">{file?.name}</span>
				</label>
			</div>

			<br />

			<div className={`file has-name is-fullwidth ${error && "is-danger"}`}>
				<label className="file-label">
					<input className="file-input" type="file" onChange={(e) => setUsersFile(e.target.files[0])} />
					<span className="file-cta">
						<span className="file-icon">
							<FaUpload />
						</span>
						<span className="file-label">Choose a users file…</span>
					</span>
					<span className="file-name">{usersFile?.name}</span>
				</label>
			</div>

			<br />
			<Button onClick={verifyFile}>Continue</Button>
		</div>
	);
}
