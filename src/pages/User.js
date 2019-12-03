import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import UserType from '../components/UserType/index';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleUserType = type => {
        const { history } = this.props;
        history.push(`/register/${type}`);
    };

    render() {
        return (
            <IonPage>
                <IonContent>
                    <UserType handleUserType={this.handleUserType} />
                </IonContent>
            </IonPage>
        );
    }
}

export default User;
