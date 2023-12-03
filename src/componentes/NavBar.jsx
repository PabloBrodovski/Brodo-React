import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/favicon.png";

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} height={30}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/Inicio" className="nav-link" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Grafica" className="nav-link" >Gráfica</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Estampados" className="nav-link" >Estampados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Fotografia" className="nav-link" >Fotografía</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Precios" className="nav-link" >Precios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contacto" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
)
}

export default NavBar;