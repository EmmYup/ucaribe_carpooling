import React from 'react'
import { IonInput, IonItem, IonButton } from '@ionic/react'
import { Wrap } from './index.style'

const StudentRegisterForm = () => {
    return (
        <Wrap>
            <IonItem>
                <IonInput
                    name="name"
                    type="text"
                    placeholder="Nombre"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonInput
                    name="lastName"
                    type="text"
                    placeholder="Apellidos"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonInput
                    name="email"
                    type="email"
                    placeholder="Email"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonInput
                    name="phone"
                    type="number"
                    placeholder="Teléfono"
                ></IonInput>
            </IonItem>
            <IonButton color="secondary" size="full">
                Continuar
            </IonButton>
        </Wrap>
    )
}

export default StudentRegisterForm
