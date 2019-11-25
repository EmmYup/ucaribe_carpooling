import React, { Component } from 'react'
import { IonContent } from '@ionic/react'
class Rides extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pagina: 'Rides',
        }
    }

    render() {
        const { pagina } = this.state
        return <IonContent>{`Hola Mundo! estas en: ${pagina}`}</IonContent>
    }
}

export default Rides
