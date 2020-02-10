import React from 'react'
import { FaFilm, FaInfoCircle } from 'react-icons/fa';

const MovieCard = props => {
    return (
        <>
            <div className="card border-primary mb-3">
                <div className="card-header shadow text-center"><FaFilm /></div>
                <div className="card-body shadow">
                    <h4> {props.title}</h4>
                    <p className="card-text text-secondary"><FaInfoCircle /> {props.description}</p>
                </div>
            </div>
        </>
    )
}
export default MovieCard