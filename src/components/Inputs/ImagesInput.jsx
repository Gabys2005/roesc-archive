import Button from "../Button";
import InputHeader from "./Util/InputHeader";
import { FaUpload } from "react-icons/fa";

export default function ImagesInput({ value, setValue, name, description, requiredValues }) {
	return (
		<InputHeader name={name} description={description}>
			{value.map((image, i) => (
				<div className="field has-addons" key={i}>
					<div className="control is-expanded">
						<input
							className="input"
							type="text"
							value={image.name}
							disabled={requiredValues.indexOf(image.name) > -1}
							onChange={(e) =>
								setValue(value.map((r, i2) => (i2 !== i ? r : { ...r, name: e.target.value })))
							}
							placeholder="Name"
						/>
					</div>
					<div className="control">
						<div className="button is-static">:</div>
					</div>
					<div className="control is-expanded">
						<div className="file has-name is-fullwidth">
							<label className="file-label">
								<input
									className="file-input"
									type="file"
									name="resume"
									onChange={(e) =>
										setValue(
											value.map((r, i2) =>
												i2 !== i ? r : { ...r, link: e.target.files[0].name }
											)
										)
									}
								/>
								<span className="file-cta">
									<span className="file-icon">
										<FaUpload />
									</span>
									<span className="file-label">Choose a file…</span>
								</span>
								<span className="file-name">{image.link}</span>
							</label>
						</div>
					</div>
					{requiredValues.indexOf(image.name) === -1 && (
						<div className="control">
							<Button color="danger" onClick={() => setValue(value.filter((r, i2) => i2 !== i))}>
								X
							</Button>
						</div>
					)}
				</div>
			))}
			<Button onClick={() => setValue([...value, { name: "", link: "" }])}>Add Another</Button>
		</InputHeader>
	);
}
