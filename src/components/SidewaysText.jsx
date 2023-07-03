export default function SidewaysText({ children }) {
	return <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{children}</span>;
}
