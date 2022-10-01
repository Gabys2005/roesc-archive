function Media(props) {
	if (props.src.endsWith(".mp4")) {
		return <video src={props.src} controls></video>;
	} else {
		return <img src={props.src} alt="egg"></img>;
	}
}

export default Media;
