import React from 'react'

// no state
// no methods

export default function House({name, address, city, state, zip, deleteHouse}){
    return (
        <div className="house">
            <p>{name}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
            <button onClick={deleteHouse}>Delete</button>
        </div>
    )
}
