import { useState } from "react";
import OutLink from "../OutLink";
import Button from "../Button";

export default function Info({ optional }) {
	const [visible, setVisible] = useState(!optional);

	return (
		<div className="box">
			{optional && (
				<Button onClick={() => setVisible(!visible)}>
					{visible ? "Hide" : "Show"} Basic Information About Editing
				</Button>
			)}
			{visible && (
				<>
					<h2>Important: When you{"'"}re done making edits</h2>
					<p>
						RoESC Archive is a fully static site, meaning it{"'"}s impossible to edit the site live. When
						you make the changes you wanted to make, go to the <b>Output</b> section and download all files
						found there. Then go to the #roesc-archive channel in the Gybasoft server and send those files
						in the appropriate thread.
					</p>
					<h2>You don{"'"}t have to edit everything at once</h2>
					<p>
						You can download the files, take a break and import them later. If you don{"'"}t know the answer
						to some of the fields or you{"'"}re just too lazy to fill them out right now, leave them empty.
						Maybe someone else will do it for you.
					</p>
					<h2>Images</h2>
					<p>
						Once again, RoESC Archive is fully static so it{"'"}s just not possible to upload files. Some
						fields ask you to upload files, this is done just to get their name. When sending the files
						downloaded from Output, remember to include those images as well so I can upload them.
					</p>
					<h2>Switching between editors</h2>
					<p>
						If you want to add a broadcaster or a user while using another editor, make sure to switch to
						the right one in the tab bar here. Don{"'"}t go to the main editor website, as that will cause
						your changes to be lost (sorry!)
					</p>
					<h2>Markdown / Text Content / Written Content</h2>
					<p>Fields labeled as one of the above are markdown editors. You can use:</p>
					<ul>
						<li>*cursive*</li>
						<li>**bold**</li>
						<li>~~strikethrough~~</li>
						<li># Headers (also ##, ###, and so on)</li>
						<li>--- (horizontal line)</li>
						<li>[name](link) - named links</li>
						<li>
							<OutLink to="https://www.markdownguide.org/basic-syntax/">Full Guide</OutLink>
						</li>
					</ul>
					<p>You can see a live preview of your text to make it easier to use</p>
					<p>
						Some pages allow you to insert generated content (like tables) into your markdown content. They
						{"'"}re going to be listed above the markdown box. You insert them like this:{" "}
					</p>
					<pre>
						{"<"}SomeTable /{">"}
					</pre>
					<p>
						Those components often use generated content which isn{"'"}t available at the time of editing,
						so an example will be displayed instead
					</p>
					<h2>Why isn{"'"}t RoESC Archive just a text editor, like other wikis?</h2>
					<p>
						Because having data organised like this allows me to generate other stuff with it (for example
						automatic country / user pages, records, etc.), as well as keep it consistent between RoESCs.
					</p>
					<h2>Questions</h2>
					<p>
						If you{"'"}re confused about something or you just have a question, you can ask it in Gybasoft
						#general or in my DMs. My Discord username is <span className="tag">.gabys</span>
					</p>
				</>
			)}
		</div>
	);
}
