
import { createContext,useState,useContext } from "react"

const ThemeContext=createContext()

// eslint-disable-next-line react/prop-types
export const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState("light")

    const toggleTheme=()=>{
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className={theme==="light"?"light-theme":"dark-theme"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>useContext(ThemeContext)