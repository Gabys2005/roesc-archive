import { getMediaImage } from "../../modules/utils";
import MediaImage from "../MediaImage";

export default function LogoImage({ logos }) {
	const usesDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const lightVersion = getMediaImage(logos, "Light Logo");
	const darkVersion = getMediaImage(logos, "Dark Logo");

	if (!lightVersion) {
		return <MediaImage link={darkVersion} />;
	}
	if (!darkVersion) {
		return <MediaImage link={lightVersion} />;
	}

	if (usesDarkMode) {
		return <MediaImage link={lightVersion} />;
	}
	return <MediaImage link={darkVersion} />;
}
