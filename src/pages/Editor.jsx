import EditorInit from "../components/EditorPage/Init";
import { useState } from "react";
import MainFileEditor from "../components/EditorPage/MainFileEditor";
import EditionFileEditor from "../components/EditorPage/EditionFileEditor";

function Boilerplate(props) {
	return (
		<div>
			<h1>Editor</h1>
			<hr />
			{props.children}
		</div>
	);
}

function Editor() {
	const [showEditor, setShowEditor] = useState(false);
	const [editorType, setEditorType] = useState("main");
	const [editorData, setEditorData] = useState();

	function onInit(data) {
		setEditorData(data.data);
		setEditorType(data.type);
		setShowEditor(true);
	}

	function goBack() {
		setShowEditor(false);
	}

	if (showEditor === false)
		return (
			<Boilerplate>
				<EditorInit onInit={onInit} />
			</Boilerplate>
		);
	if (editorType === "main")
		return (
			<Boilerplate>
				<MainFileEditor goBack={goBack} data={editorData} />
			</Boilerplate>
		);
	if (editorType === "edition")
		return (
			<Boilerplate>
				<EditionFileEditor goBack={goBack} data={editorData}></EditionFileEditor>
			</Boilerplate>
		);
	return <h1>error?</h1>;

	// return (
	// 	<div>
	// 		<h1>Editor</h1>
	// 		<hr></hr>
	// 		{showEditor === false ? <EditorInit onInit={onInit}></EditorInit> : {editorType === "main" ? <MainFileEditor data={editorData}></MainFileEditor> : <p>edition editor</p>}}
	// 	</div>
	// );
}

export default Editor;
