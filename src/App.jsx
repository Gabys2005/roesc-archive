import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Error404 from "./pages/404.jsx";
import Editor from "./pages/Editor.jsx";
import NewRoescEditor from "./pages/Editor/New/Roesc.jsx";
import ExistingRoescEditor from "./pages/Editor/Existing/Roesx.jsx";
import UsersEditor from "./pages/Editor/Users.jsx";
import BroadcastersEditor from "./pages/Editor/Broadcasters.jsx";
import BackupRoescEditor from "./pages/Editor/Backup/Roesc.jsx";
import RoescPage from "./pages/RoescPage.jsx";
import RoescList from "./components/RoescList.jsx";
import UserPage from "./pages/UserPage.jsx";
import NewEditionEditor from "./pages/Editor/New/Edition.jsx";
import ExistingEditionEditor from "./pages/Editor/Existing/Edition.jsx";
import EditionPage from "./pages/EditionPage.jsx";
import Home from "./pages/Home.jsx";
import { useState, useEffect } from "react";
import { ThemeContext, ThemeSwitcherContext } from "./contexts/theme.js";
import Users from "./pages/Users.jsx";
import Broadcasters from "./pages/Broadcasters.jsx";
import BroadcasterPage from "./pages/BroadcasterPage.jsx";

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

							<Route path="*" element={<Error404 />} />
						</Routes>
					</div>
				</section>
			</ThemeContext.Provider>
		</HashRouter>
	);
}
