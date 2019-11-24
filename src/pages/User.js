import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'User',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default User
