import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Error404 from "./pages/404.jsx";
import loadable from "@loadable/component";
import { useState, useEffect } from "react";
import { ThemeContext, ThemeSwitcherContext } from "./contexts/theme.js";
import File from "./pages/Editor/Main/File.jsx";

const options = { fallback: <h1>Loading</h1> };

const Editor = loadable(() => import("./pages/Editor.jsx"), options);
const UsersEditor = loadable(() => import("./pages/Editor/Users.jsx"), options);
const BroadcastersEditor = loadable(() => import("./pages/Editor/Broadcasters.jsx"), options);
const RoescPage = loadable(() => import("./pages/RoescPage.jsx"), options);
const RoescList = loadable(() => import("./components/RoescList.jsx"), options);
const UserPage = loadable(() => import("./pages/UserPage.jsx"), options);
const EditionPage = loadable(() => import("./pages/EditionPage.jsx"), options);
const Home = loadable(() => import("./pages/Home.jsx"), options);
const Users = loadable(() => import("./pages/Users.jsx"), options);
const Broadcasters = loadable(() => import("./pages/Broadcasters.jsx"), options);
const BroadcasterPage = loadable(() => import("./pages/BroadcasterPage.jsx"), options);
const BroadcasterRecords = loadable(() => import("./pages/Records/Broadcaster.jsx"), options);
const NewUserEditor = loadable(() => import("./pages/Editor/Users/New.jsx"), options);
const ExistingUserEditorSelector = loadable(() => import("./pages/Editor/Users/Existing.jsx"), options);
const ExistingUserEditorEditor = loadable(() => import("./pages/Editor/Users/ExistingEdit.jsx"), options);
const FileUserEditor = loadable(() => import("./pages/Editor/Users/File.jsx"), options);
const NewBroadcasterEditor = loadable(() => import("./pages/Editor/Broadcasters/New.jsx"), options);
const ExistingBroadcasterEditorSelector = loadable(() => import("./pages/Editor/Broadcasters/Existing.jsx"), options);
const ExistingBroadcasterEditorEditor = loadable(() => import("./pages/Editor/Broadcasters/ExistingEdit.jsx"), options);
const FileBroadcasterEditor = loadable(() => import("./pages/Editor/Broadcasters/File.jsx"), options);
const MainFileEditor = loadable(() => import("./pages/Editor/Main.jsx"), options);
const MainFileNew = loadable(() => import("./pages/Editor/Main/New.jsx"), options);
const MainFileExisting = loadable(() => import("./pages/Editor/Main/Existing.jsx"), options);
const MainFileExistingEdit = loadable(() => import("./pages/Editor/Main/ExistingEdit.jsx"), options);

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

							<Route path="/editor/main" element={<MainFileEditor />} />
							<Route path="/editor/main/new" element={<MainFileNew />} />
							<Route path="/editor/main/existing" element={<MainFileExisting />} />
							<Route path="/editor/main/existing/:link" element={<MainFileExistingEdit />} />
							<Route path="/editor/main/file" element={<File />} />

							<Route path="/editor/users" element={<UsersEditor />} />
							<Route path="/editor/users/new" element={<NewUserEditor />} />
							<Route path="/editor/users/existing" element={<ExistingUserEditorSelector />} />
							<Route path="/editor/users/existing/:id" element={<ExistingUserEditorEditor />} />
							<Route path="/editor/users/file" element={<FileUserEditor />} />

							<Route path="/editor/broadcasters" element={<BroadcastersEditor />} />
							<Route path="/editor/broadcasters/new" element={<NewBroadcasterEditor />} />
							<Route
								path="/editor/broadcasters/existing"
								element={<ExistingBroadcasterEditorSelector />}
							/>
							<Route
								path="/editor/broadcasters/existing/:id"
								element={<ExistingBroadcasterEditorEditor />}
							/>
							<Route path="/editor/broadcasters/file" element={<FileBroadcasterEditor />} />

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
