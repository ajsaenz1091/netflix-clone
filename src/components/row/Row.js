import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import requests from '../../Requests'
import MoviePoster from '../movie-poster/MoviePoster'
import "./Row.css"

function Row({title, url}) {
    const [movies, setMovies] = useState([])

    useEffect(async () => {
        const request = await axios.get(url)
        console.log(request.data.results)
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