import ImagesInput from "../Inputs/ImagesInput";

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
				<ImagesInput
					name="Logos"
					description="General logos made for this RoESC. NOT EDITION SPECIFIC"
					value={data.media.find((r) => r.name === "logos").images}
					setValue={(images) => editMedia("logos", images)}
					requiredValues={["Light Logo", "Dark Logo"]}
				/>
			</div>
		</div>
	);
}
