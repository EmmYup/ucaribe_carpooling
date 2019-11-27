import React, { Component } from 'react'
import { IonContent } from '@ionic/react'
import StudentsList from '../components/StudentsList/index'

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
]
class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Students',
        }
    }

    render() {
        return (
            <IonContent>
                <StudentsList students={students} />
            </IonContent>
        )
    }
}

export default Students
