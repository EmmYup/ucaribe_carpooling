import React, { useState } from 'react';
import { IonAlert } from '@ionic/react';

const Alert = ({ title, message }) => {
    const [showAlert1, setShowAlert1] = useState(false);
    return (
        <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            subHeader={title}
            message={message}
            buttons={['OK']}
        />
    );
};

export default Alert;
