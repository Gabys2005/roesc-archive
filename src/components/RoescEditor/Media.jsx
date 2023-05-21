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
			<div className="box">Use services like Imgur to host images</div>
			<div className="box">
				<LinksInput
					name="Logos"
					description="General logos made for this RoESC. NOT EDITION SPECIFIC"
					value={data.media.find((r) => r.name === "Logos").images}
					setValue={(images) => editMedia("Logos", images)}
					namePlaceholder="Description"
				/>
			</div>
		</div>
	);
}
