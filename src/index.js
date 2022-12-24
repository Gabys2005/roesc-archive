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
import MissingPage from "./pages/MissingPage";
import NationalFinalsPage from "./pages/NationalFinalsPage";
import NationalFinalPage from "./pages/NationalFinalPage";
import Editor from "./pages/Editor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Navbar></Navbar>
			<section className="section">
				<div className="content container">
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="roescs" element={<Roescs />} />
						<Route path="roescs/:roesc" element={<RoescPage />} errorElement={<ErrorPage />} />
						<Route path="roescs/:roesc/editions/:edition" element={<EditionPage />} />
						<Route path="roescs/:roesc/editions/:edition/nfs" element={<NationalFinalsPage />} />
						<Route path="roescs/:roesc/editions/:edition/nfs/:nf" element={<NationalFinalPage />} />
						<Route path="participants" element={<AllParticipantsPage />} />
						<Route path="participants/:participant" element={<ParticipantPage />} />
						<Route path="missing" element={<MissingPage />} />
						<Route path="editor" element={<Editor />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
			</section>
		</HashRouter>
	</React.StrictMode>
);
