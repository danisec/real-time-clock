import React, { useState, useEffect } from 'react'

function FunctionApp() {
    const [date, setDate] = useState(new Date())

    function tick() {
        setDate(new Date())
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
    }, [tick])


    return (
        <>
            <h1>Realtime Clock function component</h1>

            <hr />

            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}

export default FunctionApp