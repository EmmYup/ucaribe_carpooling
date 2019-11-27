import React, { Component } from 'react'
import { IonContent } from '@ionic/react'
import LoginForm from '../components/LoginForm/index'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onRegister = () => {
        const { history } = this.props
        history.push('/user')
    }

    onLogin = () => {
        const { history } = this.props
        history.push('/drivers')
    }

    render() {
        return (
            <IonContent>
                <LoginForm
                    onRegister={this.onRegister}
                    onLogin={this.onLogin}
                />
            </IonContent>
        )
    }
}

export default Login
