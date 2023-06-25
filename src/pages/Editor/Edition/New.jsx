import Editor from "../../../components/EditionEditor/Editor";
import { defaultEditionData } from "../../../modules/defaultEditorData";

export default function New() {
	return <Editor name="Blank" initialData={defaultEditionData} />;
}
