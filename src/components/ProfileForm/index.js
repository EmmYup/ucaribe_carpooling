import React, { Component } from 'react';
import {
    IonAvatar,
    IonImg,
    IonItem,
    IonInput,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
} from '@ionic/react';
import { create } from 'ionicons/icons';
import { Wrap, AvatarContainer, Avatar } from './index.style';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Emmanuel',
            lastName: 'Yupit',
            email: '140300046@ucaribe.edu.mx',
            phone: 9999999999,
            disableFields: true,
        };
    }

    handleChange = e => {
        const {
            target: { name, value },
        } = e;
        this.setState({ [name]: value });
    };

    handleEdit = () => {
        this.setState({ disableFields: !this.state.disableFields });
    };

    render() {
        const { name, lastName, email, phone, disableFields } = this.state;
        const { type = 'student', carModel, licensePlate, color } = this.props;
        return (
            <>
                <AvatarContainer>
                    <Avatar>
                        <IonImg src="https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/p960x960/39165088_707855179556004_3115956180057325568_o.jpg?_nc_cat=100&_nc_ohc=9vbI8F-iOecAQn8XgxtmTcifwD7oFqJjgIQPvmmn5tWmlldqnSdx4nGuw&_nc_ht=scontent.fmid3-1.fna&oh=2a6da6a2d95c00ef15671d9305cfc96a&oe=5E80DCF9" />
                    </Avatar>
                </AvatarContainer>
                <Wrap>
                    <IonItem>
                        <IonInput
                            name="name"
                            type="text"
                            value={name}
                            placeholder="Nombre"
                            onIonChange={this.handleChange}
                            disabled={disableFields}
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            name="lastName"
                            type="text"
                            value={lastName}
                            placeholder="Apellidos"
                            onIonChange={this.handleChange}
                            disabled={disableFields}
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Email"
                            onIonChange={this.handleChange}
                            disabled={disableFields}
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            name="phone"
                            type="number"
                            value={phone}
                            placeholder="Teléfono"
                            onIonChange={this.handleChange}
                            disabled={disableFields}
                        ></IonInput>
                    </IonItem>
                    {type === 'driver' && (
                        <>
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
                        </>
                    )}
                    <IonButton
                        color="dark"
                        size="full"
                        disabled={disableFields}
                    >
                        Guardar
                    </IonButton>
                </Wrap>
                <IonFab
                    vertical="bottom"
                    horizontal="end"
                    slot="fixed"
                    onClick={this.handleEdit}
                >
                    <IonFabButton color="dark">
                        <IonIcon icon={create} />
                    </IonFabButton>
                </IonFab>
            </>
        );
    }
}

export default ProfileForm;
