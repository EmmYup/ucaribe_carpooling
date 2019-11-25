import React from 'react'
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react'
import { Wrap } from './index.style'

const UserType = () => {
    return (
        <Wrap>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <IonButton size="full">Aventador</IonButton>
                    </IonCol>
                    <IonCol size="12">
                        <IonButton size="full">Aventado</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </Wrap>
    )
}

export default UserType
