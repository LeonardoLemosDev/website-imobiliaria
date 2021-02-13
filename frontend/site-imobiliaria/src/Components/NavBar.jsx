import React from 'react';
import Logo from '../Images/Logo.png'

function Navbar(props) {
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/"><img src={Logo} width="30px" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className={props.Inicio ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/">Início</a>
                        </li>
                        <li className={props.Anuncie ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/anuncie">Anuncie conosco</a>
                        </li>
                        <li className={props.Empresa ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/empresa">Empresa</a>
                        </li>
                        <li className={props.Pesquisar ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/pesquisar">Pesquisar</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar