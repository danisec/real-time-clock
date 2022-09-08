import React from 'react'

class ClassApp extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <>
                <h1>Realtime Clock class Component</h1>

                <hr />

                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </>
        )
    }
}

export default ClassApp
