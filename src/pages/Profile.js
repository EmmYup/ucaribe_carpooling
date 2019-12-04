import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ProfileForm from '../components/ProfileForm/index';
import Header from '../components/Header/index';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handlePrevPage = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        return (
            <IonPage>
                <IonContent>
                    <Header
                        handlePrevPage={this.handlePrevPage}
                        title="Mi Perfil"
                    />
                    <ProfileForm />
                </IonContent>
            </IonPage>
        );
    }
}

export default Profile;
