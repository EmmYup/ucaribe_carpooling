import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
} from '@ionic/react';

const Header = ({ handlePrevPage, title }) => {
    return (
        <IonHeader>
            <IonToolbar color="secondary">
                <IonButtons slot="start">
                    <IonBackButton
                        onClick={() => handlePrevPage()}
                        defaultHref="/"
                    />
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
