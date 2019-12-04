import React from 'react';
import { connect } from 'react-redux';
import StudentRegisterForm from '../components/StudentRegisterForm/index';
import DriverRegisterForm from '../components/DriverRegisterForm/index';
import Header from '../components/Header/index';
import { IonPage, IonContent } from '@ionic/react';
import dispatcher from '../redux/Register/dispatcher';

const Register = props => {
    const { type } = props.match.params;
    const handlePrevPage = () => {
        const { history } = props;
        history.goBack();
    };
    return (
        <IonPage>
            <IonContent>
                <Header handlePrevPage={handlePrevPage} />
                {type === 'driver' ? (
                    <DriverRegisterForm {...props} />
                ) : (
                    <StudentRegisterForm {...props} />
                )}
            </IonContent>
        </IonPage>
    );
};

export default connect(null, dispatcher)(Register);
