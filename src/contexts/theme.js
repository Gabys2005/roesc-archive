import { createContext } from "react";

const ThemeContext = createContext("light");
const ThemeSwitcherContext = createContext({});

export { ThemeContext, ThemeSwitcherContext };
