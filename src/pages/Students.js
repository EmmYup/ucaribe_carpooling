import React, { Component } from 'react'

class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Students',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default Students
