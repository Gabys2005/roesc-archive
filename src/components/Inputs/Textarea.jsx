export default function Textarea({ disabled, value, className, setValue, style }) {
	return (
		<textarea
			className={`textarea ${className}`}
			rows="20"
			disabled={disabled}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			style={style}
		></textarea>
	);
}
