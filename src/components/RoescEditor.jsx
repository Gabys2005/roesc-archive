import { useEffect, useState } from "react";
import BasicInformation from "./RoescEditor/BasicInformation";
import Output from "./RoescEditor/Output";
import TextContent from "./RoescEditor/TextContent";
import Links from "./RoescEditor/Links";

export default function RoescEditor({ name, initialData }) {
	const [data, setData] = useState(initialData);
	const [currentTab, setCurrentTab] = useState("Basic Information");

	function setValue(index, value) {
		setData({ ...data, [index]: value });
	}

	useEffect(() => {
		localStorage.setItem("editor_roesc_backup", JSON.stringify(data));
	}, [data]);

	const tabs = [
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
			name: "Output",
			component: <Output data={data} />,
		},
	];

	return (
		<div>
			<h1>Editing Main File - {name}</h1>

			<div className="tabs is-centered is-boxed">
				<ul>
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
