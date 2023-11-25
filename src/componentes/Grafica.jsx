import React from "react";
import "../App.css";
import impresiones from "../img/impresiones.jpg";
import banners from "../img/banners.jpg";
import folletos from "../img/folletos.jpg";
import diseno from "../img/diseno.jpg";
import pulseras from "../img/pulseras.jpg";
import laminas from "../img/laminas.jpg";

const Grafica = () => {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={impresiones} />
              <p className="parrafo-imagen">
                impresión en baja y alta calidad de archivos, imágenes,
                diferentes gramages y tipos de papel, papeles adhesivos, opacos,
                craft y brillo.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={banners} />
              <p className="parrafo-imagen">
                Impresiones de gran formato en lonas y vinilos, banners con
                varillas y porta banners.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={folletos} />
              <p className="parrafo-imagen">
                Impresión de folletería, tarjetas de presentacion, diplomas,
                certificados, tarjetas de invitación.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={diseno} />
              <p className="parrafo-imagen">
                Diseño gráfico de tus proyectos: cartelería, logos, folletería,
                invitaciones, etc.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={pulseras} />
              <p className="parrafo-imagen">
                Impresión de personales y entradas tipo pulsera.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={laminas} />
              <p className="parrafo-imagen">
                Diseño gráfico de tus proyectos: cartelería, logos, folletería,
                invitaciones, etc.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Grafica;