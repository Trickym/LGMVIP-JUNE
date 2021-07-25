import React from 'react'

export const Card = (props) => {
    return (
        <div>
            <img  src = {props.img}/>
            <h2>{props.fname} {props.lname}</h2>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Card;
