import LinksInput from "../Inputs/LinksInput";

export default function Media({ data, setValue }) {
	function editMedia(name, newData) {
		setValue(
			"media",
			data.media.map((r) => (r.name === name ? { ...r, images: newData } : r))
		);
	}

	return (
		<div>
			<div className="box">
				Remember to include any new images you add in your message on the Discord server. File Name is used only
				to make it easier for me to differentiate between files, please write the name of the file there (for
				example venue.png)
			</div>
			<div className="box">
				<LinksInput
					name="Logos"
					description="General logos made for this RoESC. NOT EDITION SPECIFIC"
					value={data.media.find((r) => r.name === "Logos").images}
					setValue={(images) => editMedia("Logos", images)}
					namePlaceholder="Description"
					linkPlaceholder="File Name"
				/>
			</div>
		</div>
	);
}
