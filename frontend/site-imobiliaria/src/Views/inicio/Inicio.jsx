import React, { Component } from 'react';
import Navbar from '../../Components/NavBar';

class Inicio extends Component {
    render() {
        return (
            <div>
                <Navbar Inicio={true} />
                <div className="Inicio">

                    <h1>INÍCIO</h1>
                </div>
            </div>
        )
    }
}

export default Inicio