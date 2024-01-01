import React, {useContext, useState, useEffect} from "react";
import PropTypes from 'prop-types'


const ThemeContext = React.createContext();

const useTheme = ()=>{
    const {theme} = useContext(ThemeContext);
    return theme
}

const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState("dark");

    useEffect(()=>{

        if(theme==='dark'){
            document.querySelector('body').classList.add('dark');
        }
        else document.querySelector('body').classList.remove('dark');

    }, [theme])

    const handleTheme = ()=>{
        setTheme(prev=>prev==="dark"?"light":"dark");
    }

    return(
    <>
    <ThemeContext.Provider value={{theme:theme}}>
        <div className="dark:text-white text-black relative h-screen w-full">
            {children}
        </div>
        <button className="fixed bottom-9 right-9 p-4 text-lg rounded-full dark:bg-slate-50 bg-gray-700"
        onClick={handleTheme}
        >
            {theme==='dark'?"🌞":"🌚"}

        </button>
    </ThemeContext.Provider>
    
    </>)
}

ThemeProvider.propTypes = {
    children: PropTypes.any,
}

export { useTheme } // eslint-disable-line
export default ThemeProvider;
