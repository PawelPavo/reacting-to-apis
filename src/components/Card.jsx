import React from 'react'

const Card = props => {
    return (
        <>
            <div className="card border-primary mb-3">
                <div className="card-header">{props.title}</div>
                <div className="card-body text-primary">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </>
    )

}

export default Card