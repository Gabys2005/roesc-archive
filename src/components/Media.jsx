import LogoImage from "./MediaImage";

const names = {
	logos: "Logos",
};

export default function Media({ media }) {
	return (
		<div>
			<h1>Media</h1>
			{media.map((mediaSection) => (
				<div key={mediaSection.name}>
					<h2>{names[mediaSection.name]}</h2>
					<div className="columns is-multiline">
						{mediaSection.images
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
			))}
		</div>
	);
}
