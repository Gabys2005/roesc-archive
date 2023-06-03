import { Link } from "react-router-dom";

function Button(props) {
	let className = "button ";

	if (props.color === "danger") {
		className += "is-danger ";
	} else {
		className += "is-primary ";
	}

	if (props.size === "small") {
		className += "is-small";
	}

	if (props.link) {
		return (
			<Link to={props.to} className={className}>
				{props.children}
			</Link>
		);
	}
	return (
		<button className={className} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
