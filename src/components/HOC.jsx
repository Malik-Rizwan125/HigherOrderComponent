import React, { useState } from 'react'

const HOC = (WrappedComponent, num) => {
    const HOC = () => {  // this is common logic
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + num)
        }

        return (
            <>
                <WrappedComponent count={count} increment={increment} />
            </>
        )
    }
    return HOC
}


export default HOC