import React, { Component } from 'react';
import Navbar from '../../Components/NavBar';

class Pesquisar extends Component {
    render() {
        return (
            <div>
                <Navbar Pesquisar={true} />
                <div className="Pesquisar">

                    <h1>Pesquisar</h1>
                </div>
            </div>
        )
    }
}

export default Pesquisar