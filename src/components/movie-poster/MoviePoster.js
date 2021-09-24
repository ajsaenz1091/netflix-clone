import React from 'react'
import './MoviePoster.css'

function MoviePoster({poster_path, name, title}) {
    const img_src =`https://image.tmdb.org/t/p/original/${poster_path}` 
    return (
        <div >
            <img
                className="row-poster" 
                src={img_src} 
                alt={name || title}
            />
        </div>
    )
}

export default MoviePoster