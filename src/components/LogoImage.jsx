import { useContext } from "react";
import { getMediaImage } from "../modules/utils";
import MediaImage from "./MediaImage";
import { ThemeContext } from "../contexts/theme";

export default function LogoImage({ logos }) {
	const theme = useContext(ThemeContext);
	const lightVersion = getMediaImage(logos, "Light Logo");
	const darkVersion = getMediaImage(logos, "Dark Logo");

	if (!lightVersion) {
		return <MediaImage link={darkVersion} />;
	}
	if (!darkVersion) {
		return <MediaImage link={lightVersion} />;
	}

	if (theme === "dark") {
		return <MediaImage link={lightVersion} />;
	}
	return <MediaImage link={darkVersion} />;
}
