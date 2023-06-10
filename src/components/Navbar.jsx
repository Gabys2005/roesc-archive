import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, ThemeSwitcherContext } from "../contexts/theme";

export default function Navbar() {
	const [activeClass, setActiveClass] = useState("");
	const theme = useContext(ThemeContext);
	const themeSwitcher = useContext(ThemeSwitcherContext);

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
					<Link to="/users" className="navbar-item">
						Users
					</Link>
					<Link to="/broadcasters" className="navbar-item">
						Broadcasters
					</Link>
				</div>

				<div className="navbar-end">
					<Link to="/editor" className="navbar-item">
						Editor
					</Link>
					<a style={{ userSelect: "none" }} className="navbar-item" onClick={themeSwitcher.switch}>
						Switch to {theme === "dark" ? "light" : "dark"} theme
					</a>
				</div>
			</div>
		</div>
	);
}
