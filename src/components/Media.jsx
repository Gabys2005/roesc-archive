import MediaSection from "./MediaSection";

export default function Media({ media }) {
	return (
		<div>
			<h1>Media</h1>
			<hr />
			{media.map((mediaSection) => (
				<MediaSection data={mediaSection} key={mediaSection.name} />
			))}
		</div>
	);
}
