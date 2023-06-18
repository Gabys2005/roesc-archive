import OutLink from "../OutLink";

export default function Info() {
	return (
		<div className="box">
			<h1>Important: When you{"'"}re done making edits</h1>
			<p>
				RoESC Archive is a fully static site, meaning it{"'"}s impossible to edit the site live. When you make
				the changes you wanted to make, go to the <b>Output</b> tab and download all files found there. Then go
				to the #roesc-archive channel in the Gybasoft server and send those files in the appropriate thread.
			</p>
			<h1>Images</h1>
			<p>
				Once again, RoESC Archive is fully static so it{"'"}s just not possible to upload files. Some fields ask
				you to upload files, this is done just to get their name. When sending the files downloaded from Output,
				remember to include those images as well so I can upload them.
			</p>
			<h1>Switching between editors</h1>
			<p>
				If you want to add a broadcaster or a user while using another editor, make sure to switch to the right
				one in the tab bar here. Don{"'"}t go to the main editor website, as that will cause your changes to be
				lost (sorry!)
			</p>
			<h1>Markdown / Text Content / Written Content</h1>
			<p>Fields labeled as one of the above are markdown editors. You can use:</p>
			<ul>
				<li>*cursive*</li>
				<li>**bold**</li>
				<li>**strikethrough**</li>
				<li># Headers (also ##, ###, and so on)</li>
				<li>--- (horizontal line)</li>
				<li>
					<OutLink to="https://www.markdownguide.org/basic-syntax/">Full Guide</OutLink>
				</li>
			</ul>
			<p>You can see a live preview of your text to make it easier to use</p>
			<h1>Why isn{"'"}t RoESC Archive just a text editor, like other wikis?</h1>
			<p>
				Because having data organised like this allows me to generate other stuff with it (for example automatic
				country / user pages, records, etc.), as well as keep it consistent between RoESCs.
			</p>
			<h1>Questions</h1>
			<p>
				If you{"'"}re confused about something or you just have a question, you can ask it in Gybasoft #general
				or in my DMs. My Discord username is <div className="tag">.gabys</div>
			</p>
		</div>
	);
}
