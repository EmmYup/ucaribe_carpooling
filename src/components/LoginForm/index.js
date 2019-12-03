import React, { Component } from 'react';
import {
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonItem,
    IonButton,
} from '@ionic/react';
import { Wrap, FormText, RegisterTextContainer } from './index.style';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = e => {
        const {
            target: { name, value },
        } = e;
        this.setState({ [name]: value });
    };

    handleLogin = () => {
        const {
            props: { onLogin },
            state: { email, password },
        } = this;
        onLogin({ email, password });
    };

    onRegister = () => {
        const { history } = this.props;
        history.push('/user');
    };

    render() {
        const { email, password } = this.state;
        return (
            <Wrap>
                <IonItem>
                    <IonInput
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Email"
                        onIonChange={this.handleChange}
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Contraseña"
                        onIonChange={this.handleChange}
                    ></IonInput>
                </IonItem>
                <IonButton
                    color="secondary"
                    expand="full"
                    onClick={this.handleLogin}
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
                                <FormText onClick={this.onRegister}>
                                    REGISTRATE
                                </FormText>
                            </RegisterTextContainer>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </Wrap>
        );
    }
}

export default LoginForm;
