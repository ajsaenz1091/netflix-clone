import React, { useContext } from 'react'
import { MovieContext } from './contexts/MovieContext'
import Row from './Row'

function Rows() {
    const { requests } = useContext(MovieContext)
    return (
        <div>
        {
            Object.entries(requests).map(([key,val]) => <Row title={key.split("fetch")[1].match(/[A-Z][a-z]+/g).join(" ")} url={val}/>)
        }
        </div>
    )
}

export default Rows
