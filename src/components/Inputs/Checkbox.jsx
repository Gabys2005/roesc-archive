export default function Checkbox({ checked, onChange, label, size, border }) {
	const sizeClass = size === "small" ? "is-small" : "";
	const borderClass = border ? "input" : "";

	return (
		<label className={`b-checkbox checkbox ${borderClass} ${sizeClass}`}>
			<input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
			<span className="check"></span>
			<span className="control-label">{label}</span>
		</label>
	);
}
