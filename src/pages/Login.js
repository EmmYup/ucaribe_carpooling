import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Login',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default Login
