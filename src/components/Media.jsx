import LogoImage from "./LogoImage";

export default function Media({ media }) {
	return (
		<div>
			<h1>Media</h1>
			{media.map((mediaSection) => (
				<div key={mediaSection.name}>
					<h2>{mediaSection.name}</h2>
					<div className="columns is-multiline">
						{mediaSection.images.map((image) => (
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
