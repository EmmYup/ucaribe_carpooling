import React from 'react';
import { connect } from 'react-redux';
import { IonPage, IonContent } from '@ionic/react';
import LoginForm from '../components/LoginForm/index';
import Alert from '../components/Alert/index';
import dispatcher from '../redux/Login/dispatcher';

const Login = props => {
    console.log(props);

    return (
        <IonPage>
            <IonContent color="secondary">
                <Alert title="Error" message="Credenciales invalidas" />
                <LoginForm {...props} />
            </IonContent>
        </IonPage>
    );
};

export default connect(null, dispatcher)(Login);
