import React from "react";

const Inicio = () => {
    return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" Interval="1000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/src/img/carrusel-1.jpg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src="/src/img/carrusel-2.jpg" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <img src="/src/img/carrusel-3.jpg" className="d-block w-100"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
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