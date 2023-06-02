const imageDomain = "https://roesc-archive.gabys.workers.dev";

export default function MediaImage({ link, isLink }) {
	if (!link) {
		return <div className="p-2">🦫</div>;
	}

	const image = <img className="p-2" src={`${imageDomain}/${link}`} />;

	if (isLink) {
		return (
			<a href={`${imageDomain}/${link}`} target="_blank" rel="noreferrer">
				{image}
			</a>
		);
	}

	return image;
}
