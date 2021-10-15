import React, { useContext } from 'react'
// import { MovieContext } from './contexts/MovieContext'
import Row from './components/row/Row'
import requests from './Requests';

function Rows() {
    // const { requests } = useContext(MovieContext)
    return (
        <div>
        {
            // Object.entries(requests).map(([key,val]) => <Row title={key.split("fetch")[1].match(/[A-Z][a-z]+/g).join(" ")} url={val}/>)
        }
            <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals}/>
            <Row title="Trending now" url={requests.fetchTrending}/>
            <Row title="Popular" url={requests.fetchTopRated}/>
            <Row title="Action" url={requests.fetchActionMovies}/>
            <Row title="Comedy" url={requests.fetchComedyMovies}/>
            <Row title="Horror" url={requests.fetchHorrorMovies}/>
            <Row title="Romance" url={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" url={requests.fetchDocumentaries}/>
        </div>
    )
}

export default Rows
