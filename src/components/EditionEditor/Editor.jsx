import { useState, useEffect } from "react";
import { getUsersDetailed } from "../../modules/users";
import { getBroadcasters } from "../../modules/fetchData";
import Error404 from "../../pages/404";
import UsersEditor from "../UsersEditor/Editor";
import BroadcastersEditor from "../BroadcastersEditor/Editor";
import BasicInformation from "./BasicInformation";
import Output from "./Output";

export default function Editor({ initialData, name }) {
	const [data, setData] = useState(initialData);
	const [currentTab, setCurrentTab] = useState("Basic Information");
	const [users, setUsers] = useState([]);
	const [broadcasters, setBroadcasters] = useState([]);

	useEffect(() => {
		getUsersDetailed().then((users) => {
			setUsers(users);
		});
		getBroadcasters().then((broadcasters) => {
			setBroadcasters(broadcasters);
		});
	}, []);

	function setValue(index, value) {
		setData({ ...data, [index]: value });
	}

	useEffect(() => {
		localStorage.setItem("backup-edition", JSON.stringify(data));
	}, [data]);

	const tabs = [
		{
			name: "Basic Information",
			component: <BasicInformation data={data} setValue={setValue} users={users} broadcasters={broadcasters} />,
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
				<BroadcastersEditor broadcasters={broadcasters} setBroadcasters={setBroadcasters} users={users} />
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

			{tabs.find((r) => r.name === currentTab).component}
		</div>
	);
}
