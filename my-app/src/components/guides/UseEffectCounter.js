import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
    }, []);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h1>Time is {time}</h1>
        </div>
    )
}

export default UseEffectCounter