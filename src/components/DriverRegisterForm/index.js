import React, { Component } from 'react';
import { IonInput, IonItem, IonButton } from '@ionic/react';
import { Wrap } from './index.style';

class DriverRegisterForm extends Component {
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
            state: {
                name,
                lastName,
                email,
                phone,
                carModel,
                licensePlate,
                color,
                password,
            },
        } = this;
        onRegister({
            name,
            lastName,
            email,
            phone,
            carModel,
            licensePlate,
            color,
            password,
            type: 'driver',
        });
    };

    render() {
        const {
            name,
            lastName,
            email,
            phone,
            carModel,
            licensePlate,
            color,
            password,
        } = this.state;
        return (
            <Wrap>
                <IonItem>
                    <IonInput
                        name="name"
                        type="text"
                        value={name}
                        onIonChange={this.handleChange}
                        placeholder="Nombre"
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="lastName"
                        type="text"
                        value={lastName}
                        onIonChange={this.handleChange}
                        placeholder="Apellidos"
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="email"
                        type="email"
                        value={email}
                        onIonChange={this.handleChange}
                        placeholder="Email"
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="phone"
                        type="number"
                        value={phone}
                        onIonChange={this.handleChange}
                        placeholder="Teléfono"
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="carModel"
                        type="text"
                        value={carModel}
                        onIonChange={this.handleChange}
                        placeholder="Modelo del Auto"
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="licensePlate"
                        type="text"
                        value={licensePlate}
                        onIonChange={this.handleChange}
                        placeholder="Número de placas"
                    ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput
                        name="color"
                        type="text"
                        value={color}
                        onIonChange={this.handleChange}
                        placeholder="Color del Auto"
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
                    size="full"
                    onClick={this.handleRegister}
                >
                    Continuar
                </IonButton>
            </Wrap>
        );
    }
}

export default DriverRegisterForm;
