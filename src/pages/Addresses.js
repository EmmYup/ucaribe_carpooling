import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../components/Header/index';
import AddressList from '../components/AddressList/index';

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handlePrevPage = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        return (
            <IonPage>
                <IonContent>
                    <Header
                        handlePrevPage={this.handlePrevPage}
                        title="Mis Direcciones"
                    />
                    <AddressList />
                </IonContent>
            </IonPage>
        );
    }
}

export default Addresses;
