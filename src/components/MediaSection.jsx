import LogoImage from "./MediaImage";

const names = {
	logos: "Logos",
};

export default function MediaSection({ images, name }) {
	if (images.filter((img) => img.link).length === 0) {
		return <></>;
	}

	return (
		<div>
			<h2>{names[name]}</h2>
			<div className="columns is-multiline">
				{images
					.filter((image) => image.link)
					.map((image) => (
						<div className="column is-one-quarter-desktop is-two-thirds-tablet" key={image.link}>
							<figure className="box">
								<LogoImage link={image.link} isLink />
								<figcaption>{image.name}</figcaption>
							</figure>
						</div>
					))}
			</div>
		</div>
	);
}
