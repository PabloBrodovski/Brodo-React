import React from "react";
import "../App.css";
import fotos from "../img/fotos.jpg";
import artjet from "../img/artjet.jpg";
import OCP from "../img/OCP.jpg";
import profesionales from "../img/profesionales.jpg"
import imprimi from "../img/imprimi.jpg"
import calendarios from "../img/calendarios.jpg"


const Fotografia = () => {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={fotos} />
              <p className="parrafo-imagen">
                Impresión de fotografías en formatos polaroid, 10x15cm, 13x18cm, 15x21cm y 20x30cm.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={artjet} />
              <p className="parrafo-imagen">
              Imprimimos tus fotos en papeles Art-Jet. Pensados para aquellos que aman el arte de la fotografía. De aspecto y sensación al tacto idénticos a los papeles fotográficos de revelado químico pero sin la contaminación que estos provocan.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={OCP} />
              <p className="parrafo-imagen">
              Imprimimos tus fotos con tintas profesionales OCP alemanas que garantizan la mayor durabilidad y exponencia a los elementos.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={profesionales} />
              <p className="parrafo-imagen">
              Servicio de impreción a profesionales del rubro.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={imprimi} />
              <p className="parrafo-imagen">
                No dejes que tus mejores recuerdos se pierdan por perder tu celular o una falla en tu PC, imprimilos y guardalos para siempre.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={calendarios} />
              <p className="parrafo-imagen">
                Calendarios, souvenirs, imanes, llaveros y más. 
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Fotografia;