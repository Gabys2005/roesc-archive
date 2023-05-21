import { useEffect, useState } from "react";
import BasicInformation from "./RoescEditor/BasicInformation";
import Output from "./RoescEditor/Output";
import TextContent from "./RoescEditor/TextContent";
import Links from "./RoescEditor/Links";
import People from "./RoescEditor/People";
import Editor from "./UsersEditor/Editor";
import EditingInformation from "./RoescEditor/EditingInformation";
import Media from "./RoescEditor/Media";

export default function RoescEditor({ name, initialData }) {
	const [data, setData] = useState(initialData);
	const [currentTab, setCurrentTab] = useState("Basic Information");
	const [users, setUsers] = useState([]);

	useEffect(() => {
		import("../data/original/users.json").then((users) => {
			setUsers(users.default);
		});
	}, []);

	function setValue(index, value) {
		setData({ ...data, [index]: value });
	}

	useEffect(() => {
		localStorage.setItem("editor_roesc_backup", JSON.stringify(data));
	}, [data]);

	const tabs = [
		{
			name: "Editing Information",
			component: <EditingInformation />,
		},
		{
			name: "Basic Information",
			component: <BasicInformation data={data} setValue={setValue} />,
		},
		{
			name: "Links",
			component: <Links data={data} setValue={setValue} />,
		},
		{
			name: "Text Content",
			component: <TextContent data={data} setValue={setValue} />,
		},
		{
			name: "People",
			component: <People data={data} setValue={setValue} users={users} />,
		},
		{
			name: "Media",
			component: <Media data={data} setValue={setValue} />,
		},
		{
			name: "Output",
			component: <Output data={data} users={users} />,
		},
		{
			name: "Users Editor",
			component: <Editor users={users} setUsers={setUsers} />,
		},
	];

	return (
		<div>
			<h1>Editing Main File - {name}</h1>

			<div className="tabs is-centered is-boxed">
				<ul className="ml-0">
					{tabs.map((tabData) => (
						<li className={currentTab === tabData.name ? "is-active" : ""} key={tabData.name}>
							<a onClick={() => setCurrentTab(tabData.name)}>{tabData.name}</a>
						</li>
					))}
				</ul>
			</div>

			{tabs.find((r) => r.name === currentTab).component}
		</div>
	);
}
