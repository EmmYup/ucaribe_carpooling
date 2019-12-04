import React from 'react';
import { IonAlert } from '@ionic/react';

const Alert = ({ title, message, closeAlert, show }) => {
    return (
        <IonAlert
            isOpen={show}
            onDidDismiss={closeAlert}
            subHeader={title}
            message={message}
            buttons={['OK']}
        />
    );
};

export default Alert;
