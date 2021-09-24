import React, { createContext, useState } from 'react'
import requests from '../Requests';
export const MovieContext = createContext();

export default function MovieContextProvider(props) {
    const [state, setState] = useState({
        requests: requests
    })
    return (
        <MovieContext.Provider value={{...state}}>
            {props.children}
        </MovieContext.Provider>
    )
}
