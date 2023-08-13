import React, { useState } from 'react'
import HOC from './HOC'
const AComponent = ({ count, increment }) => {
    return (
        <>
            <button onClick={increment}>A {count} Click</button>
        </>
    )
}

export default HOC(AComponent, 2);