import React from "react";
import "../App.css";
import estampados from "../img/estampados.jpg";
import sublimables from "../img/sublimables.jpg";
import tazas from "../img/tazas.jpg";
import magicas from "../img/magicas.jpg"
import banderas from "../img/banderas.jpg"
import gorras from "../img/gorras.jpg"


const Estampados = () => {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={estampados} />
              <p className="parrafo-imagen">
                Sublimación y estampado con vinilo textil con prendas incluidas
                o sobre las tuyas.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={sublimables} />
              <p className="parrafo-imagen">
                sublimados y estampados en remeras, delantales, gorras, tazas,
                vasos térmicos y más.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={tazas} />
              <p className="parrafo-imagen">
                Tazas sublimadas. Usamos la mejor calidad de tazas importadas
                marcas Orca o AAA y tazas de polimero.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={magicas} />
              <p className="parrafo-imagen">
                Tazas mágicas que reaccionan mostrando la imagen sublimada al
                tomar temperatura.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={banderas} />
              <p className="parrafo-imagen">
                Banderas sublimadas de 75cm x 100cm y de 100cm x 150cm.
              </p>
            </div>
            <div className="producto col-12 col-md-4">
              <img className="imagen img-fluid" src={gorras} />
              <p className="parrafo-imagen">
                Gorras sublimadas o estampadas perzonalizadas únicas o para
                empresas.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Estampados;