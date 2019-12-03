import React from 'react';
import { connect } from 'react-redux';
import { IonPage, IonContent } from '@ionic/react';
import LoginForm from '../components/LoginForm/index';
import dispatcher from '../redux/Login/dispatcher';

const Login = props => {
    return (
        <IonPage>
            <IonContent>
                <LoginForm {...props} />
            </IonContent>
        </IonPage>
    );
};

export default connect(null, dispatcher)(Login);
