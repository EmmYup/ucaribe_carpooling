import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 'Profile',
        };
    }

    render() {
        const { pagina } = this.state;
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
    }
}

export default Profile;
