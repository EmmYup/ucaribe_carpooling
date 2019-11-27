import React, { Component } from 'react'
import { IonContent } from '@ionic/react'
import UserType from '../components/UserType/index'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleUserType = type => {
        const { history } = this.props
        history.push(`/register/${type}`)
    }

    render() {
        return (
            <IonContent>
                <UserType handleUserType={this.handleUserType} />
            </IonContent>
        )
    }
}

export default User
