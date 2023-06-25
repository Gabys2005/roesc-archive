export default function BroadcasterList({ selected, setSelected, broadcasters }) {
	return (
		<div className="select is-fullwidth">
			<select value={selected} onChange={(e) => setSelected(e.target.value)}>
				<option value="">Select...</option>
				{broadcasters.map((broadcasterData) => (
					<option value={broadcasterData.id} key={broadcasterData.id}>
						{broadcasterData.name} ({broadcasterData.shortName})
					</option>
				))}
			</select>
		</div>
	);
}
