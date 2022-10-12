import React from 'react';

export default function Priduct(props) {
    return (
        <div className="product">
            <img src={props.imgUrl}/>
            <h4>{props.name}</h4>
            <p1>{props.capacity}</p1>
            <p1>{props.price}</p1>
        </div>
    )
}