import RoescEditor from "../../../components/RoescEditor";

export default function Roesc() {
	const backup = localStorage.getItem("backup-main");

	if (!backup) {
		return <h1>No Backup Found</h1>;
	}

	return <RoescEditor initialData={JSON.parse(backup)} name="Backup" />;
}
