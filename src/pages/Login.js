import React, { Component } from 'react'
import { IonContent } from '@ionic/react'
import LoginForm from '../components/LoginForm/index'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Login',
        }
    }
    onRegister = () => {
        const { history } = this.props
        history.push('/register')
    }

    onLogin = () => {
        const { history } = this.props
        history.push('/rides')
    }

    render() {
        const { pagina } = this.state
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
