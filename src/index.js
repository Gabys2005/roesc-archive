import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Routes, Route, HashRouter } from "react-router-dom";
import Roescs from "./pages/Roescs";
import Navbar from "./components/Navbar";
import RoescPage from "./pages/RoescPage";
import ErrorPage from "./pages/ErrorPage";
import EditionPage from "./pages/EditionPage";
import AllParticipantsPage from "./pages/AllParticipantsPage";
import ParticipantPage from "./pages/ParticipantPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Navbar></Navbar>
			<section className="section">
				<div className="content container">
					<Routes>
						<Route path="/" element={<App></App>}></Route>
						<Route path="roescs" element={<Roescs></Roescs>}></Route>
						<Route
							path="roescs/:roesc"
							element={<RoescPage></RoescPage>}
							errorElement={<ErrorPage></ErrorPage>}
						></Route>
						<Route path="roescs/:roesc/editions/:edition" element={<EditionPage></EditionPage>}></Route>
						<Route path="participants" element={<AllParticipantsPage></AllParticipantsPage>}></Route>
						<Route path="participants/:participant" element={<ParticipantPage></ParticipantPage>}></Route>
						<Route path="*" element={<ErrorPage></ErrorPage>}></Route>
					</Routes>
				</div>
			</section>
		</HashRouter>
	</React.StrictMode>
);
