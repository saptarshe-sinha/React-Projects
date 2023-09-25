import React, { createContext, useContext} from "react";

// export const themeContext = React.createContext({})   // We can store default variable & functions

// We can use createContext directly as we imported createContext

export const ThemeContext = createContext ({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}

