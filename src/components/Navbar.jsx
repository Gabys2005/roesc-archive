import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const localTheme = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const [activeClass, setActiveClass] = useState("");
	const [theme, setTheme] = useState(localTheme || (prefersDark ? "dark" : "light"));

	useEffect(() => {
		if (theme === "light") {
			document.documentElement.classList.remove("is-dark");
		} else {
			document.documentElement.classList.add("is-dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div className="navbar is-spaced">
			<div className="navbar-brand">
				<div className="navbar-item">
					<Link to="/">RoESC Archive</Link>
				</div>
				<a
					role="button"
					className={`navbar-burger ${activeClass}`}
					onClick={() => setActiveClass(activeClass === "" ? "is-active" : "")}
				>
					<span></span>
					<span></span>
					<span></span>
				</a>
			</div>

			<div className={`navbar-menu ${activeClass}`}>
				<div className="navbar-start">
					<Link to="/" className="navbar-item">
						Home
					</Link>
					<Link to="/roescs" className="navbar-item">
						RoESCs
					</Link>
					<Link to="/editor" className="navbar-item">
						Editor
					</Link>
				</div>

				<div className="navbar-end">
					<a
						style={{ userSelect: "none" }}
						className="navbar-item"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						Switch to {theme === "dark" ? "light" : "dark"} theme
					</a>
				</div>
			</div>
		</div>
	);
}
