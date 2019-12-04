import React from 'react';
import {
    IonList,
    IonItem,
    IonLabel,
    IonFab,
    IonFabButton,
    IonIcon,
} from '@ionic/react';
import { add } from 'ionicons/icons';

const AddressList = ({ addresses }) => {
    return (
        <>
            <IonList>
                {addresses.map(address => (
                    <IonItem key={address.id}>
                        <IonLabel>
                            <h2>{address.name}</h2>
                            <p>{address.destination}</p>
                        </IonLabel>
                    </IonItem>
                ))}
            </IonList>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton color="dark">
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
        </>
    );
};

export default AddressList;
