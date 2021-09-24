import React from 'react'

function MoviePoster({poster_path, name, title}) {
    const img_src =`https://image.tmdb.org/t/p/original/${poster_path}` 
    return (
        <>
            <img src={img_src} alt={name || title}/>
        </>
    )
}

export default MoviePoster
