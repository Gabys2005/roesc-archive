function PageSection(props) {
	if (!props.check) {
		return <></>;
	}

	return props.children;
}

export default PageSection;
