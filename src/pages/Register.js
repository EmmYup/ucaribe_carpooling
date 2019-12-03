import React, { Component } from 'react';
import StudentRegisterForm from '../components/StudentRegisterForm/index';
import DriverRegisterForm from '../components/DriverRegisterForm/index';
import { IonPage, IonContent } from '@ionic/react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 'Register',
            userType: 'driver',
        };
    }

    onDriverRegister = () => {
        console.log('holi');
        const { history } = this.props;
        history.push('/students');
    };
    onStudentRegister = () => {
        const { history } = this.props;
        history.push('/drivers');
    };

    render() {
        const { type } = this.props.match.params;
        return (
            <IonPage>
                <IonContent>
                    {type === 'driver' ? (
                        <DriverRegisterForm
                            onDriverRegister={this.onDriverRegister}
                        />
                    ) : (
                        <StudentRegisterForm
                            onStudentRegister={this.onStudentRegister}
                        />
                    )}
                </IonContent>
            </IonPage>
        );
    }
}

export default Register;
