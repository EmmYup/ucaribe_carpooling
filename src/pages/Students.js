import React, { Component } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import StudentsList from '../components/StudentsList/index';
import Header from '../components/Header/index';

const students = [
    {
        id: 1,
        name: 'Pablo Melendez',
        profileUrl: '',
        destination: 'Region 4',
    },
    {
        id: 2,
        name: 'Erick Rogríguez',
        profileUrl: '',
        destination: 'Av La Luna',
    },
    {
        id: 3,
        name: 'Arely Salazar',
        profileUrl: '',
        destination: 'Plaza de las Américas',
    },
    {
        id: 4,
        name: 'Benito Bodoque',
        profileUrl: '',
        destination: 'Gran Plaza',
    },
];
class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 'Students',
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
                        title="Solicitudes"
                    />
                    <StudentsList students={students} />
                </IonContent>
            </IonPage>
        );
    }
}

export default Students;
