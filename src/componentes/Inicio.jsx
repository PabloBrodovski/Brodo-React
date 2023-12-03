import React from "react";
import logo from "../img/favicon.png";
import ImagenDeInicio from "../img/ImagenDeInicio.jpg";

const Inicio = () => {
    return (
    <>
        <div className="container text-center">
            <img className="logo" src={logo} height={200} />
            <p className="footer-texto1">Brodo</p>
            <p className="footer-texto2">Gráfica - Estampados - Fotografía</p>
        </div>
        <div className="container text-center">
            <img className="img-fluid" src={ImagenDeInicio} height={200} />
        </div>
        <div className="contenedor text-center">
            <h2 className="seccion-titulo">¿Quienes somos?</h2>
                <p className="seccion-texto">
                    Somos una empresa que brinda soluciones gráficas, impresiones
                    digitales, estampados y fotografía con más de 30 años de experiencia.
                </p>
                <p className="seccion-texto">
                    Trabajamos con particulares, comercios, empresas y municipios de toda la provincia y otras ciudades del país.
                </p>
                <p className="seccion-texto">
                    Te ayudamos en tu proyecto desde el diseño inicial hasta lograr tu objetivo.
                </p>
                <p className="seccion-texto">
                    Te facilitamos todas las opciones para lo que necesites, podés
                    enviarnos tus archivos, encargar tus trabajos y realizar pedidos de
                    presupuestos por whatsapp o por mail.
                </p>
        </div>

    </>
)
}

export default Inicio;