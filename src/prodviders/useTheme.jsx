import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw Error('useTheme must be used within a ThemeProvider')
    }
}