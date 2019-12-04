import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../components/Header/index';
import AddressList from '../components/AddressList/index';

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [
                { id: 1, name: 'Casa', destination: 'Region 510' },
                {
                    id: 2,
                    name: 'Casa de doña Chona',
                    destination: 'Plaza de toros',
                },
                {
                    id: 3,
                    name: 'Plaza Américas',
                    destination: 'Plaza de las Américas',
                },
            ],
        };
    }

    handlePrevPage = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        const { addresses } = this.state;
        return (
            <IonPage>
                <IonContent>
                    <Header
                        handlePrevPage={this.handlePrevPage}
                        title="Mis Direcciones"
                    />
                    <AddressList addresses={addresses} />
                </IonContent>
            </IonPage>
        );
    }
}

export default Addresses;
