import React, { Component } from 'react'

class Rides extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Rides',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default Rides
