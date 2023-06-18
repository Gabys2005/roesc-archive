import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Error404 from "./pages/404.jsx";
import loadable from "@loadable/component";

const options = { fallback: <h1>Loading</h1> };

const Editor = loadable(() => import("./pages/Editor.jsx"), options);
const NewRoescEditor = loadable(() => import("./pages/Editor/New/Roesc.jsx"), options);
const ExistingRoescEditor = loadable(() => import("./pages/Editor/Existing/Roesx.jsx"), options);
const UsersEditor = loadable(() => import("./pages/Editor/Users.jsx"), options);
const BroadcastersEditor = loadable(() => import("./pages/Editor/Broadcasters.jsx"), options);
const BackupRoescEditor = loadable(() => import("./pages/Editor/Backup/Roesc.jsx"), options);
const RoescPage = loadable(() => import("./pages/RoescPage.jsx"), options);
const RoescList = loadable(() => import("./components/RoescList.jsx"), options);
const UserPage = loadable(() => import("./pages/UserPage.jsx"), options);
const NewEditionEditor = loadable(() => import("./pages/Editor/New/Edition.jsx"), options);
const ExistingEditionEditor = loadable(() => import("./pages/Editor/Existing/Edition.jsx"), options);
const EditionPage = loadable(() => import("./pages/EditionPage.jsx"), options);
const Home = loadable(() => import("./pages/Home.jsx"), options);
const Users = loadable(() => import("./pages/Users.jsx"), options);
const Broadcasters = loadable(() => import("./pages/Broadcasters.jsx"), options);
const BroadcasterPage = loadable(() => import("./pages/BroadcasterPage.jsx"), options);
const BroadcasterRecords = loadable(() => import("./pages/Records/Broadcaster.jsx"));
import { useState, useEffect } from "react";
import { ThemeContext, ThemeSwitcherContext } from "./contexts/theme.js";

export default function App() {
	const localTheme = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const startingTheme = localTheme || (prefersDark ? "dark" : "light");

	const [theme, setTheme] = useState(startingTheme);
	const themeSwitcher = {
		switch: () => {
			if (theme === "light") {
				setTheme("dark");
			} else {
				setTheme("light");
			}
		},
	};

	useEffect(() => {
		if (theme === "light") {
			document.documentElement.classList.remove("is-dark");
		} else {
			document.documentElement.classList.add("is-dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<HashRouter>
			<ThemeContext.Provider value={theme}>
				<ThemeSwitcherContext.Provider value={themeSwitcher}>
					<Navbar />
				</ThemeSwitcherContext.Provider>

				<section className="section">
					<div className="content container">
						<Routes>
							<Route path="/" element={<Home />} />

							<Route path="/editor" element={<Editor />} />
							<Route path="/editor/users" element={<UsersEditor />} />
							<Route path="/editor/broadcasters" element={<BroadcastersEditor />} />

							<Route path="/editor/new/main" element={<NewRoescEditor />} />
							<Route path="/editor/new/edition" element={<NewEditionEditor />} />

							<Route path="/editor/existing/:link" element={<ExistingRoescEditor />} />
							<Route path="/editor/existing/:roesc/:edition" element={<ExistingEditionEditor />} />

							<Route path="/editor/backup/main" element={<BackupRoescEditor />} />

							<Route path="/roescs" element={<RoescList />} />
							<Route path="/roescs/:roesc" element={<RoescPage />} />
							<Route path="/roescs/:roesc/:edition" element={<EditionPage />} />

							<Route path="/users" element={<Users />} />
							<Route path="/users/:username" element={<UserPage />} />

							<Route path="/broadcasters" element={<Broadcasters />} />
							<Route path="/broadcasters/:link" element={<BroadcasterPage />} />

							<Route path="/records/broadcasters" element={<BroadcasterRecords />} />

							<Route path="*" element={<Error404 />} />
						</Routes>
					</div>
				</section>
			</ThemeContext.Provider>
		</HashRouter>
	);
}
