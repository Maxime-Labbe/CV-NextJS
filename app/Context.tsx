'use client';
import { createContext } from "react";
import { useState, useEffect } from "react"

export type AppContextType = {
    width: number;
    dark: boolean;
    setDark: (dark: boolean) => void;
}

const AppContext = createContext<AppContextType>({ width: 0, dark: true, setDark: () => {} });

function Context({ children }: { children: React.ReactNode }) {    
    const [width, setWidth] = useState(0);
    const [dark, setDark] = useState(true);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, [])

    return (
        <AppContext.Provider value={{ width, dark, setDark }}>{children}</AppContext.Provider>
    )
}

export { AppContext };
export default Context;