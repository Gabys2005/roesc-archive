const imageDomain = "https://roesc-archive.gabys.workers.dev";

export default function LogoImage({ link, isLink }) {
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
