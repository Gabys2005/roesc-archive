import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/">
						🥚🦆
					</Link>

					<div
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</div>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<Link className="navbar-item" to="/">
							Home
						</Link>

						<Link className="navbar-item" to="/roescs">
							RoESCs
						</Link>

						<Link className="navbar-item" to="/participants">
							Participants
						</Link>

						<Link className="navbar-item" to="/missing">
							Missing
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
