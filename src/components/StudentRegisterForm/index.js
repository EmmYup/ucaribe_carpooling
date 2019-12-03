import React, { Component } from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';
import { Wrap } from './index.style';

class StudentRegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
        };
    }

    handleChange = e => {
        const {
            target: { name, value },
        } = e;
        this.setState({ [name]: value });
    };

    handleRegister = () => {
        const {
            props: { onRegister },
            state: { name, lastName, email, phone, password },
        } = this;
        onRegister({
            name,
            lastName,
            email,
            phone,
            password,
            type: 'student',
        });
    };

    render() {
        const { name, lastName, email, phone, password } = this.state;
        return (
            <Wrap>
                <IonItem>
                    <IonInput
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Nombre"
                        onIonChange={this.handleChange}
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="lastName"
                        type="text"
                        value={lastName}
                        placeholder="Apellidos"
                        onIonChange={this.handleChange}
                    ></IonInput>
                </IonItem>
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
                        name="phone"
                        type="number"
                        value={phone}
                        placeholder="Teléfono"
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
                <IonButton color="secondary" size="full">
                    Continuar
                </IonButton>
            </Wrap>
        );
    }
}

export default StudentRegisterForm;
