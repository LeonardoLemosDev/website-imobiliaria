import React, { Component } from 'react';
import Navbar from '../../Components/NavBar';

class Empresa extends Component {
    render() {
        return (
            <div>
                <Navbar Empresa={true} />
                <div className="Empresa">

                    <h1>Empresa</h1>
                </div>
            </div>
        )
    }
}

export default Empresa