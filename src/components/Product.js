import React from 'react';

export default function Product(props) {
    return (
        <div className="product">
            <img src={props.imgUrl}/>
            <h4>{props.name}</h4>
            <p>{props.capacity}</p>
            <p>{props.price}</p>
        </div>
    )
}