import Button from "../Button";
import InputHeader from "./Util/InputHeader";

export default function BroadcasterInput({ broadcasters, value, setValue, name, description }) {
	return (
		<div>
			<InputHeader name={name} description={description}>
				{value.map((broadcasterId, i) => (
					<div key={i} className="field has-addons">
						<div className="control select is-fullwidth">
							<select
								value={broadcasterId}
								onChange={(e) => setValue(value.map((r, i2) => (i2 !== i ? r : e.target.value)))}
							>
								<option default hidden>
									Select
								</option>
								{broadcasters
									.sort((a, b) => a.name.localeCompare(b.name))
									.map((broadcaster) => (
										<option key={broadcaster.id} value={broadcaster.id}>
											{broadcaster.name} ({broadcaster.shortName})
										</option>
									))}
							</select>
						</div>
						<div className="control">
							<Button color="danger" onClick={() => setValue(value.filter((_, i2) => i !== i2))}>
								X
							</Button>
						</div>
					</div>
				))}
			</InputHeader>
			<Button onClick={() => setValue([...value, ""])}>Add Another</Button>
		</div>
	);
}
