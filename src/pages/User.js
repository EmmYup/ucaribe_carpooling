import React, { Component } from 'react'
import { IonContent } from '@ionic/react'
import UserType from '../components/UserType/index'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'User',
        }
    }

    render() {
        const { pagina } = this.state
        return (
            <IonContent>
                <UserType />
            </IonContent>
        )
    }
}

export default User
