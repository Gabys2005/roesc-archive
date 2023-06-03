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
					description="Logos made for this edition. First logo will be used in the side table"
					value={data.media.find((r) => r.name === "logos").images}
					setValue={(images) => editMedia("logos", images)}
					namePlaceholder="Description"
					linkPlaceholder="File Name"
				/>
			</div>
		</div>
	);
}
