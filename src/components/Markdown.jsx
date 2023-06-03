import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ value }) {
	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h1: "h2", h2: "h3", h4: "h5", h5: "h6" }}>
			{value}
		</ReactMarkdown>
	);
}
