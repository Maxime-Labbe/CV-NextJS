'use client';
import { createContext } from "react";
import { useState, useEffect } from "react"

export type AppContextType = {
    width: number;
}

const AppContext = createContext<AppContextType>({ width: 0 });

function Context({ children }: { children: React.ReactNode }) {    
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, [])

    return (
        <AppContext.Provider value={{ width }}>{children}</AppContext.Provider>
    )
}

export { AppContext };
export default Context;