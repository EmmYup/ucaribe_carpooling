import React from 'react'
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react'
import { Wrap } from './index.style'

const UserType = ({ handleUserType }) => {
    return (
        <Wrap>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <IonButton
                            size="full"
                            color="secondary"
                            onClick={() => handleUserType('driver')}
                        >
                            Aventador
                        </IonButton>
                    </IonCol>
                    <IonCol size="12">
                        <IonButton
                            size="full"
                            color="secondary"
                            onClick={() => handleUserType('student')}
                        >
                            Aventado
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </Wrap>
    )
}

export default UserType
