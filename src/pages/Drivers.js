import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import DriversList from '../components/DriversList/index';
import Header from '../components/Header/index';

const drivers = [
    {
        id: 1,
        name: 'Emmanuel Pacheco Yupit',
        profileUrl:
            'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/p960x960/39165088_707855179556004_3115956180057325568_o.jpg?_nc_cat=100&_nc_ohc=9vbI8F-iOecAQn8XgxtmTcifwD7oFqJjgIQPvmmn5tWmlldqnSdx4nGuw&_nc_ht=scontent.fmid3-1.fna&oh=2a6da6a2d95c00ef15671d9305cfc96a&oe=5E80DCF9',
        destination: 'Plaza de las Américas',
        spacesLeft: 1,
    },
    {
        id: 2,
        name: 'Shamed Calderón Díaz',
        profileUrl:
            'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/s960x960/48186187_1987361514633925_9170820960209600512_o.jpg?_nc_cat=102&_nc_ohc=siptNqU2xjMAQkF3Ib1zZGSiDFrmor5-T5cT0cdmLOnGG-fFP3rau4oyA&_nc_ht=scontent.fmid3-1.fna&oh=ec9a66a59f209ba963099ebff362235f&oe=5E405422',
        destination: 'Instituto Tecnológico de Cancún',
        spacesLeft: 4,
    },
    {
        id: 3,
        name: 'Fernando Galindo Arroyo',
        profileUrl:
            'https://scontent.fmid3-1.fna.fbcdn.net/v/t31.0-8/p720x720/15590806_1299671343422608_9107419347701046884_o.jpg?_nc_cat=103&_nc_ohc=XFfRxN2e38cAQlYJt_U16IvJ-_ldi1j92k5imZM9i2jlpYWvm86XZQQfA&_nc_ht=scontent.fmid3-1.fna&oh=8ff5a86a786ef1ed60569696c2dfe584&oe=5E8ADC15',
        destination: 'Haciendas del Caribe',
        spacesLeft: 2,
    },
    {
        id: 4,
        name: 'Cristian Cauich Novelo',
        profileUrl:
            'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/17191387_1290973284283260_7997525942440933229_n.jpg?_nc_cat=104&_nc_ohc=wJQzWoGcuUsAQlkME-yfXPO3qhFe34aBPcTY8ds3wkDIesWwlOP9VeMkA&_nc_ht=scontent.fmid3-1.fna&oh=de4895daff92331cea1d704d82e29e7b&oe=5E7C2CAC',
        destination: 'Región 102',
        spacesLeft: 2,
    },
    {
        id: 5,
        name: 'Jacob Elías Torres',
        profileUrl:
            'https://scontent.fmid3-1.fna.fbcdn.net/v/t31.0-8/p960x960/10344335_10206229721365725_3156828175631796012_o.jpg?_nc_cat=103&_nc_ohc=Zq5glWtWfRoAQlenGnjft_3yo1He4tjpofrkMaw02pwptJGVuqQdNpvPA&_nc_ht=scontent.fmid3-1.fna&oh=6cb50d6dc560b86906f3e5b42d7a0edd&oe=5E88975F',
        destination: 'Av Andrés Quintana Roo',
        spacesLeft: 3,
    },
];

class Drivers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 'Drivers',
        };
    }

    handlePrevPage = () => {
        const { history } = this.props;
        history.goBack();
    };

    redirectToProfile = () => {
        const { history } = this.props;
        history.push('/profile/id');
    };

    redirectToAddress = () => {
        const { history } = this.props;
        history.push('/addresses/id');
    };

    render() {
        return (
            <IonPage>
                <IonContent>
                    <Header
                        handlePrevPage={this.handlePrevPage}
                        redirectToProfile={this.redirectToProfile}
                        redirectToAddress={this.redirectToAddress}
                        title="Rides"
                    />
                    <DriversList drivers={drivers} />
                </IonContent>
            </IonPage>
        );
    }
}

export default Drivers;
