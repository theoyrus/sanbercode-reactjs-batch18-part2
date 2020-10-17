import React, { useState, useEffect, createContext } from 'react'

export const TemaContext = createContext()
export const TemaProvider = (props) => {
    const [tema, setTema] = useState(null)

    useEffect(() => {
        if (tema === null) {
            setTema('light')
        }
    }, [tema])

    return (
        <TemaContext.Provider value={{
            AppTemaContext: [tema, setTema],
        }}>
            {props.children}
        </TemaContext.Provider>
    )
}