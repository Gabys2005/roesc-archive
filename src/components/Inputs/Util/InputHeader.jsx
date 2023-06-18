export default function InputHeader({ name, description, children }) {
	return (
		<div className="field">
			<label className="label">
				{name} <span className="has-text-grey has-text-weight-normal">{description && `- ${description}`}</span>
			</label>
			{children}
		</div>
	);
}
