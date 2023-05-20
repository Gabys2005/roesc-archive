import LinksInput from "../Inputs/LinksInput";

export default function Links({ data, setValue }) {
	return (
		<div className="box">
			<LinksInput
				name="All Links"
				description="Website(s), YouTube channel, Twitter/Instagram profile, Roblox group. Don't put Discord servers as the invites may expire"
				value={data.links}
				setValue={(links) => setValue("links", links)}
			/>
		</div>
	);
}
