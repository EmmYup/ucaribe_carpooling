import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Register',
        }
    }

    render() {
        const { pagina } = this.state
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>
    }
}

export default Register
