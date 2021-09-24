import React, { useState, useEffect } from 'react'
import axios from './axios'

function Row({title, url}) {
    const [movies, setMovies] = useState([])

    // const fetchMovies = async () => {
    //     const request = await axios.get(url)
    //     setMovies(request.data.results)
    // }

    useEffect(async () => {
        const request = await axios.get(url)
        setMovies(request.data.results)
    },[url])

    return (
        <div>
            <h2>{title}</h2>
            {/* container -> posters*/}
        </div>
    )
}

export default Row
