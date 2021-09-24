import React from 'react'

function MoviePoster({poster_path, name, title}) {
    return (
        <>
            <img src={poster_path} alt={name || title}/>
        </>
    )
}

export default MoviePoster
