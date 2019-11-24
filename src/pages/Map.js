import React, { Component } from 'react'

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Map',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default Map
