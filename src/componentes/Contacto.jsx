import React from "react";
import "../App.css";
import ubicacion from "../img/ubicacion.svg";
import whatsapp from "../img/whatsapp.svg";
import mail from "../img/mail.svg";

const Contacto = () => {
  return (
    <>
        <div className="container text-center">
            <img className="logo" src="./src/img/favicon.png" height={200} />
            <p className="footer-texto1">Brodo</p>
            <p className="footer-texto2">Gráfica - Estampados - Fotografía</p>
        </div>
        <div className="container text-center contacto">
            <img className="logo-contacto" src={ubicacion} height={30}/>
            Colón 666 - P. Libres - Corrientes
        </div>
        <div className="container text-center contacto">
            <img className="logo-contacto" src={whatsapp} height={30}/>
            3772 460159
        </div>
        <div className="container text-center contacto">
            <img className="logo-contacto" src={mail} height={30}/>
            fotobrodo@gmail.com
        </div>
    </>
  );
};

export default Contacto;
