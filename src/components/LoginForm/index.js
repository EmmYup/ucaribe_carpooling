import React, { Component } from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';
import {
    Wrap,
    FormText,
    RegisterTextContainer,
    Img,
    TextsContainer,
} from './index.style';

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
                <Img
                    src="https://www.carrerasenlinea.mx/logos/original/logo-universidad-del-caribe.png"
                    alt=""
                />
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
                    color="dark"
                    expand="full"
                    onClick={this.handleLogin}
                >
                    LOGIN
                </IonButton>
                <TextsContainer>
                    <FormText>¿Olvidaste tu contraseña?</FormText>
                    <div>
                        <FormText>¿Nuevo Usuario?</FormText>
                        <RegisterTextContainer>
                            <FormText onClick={this.onRegister}>
                                REGISTRATE
                            </FormText>
                        </RegisterTextContainer>
                    </div>
                </TextsContainer>
            </Wrap>
        );
    }
}

export default LoginForm;
