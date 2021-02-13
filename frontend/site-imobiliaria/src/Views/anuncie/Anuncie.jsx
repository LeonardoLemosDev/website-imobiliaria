import React, { Component } from 'react';
import Navbar from '../../Components/NavBar';

class Anuncie extends Component {
    render() {
        return (
            <div>
                <Navbar Anuncie={true} />
                <div className="Anuncie">

                    <h1>Anuncie</h1>
                </div>
            </div>
        )
    }
}

export default Anuncie