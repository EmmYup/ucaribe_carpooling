import React from 'react'
import {
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonItem,
    IonButton,
} from '@ionic/react'
import { Wrap, FormText, RegisterTextContainer } from './index.style'

const LoginForm = ({ onRegister, onLogin }) => {
    return (
        <Wrap>
            <IonItem>
                <IonInput
                    name="email"
                    type="email"
                    placeholder="Email"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonInput
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                ></IonInput>
            </IonItem>
            <IonButton
                color="secondary"
                expand="full"
                onClick={() => onLogin()}
            >
                LOGIN
            </IonButton>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <FormText>¿Olvidaste tu contraseña?</FormText>
                    </IonCol>
                    <IonCol size="6">
                        <IonRow>
                            <FormText>¿Nuevo Usuario?</FormText>
                        </IonRow>
                        <RegisterTextContainer>
                            <FormText onClick={() => onRegister()}>
                                REGISTRATE
                            </FormText>
                        </RegisterTextContainer>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </Wrap>
    )
}

export default LoginForm
