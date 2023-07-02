import { useState, useEffect } from "react";
import { getUsersDetailed } from "../../modules/users";
import { getBroadcasters } from "../../modules/fetchData";
import Error404 from "../../pages/404";
import UsersEditor from "../UsersEditor/Editor";
import BroadcastersEditor from "../BroadcastersEditor/Editor";
import BasicInformation from "./BasicInformation";
import Output from "./Output";
import Location from "./Location";
import Media from "./Media";
import SemiFinalDraw from "./SemiFinalDraw";
import Shows from "./Shows";
import { ErrorBoundary } from "react-error-boundary";
import BoundaryError from "../BoundaryError";
import Entries from "./Entries";
import Info from "../Editor/Info";
import Incidents from "./Incidents";
import Changes from "./Changes";

export default function Editor({ initialData, name, initialUsers }) {
	const [data, setData] = useState(initialData);
	const [currentTab, setCurrentTab] = useState("Editing Info");
	const [users, setUsers] = useState(initialUsers || []);
	const [broadcasters, setBroadcasters] = useState([]);

	useEffect(() => {
		if (!initialUsers) {
			getUsersDetailed().then((users) => setUsers(users));
		}
	}, [initialUsers]);

	useEffect(() => {
		getBroadcasters().then((broadcasters) => setBroadcasters(broadcasters));
	}, []);

	function setValue(index, value) {
		setData({ ...data, [index]: value });
	}

	useEffect(() => {
		localStorage.setItem("backup-edition", JSON.stringify(data));
	}, [data]);

	const tabs = [
		{
			name: "Editing Info",
			component: <Info />,
		},
		{
			name: "Basic Information",
			component: <BasicInformation data={data} setValue={setValue} users={users} broadcasters={broadcasters} />,
		},
		{
			name: "Location",
			component: <Location data={data} setValue={setValue} />,
		},
		{
			name: "Shows",
			component: <Shows data={data} setValue={setValue} />,
		},
		{
			name: "SF Draw",
			component: <SemiFinalDraw data={data} setValue={setValue} />,
		},
		{
			name: "Entries",
			component: <Entries data={data} setValue={setValue} users={users} />,
		},
		{
			name: "Changes",
			component: <Changes data={data} setValue={setValue} users={users} />,
		},
		{
			name: "Incidents",
			component: <Incidents data={data} setValue={setValue} />,
		},
		{
			name: "Media",
			component: <Media data={data} setValue={setValue} />,
		},
		{
			name: "Output",
			component: <Output data={data} users={users} broadcasters={broadcasters} />,
		},
		{
			name: "|",
			component: <Error404 />,
		},
		{
			name: "Users Editor",
			component: <UsersEditor users={users} setUsers={setUsers} />,
		},
		{
			name: "Broadcasters Editor",
			component: (
				<BroadcastersEditor
					broadcasters={broadcasters}
					setBroadcasters={setBroadcasters}
					users={users}
					embedded
				/>
			),
		},
	];

	return (
		<div>
			<h1>Editing Edition File - {name}</h1>

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
