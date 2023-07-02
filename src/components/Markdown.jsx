import { default as MarkdownToJSX } from "markdown-to-jsx";

export default function Markdown({ value, overrides }) {
	return (
		<MarkdownToJSX
			options={{
				overrides: {
					h1: { component: "h2" },
					h2: { component: "h3" },
					h3: { component: "h4" },
					h4: { component: "h5" },
					h5: { component: "h6" },
					...overrides,
				},
			}}
		>
			{value || ""}
		</MarkdownToJSX>
	);
}
