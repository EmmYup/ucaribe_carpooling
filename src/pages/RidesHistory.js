import React, { Component } from 'react'

class RidesHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'RidesHistory',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default RidesHistory
