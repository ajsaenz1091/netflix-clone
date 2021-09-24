import React, { useState, useEffect } from 'react'
import axios from './axios'
import MoviePoster from './MoviePoster'

function Row({title, url}) {
    const [movies, setMovies] = useState([])

    useEffect(async () => {
        const request = await axios.get(url)
        setMovies(request.data.results)
    },[url])

    const renderRowPosters = () => {
        return movies.map(movie => <MoviePoster key={movie.id} {...movie}/>)
    }

    console.table(movies) // This logs a Table instead of an Object COOOOL

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row-posters">
                {renderRowPosters()}
            </div>
            {/* container -> posters*/}
        </div>
    )
}

export default Row
