import React from 'react'
import { IonList, IonItem, IonThumbnail, IonLabel } from '@ionic/react'

function DriversList({ drivers }) {
    return (
        <>
            <h5>Rides</h5>
            <h3>Selecciona un ride</h3>
            <IonList>
                {drivers.map(driver => (
                    <IonItem key={driver.id}>
                        <IonThumbnail slot="start">
                            <img src={driver.profileUrl} alt="" />
                        </IonThumbnail>
                        <IonLabel>
                            <h2>{driver.name}</h2>
                            <p>
                                {driver.destination} / {driver.spacesLeft}
                            </p>
                        </IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </>
    )
}

export default DriversList
