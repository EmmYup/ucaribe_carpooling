import React, { Component } from 'react'
import StudentRegisterForm from '../components/StudentRegisterForm/index'
import DriverRegisterForm from '../components/DriverRegisterForm/index'
import { IonContent } from '@ionic/react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Register',
            userType: 'driver',
        }
    }

    render() {
        const { pagina, userType } = this.state
        return (
            <IonContent>
                {userType === 'driver' ? (
                    <DriverRegisterForm />
                ) : (
                    <StudentRegisterForm />
                )}
            </IonContent>
        )
    }
}

export default Register
