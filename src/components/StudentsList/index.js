import React from 'react'
import { IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/react'

const StudentsList = ({ students }) => {
    return (
        <>
            <h3>Solicitudes pendientes</h3>
            <IonList>
                {students.map(student => (
                    <IonItem key={student.id}>
                        <IonThumbnail slot="start">
                            <img src={student.profileUrl} alt="" />
                        </IonThumbnail>
                        <IonLabel>
                            <h2>{student.name}</h2>
                            <p>{student.destination}</p>
                        </IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </>
    )
}

export default StudentsList
