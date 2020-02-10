import React from 'react'
import { FaUserAlt } from 'react-icons/fa';

const PeopleCard = props => {
    return (
        <>
            <div className="card border-primary mb-3 shadow">
                <div className="card-header text-center"><FaUserAlt /></div>
                <ul className="list-group list-group-flush shadow">
                    <li className="list-group-item">Name: {props.name}</li>
                    <li className="list-group-item">Age: {props.age}</li>
                    <li className="list-group-item">Gender: {props.gender}</li>
                    <li className="list-group-item"><a target="_blank" rel="noopener noreferrer" href={"http://ghibliapi.herokuapp.com/people/" + props.id}>More info - Get JSON</a></li>
                </ul>
            </div>
        </>
    )
}
export default PeopleCard