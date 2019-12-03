import React, { Component } from 'react';

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagina: 'Addresses',
        };
    }

    render() {
        const { pagina } = this.state;
        return <div>{`Hola Mundo! estas en: ${pagina}`}</div>;
    }
}

export default Addresses;
