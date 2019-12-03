import React from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';
import { Wrap } from './index.style';

const DriverRegisterForm = ({ onDriverRegister }) => {
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
            <IonItem>
                <IonInput
                    name="carModel"
                    type="text"
                    placeholder="Modelo del Auto"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonInput
                    name="carKey"
                    type="text"
                    placeholder="Número de placas"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonInput
                    name="color"
                    type="text"
                    placeholder="Color del Auto"
                ></IonInput>
            </IonItem>
            <IonButton
                color="secondary"
                size="full"
                onClick={() => onDriverRegister()}
            >
                Continuar
            </IonButton>
        </Wrap>
    );
};

export default DriverRegisterForm;
