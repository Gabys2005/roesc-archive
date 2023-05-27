import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./style.sass";

import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Error404 from "./pages/404.jsx";
import Editor from "./pages/Editor.jsx";
import Roesc from "./pages/Editor/New/Roesc.jsx";
import RoescPage from "./pages/RoescPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<Navbar />

			<section className="section">
				<div className="content container">
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/editor" element={<Editor />} />
						<Route path="/editor/new/main" element={<Roesc />} />

						<Route path="/roescs/:roesc" element={<RoescPage />} />

						<Route path="*" element={<Error404 />} />
					</Routes>
				</div>
			</section>
		</HashRouter>
	</React.StrictMode>
);
