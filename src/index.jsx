import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import loadable from "@loadable/component";

const loadSettings = {
	fallback: <h1>Loading...</h1>,
};

const Roescs = loadable(() => import("./pages/Roescs"), loadSettings);
const RoescPage = loadable(() => import("./pages/RoescPage"), loadSettings);
const EditionPage = loadable(() => import("./pages/EditionPage"), loadSettings);
const NationalFinalsPage = loadable(() => import("./pages/NationalFinalsPage"), loadSettings);
const NationalFinalPage = loadable(() => import("./pages/NationalFinalPage"), loadSettings);
const AllParticipantsPage = loadable(() => import("./pages/AllParticipantsPage"), loadSettings);
const ParticipantPage = loadable(() => import("./pages/ParticipantPage"), loadSettings);
const MissingPage = loadable(() => import("./pages/MissingPage"), loadSettings);
const Editor = loadable(() => import("./pages/Editor"), loadSettings);

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
