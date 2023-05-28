import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [activeClass, setActiveClass] = useState("");

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
			</div>
		</div>
	);
}
