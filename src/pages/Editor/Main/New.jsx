import RoescEditor from "../../../components/RoescEditor/RoescEditor";
import { defaultMainData } from "../../../modules/defaultEditorData";

export default function New() {
	return <RoescEditor name="Blank" initialData={defaultMainData} />;
}
