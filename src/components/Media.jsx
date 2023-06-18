import MediaSection from "./MediaSection";

export default function Media({ media }) {
	return (
		<div>
			<h1>Media</h1>
			<hr />
			{media.map((mediaSection) => (
				<MediaSection images={mediaSection.images} name={mediaSection.name} key={mediaSection.name} />
			))}
		</div>
	);
}
