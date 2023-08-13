import React, { useState } from 'react'
import HOC from './HOC'
const BComponent = ({ count, increment }) => {

    return (
        <>
            <button onMouseOver={increment}>B {count} MouseOver</button>
        </>
    )
}

export default HOC(BComponent, 5)