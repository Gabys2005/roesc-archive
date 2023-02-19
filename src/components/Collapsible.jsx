import { useState } from "react";

function Collapsible({ children, title }) {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<div className="box">
			<button
				style={{
					display: "flex",
					justifyContent: "space-between",
					background: 0,
					width: "100%",
					textAlign: "left",
					cursor: "pointer",
					border: 0,
				}}
				onClick={() => setCollapsed(!collapsed)}
			>
				<h1>{title}</h1>
				<h2
					style={{
						marginTop: 0,
					}}
				>
					{collapsed ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
				</h2>
			</button>
			<div className={collapsed ? "is-hidden" : ""}>{children}</div>
		</div>
	);
}

export default Collapsible;
