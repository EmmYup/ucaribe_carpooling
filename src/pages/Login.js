import React from 'react';
import { connect } from 'react-redux';
import { IonPage, IonContent } from '@ionic/react';
import LoginForm from '../components/LoginForm/index';
import Alert from '../components/Alert/index';
import dispatcher from '../redux/Login/dispatcher';
import selectors from '../redux/Login/selectors';

const Login = props => {
    return (
        <IonPage>
            <IonContent color="secondary">
                <Alert
                    title="Error"
                    message="Credenciales invalidas"
                    closeAlert={props.setAlert}
                    show={props.showAlert}
                />
                <LoginForm {...props} />
            </IonContent>
        </IonPage>
    );
};

export default connect(selectors.propsSelector, dispatcher)(Login);
