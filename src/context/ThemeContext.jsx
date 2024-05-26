import { useState, createContext,useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "../App.jsx"
const ThemeContext = createContext()

export const ThemeContextProvider =({children}) =>{
    const [mode, setMode] = useState("light");
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
      <ThemeContext.Provider value={{mode,setMode,openDrawer,setOpenDrawer}}>
        {children}
      </ThemeContext.Provider>
    );
  }

  export const useThemeContext = () => {
    return useContext(ThemeContext);
  };