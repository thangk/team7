
import { createContext, useContext, useState } from 'react'




const ThemeContext = createContext()


export const useTheme = () => {
    return useContext(ThemeContext)
}



export const ThemeContextProvider = ({ children }) => {


    const [currentTheme, setCurrentTheme] = useState('white')

    const value = {
        currentTheme,
        setCurrentTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}