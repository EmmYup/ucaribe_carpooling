import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import UserType from '../components/UserType/index';
import Header from '../components/Header/index';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleUserType = type => {
        const { history } = this.props;
        history.push(`/register/${type}`);
    };

    handlePrevPage = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        return (
            <IonPage>
                <IonContent>
                    <Header handlePrevPage={this.handlePrevPage} />
                    <UserType handleUserType={this.handleUserType} />
                </IonContent>
            </IonPage>
        );
    }
}

export default User;
