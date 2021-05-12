import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button style={props.style}>{props.name}</button>
        </div>
    )
}
