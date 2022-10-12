import React from 'react'

export default function Button(props) {
    const styles = {
        backgroundColor: props.isClicked ? "#E1000F" : "white",
        color: props.isClicked ? "white" : "#E1000F" 
    }
    return (
        <div className="button" style={styles} onClick={props.handleClick}>
            {props.name}
        </div>
    )
}