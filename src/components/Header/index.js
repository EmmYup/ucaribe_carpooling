import React, { useState } from 'react';
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonActionSheet,
    IonIcon,
} from '@ionic/react';
import { contact, closeCircle, home } from 'ionicons/icons';

const Header = ({
    handlePrevPage,
    redirectToProfile,
    redirectToAddress,
    title,
}) => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    return (
        <IonHeader>
            <IonToolbar color="secondary">
                <IonButtons slot="start">
                    {title === 'Rides' || title === 'Solicitudes' ? (
                        <IonIcon
                            icon={contact}
                            size="large"
                            onClick={() => setShowActionSheet(true)}
                        />
                    ) : (
                        <IonBackButton
                            onClick={() => handlePrevPage()}
                            defaultHref="/"
                        />
                    )}
                </IonButtons>

                <IonActionSheet
                    isOpen={showActionSheet}
                    onDidDismiss={() => setShowActionSheet(false)}
                    buttons={[
                        {
                            text: 'Mi Perfil',
                            icon: contact,
                            handler: () => {
                                redirectToProfile();
                            },
                        },

                        {
                            text: 'Mis Direcciones',
                            icon: home,
                            handler: () => {
                                redirectToAddress();
                            },
                        },
                        {
                            text: 'Cancel',
                            icon: closeCircle,
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            },
                        },
                    ]}
                ></IonActionSheet>

                {/* <IonModal isOpen={showModal}>
                    <p>This is modal content</p>
                    <IonButton color="dark" expand="full">
                        Mis Direcciones
                    </IonButton>
                    <IonButton
                        color="dark"
                        expand="full"
                        onClick={() => redirectToProfile()}
                    >
                        Mi Perfil
                    </IonButton>
                    <IonButton onClick={() => setShowModal(false)}>
                        Close Modal
                    </IonButton>
                </IonModal> */}

                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
