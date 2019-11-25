import React, { Component } from 'react'
import { IonContent } from '@ionic/react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Register',
        }
    }

    render() {
        const { pagina } = this.state
        return <IonContent>{`Hola Mundo! estas en: ${pagina}`}</IonContent>
    }
}

export default Register
