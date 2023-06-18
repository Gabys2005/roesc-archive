import { useEffect, useState } from "react";
import BasicInformation from "./RoescEditor/BasicInformation";
import Output from "./RoescEditor/Output";
import TextContent from "./RoescEditor/TextContent";
import Links from "./RoescEditor/Links";
import People from "./RoescEditor/People";
import UsersEditor from "./UsersEditor/Editor";
import Info from "./Editor/Info";
import Media from "./RoescEditor/Media";
import Error404 from "../pages/404";
import { ErrorBoundary } from "react-error-boundary";
import BoundaryError from "./BoundaryError";

export default function RoescEditor({ name, initialData }) {
	const [data, setData] = useState(initialData);
	const [currentTab, setCurrentTab] = useState("Info");
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
		localStorage.setItem("backup-main", JSON.stringify(data));
	}, [data]);

	const tabs = [
		{
			name: "Info",
			component: <Info />,
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
			name: "|",
			component: <Error404 />,
		},
		{
			name: "Users Editor",
			component: <UsersEditor users={users} setUsers={setUsers} />,
		},
	];

	return (
		<div>
			<h1>Editing Main File - {name}</h1>

			<div className="tabs is-centered is-boxed">
				<ul className="ml-0">
					{tabs.map((tabData) => (
						<li className={currentTab === tabData.name ? "is-active" : ""} key={tabData.name}>
							<a onClick={() => tabData.name !== "|" && setCurrentTab(tabData.name)}>{tabData.name}</a>
						</li>
					))}
				</ul>
			</div>

			<ErrorBoundary FallbackComponent={BoundaryError}>
				{tabs.find((r) => r.name === currentTab).component}
			</ErrorBoundary>
		</div>
	);
}
