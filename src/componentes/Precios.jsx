import React from "react";
import "../App.css";

const Precios = () => {
    return (
      <>
        <div className="container tabla">
          <h2>Precios de impresión de fotos por unidad</h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Producto</th>
                <th>menos de 10</th>
                <th>X10</th>
                <th>X20</th>
                <th>X100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>polaroid (10x9cm)</td>
                <td>$200</td>
                <td>$180</td>
                <td>$160</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>10x15cm</td>
                <td>$300</td>
                <td>$280</td>
                <td>$260</td>
                <td>$240</td>
              </tr>
              <tr>
                <td>13x18cm</td>
                <td>$550</td>
                <td>$520</td>
                <td>$490</td>
                <td>$460</td>
              </tr>
              <tr>
                <td>15x21cm</td>
                <td>$600</td>
                <td>$550</td>
                <td>$500</td>
                <td>$450</td>
              </tr>
              <tr>
                <td>20x30cm</td>
                <td>$1.200</td>
                <td>$1.100</td>
                <td>$1.000</td>
                <td>$900</td>
              </tr>
            </tbody>
          </table>

          <h2>Edición</h2>
          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>Básica</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>Creación de logo, cambio de fondo, diseño de carteles</td>
                <td>$2.000</td>
              </tr>
            </tbody>
          </table>

          <h2>Impresión en lona o vinilo sin diseño</h2>
          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>Precio por metro cuadrado</td>
                <td>$10.000</td>
              </tr>
            </tbody>
          </table>

          <h2>Banner + Diseño + Varillas para colgar</h2>
          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>50 x 50 cm</td>
                <td>$5.600</td>
              </tr>
              <tr>
                <td>50 x 75 cm</td>
                <td>$6.700</td>
              </tr>
              <tr>
                <td>75 x 75 cm</td>
                <td>$9.000</td>
              </tr>
              <tr>
                <td>75 x 90 cm</td>
                <td>$10.000</td>
              </tr>
              <tr>
                <td>75 x 100 cm</td>
                <td>$10.750</td>
              </tr>
              <tr>
                <td>75 x 120 cm</td>
                <td>$12.100</td>
              </tr>
              <tr>
                <td>100 x 100 cm</td>
                <td>$13.800</td>
              </tr>
              <tr>
                <td>100 x 120 cm</td>
                <td>$14.200</td>
              </tr>
              <tr>
                <td>100 x 150 cm</td>
                <td>$16.900</td>
              </tr>
              <tr>
                <td>Banner con porta banner 90 x 190 cm</td>
                <td>$25.000</td>
              </tr>
            </tbody>
          </table>

          <h2>Llaveros con fotos / Porta retratos 6x9cm con foto</h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th> X1</th>
                <th>X5</th>
                <th>X10</th>
                <th>X20</th>
                <th>X50</th>
                <th>X100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$400</td>
                <td>$380</td>
                <td>$370</td>
                <td>$350</td>
                <td>$330</td>
                <td>$300</td>
              </tr>
            </tbody>
          </table>

          <h2>Tarjetas de presentación</h2>
          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>X100</td>
                <td>$2.800</td>
              </tr>
            </tbody>
          </table>

          <h2>Pulseras</h2>
          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>X50</td>
                <td>$3.500</td>
              </tr>
              <tr>
                <td>X100</td>
                <td>$6.000</td>
              </tr>
            </tbody>
          </table>

          <h2>Impresiones</h2>
          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>impresiones A4 papel 75g (texto)</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>impresiones A4 papel 75g (texto y imágenes)</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>impresiones A4 papel 75g (full color)</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Opalina 180g</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Ilustración 200g</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Glossy 220g (fotográfico)</td>
                <td>$350</td>
              </tr>
              <tr>
                <td>Adhesivo opaco</td>
                <td>$350</td>
              </tr>
              <tr>
                <td>Adhesivo fotográfico</td>
                <td>$450</td>
              </tr>
              <tr>
                <td>Craft 220g</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Papel para sublimación</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Papel Imantado</td>
                <td>$1.500</td>
              </tr>
              <tr>
                <td>Papel de arroz</td>
                <td>$1.000</td>
              </tr>
            </tbody>
          </table>

          <h2>
            Estampado de remeras con remera incluida (Estos precios pueden
            variar según diseño)
          </h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>X1</th>
                <th>X5</th>
                <th>X10</th>
                <th>X20</th>
                <th>X50</th>
                <th>X100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Remeras estampadas 1 lado (Adultos)</td>
                <td>$5.000</td>
                <td>$4.700</td>
                <td>$4.400</td>
                <td>$4.100</td>
                <td>$3.900</td>
                <td>$3.700</td>
              </tr>
              <tr>
                <td>Remeras estampadas 2 lados (Adultos)</td>
                <td>$6.500</td>
                <td>$6.200</td>
                <td>$5.900</td>
                <td>$5.600</td>
                <td>$5.400</td>
                <td>$5.200</td>
              </tr>
              <tr>
                <td>Remeras estampadas 1 lado (Niños)</td>
                <td>$4.500</td>
                <td>$4.200</td>
                <td>$3.900</td>
                <td>$3.600</td>
                <td>$3.400</td>
                <td>$3.200</td>
              </tr>
              <tr>
                <td>Remeras estampadas 2 lados (Niños)</td>
                <td>$6.000</td>
                <td>$5.700</td>
                <td>$5.400</td>
                <td>$5.100</td>
                <td>$4.900</td>
                <td>$4.700</td>
              </tr>
            </tbody>
          </table>

          <h2>Solo estampado</h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>X1</th>
                <th>X5</th>
                <th>X10</th>
                <th>X20</th>
                <th>X50</th>
                <th>X100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sublimación A3 - 29x38cm</td>
                <td>$1.500</td>
                <td>$1.300</td>
                <td>$1.100</td>
                <td>$900</td>
                <td>$800</td>
                <td>$700</td>
              </tr>
              <tr>
                <td>Sublimación A4 - 20x29cm</td>
                <td>$800</td>
                <td>$700</td>
                <td>$600</td>
                <td>$500</td>
                <td>$450</td>
                <td>$400</td>
              </tr>
              <tr>
                <td>Sublimación A5 - 14x20cm</td>
                <td>$500</td>
                <td>$450</td>
                <td>$400</td>
                <td>$350</td>
                <td>$300</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>Vinilo de corte 1 color A4 - 20x29cm</td>
                <td>$2.500</td>
                <td>$2.300</td>
                <td>$2.100</td>
                <td>$1.900</td>
                <td>$1.800</td>
                <td>$1.700</td>
              </tr>
              <tr>
                <td>Vinilo de corte 1 color A5 - 14x20cm</td>
                <td>$1.500</td>
                <td>$1.400</td>
                <td>$1.300</td>
                <td>$1.200</td>
                <td>$1.100</td>
                <td>$1.000</td>
              </tr>
              <tr>
                <td>Vinilo sublimado A4 - 20x29cm</td>
                <td>$4.000</td>
                <td>$2.800</td>
                <td>$2.700</td>
                <td>$2.600</td>
                <td>$2.500</td>
                <td>$2.400</td>
              </tr>
              <tr>
                <td>Vinilo sublimado A5 - 14x20cm</td>
                <td>$2.500</td>
                <td>$2.300</td>
                <td>$2.100</td>
                <td>$1.900</td>
                <td>$1.800</td>
                <td>$1.700</td>
              </tr>
            </tbody>
          </table>

          <h2>Otros artículos sublimados</h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>X1</th>
                <th>X5</th>
                <th>X10</th>
                <th>X20</th>
                <th>X50</th>
                <th>X100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tazas cerámicas</td>
                <td>$3.500</td>
                <td>$3.300</td>
                <td>$3.100</td>
                <td>$2.900</td>
                <td>$2.700</td>
                <td>$2.500</td>
              </tr>
              <tr>
                <td>Tazas plásticas</td>
                <td>$1.800</td>
                <td>$1.700</td>
                <td>$1.600</td>
                <td>$1.500</td>
                <td>$1.400</td>
                <td>$1.300</td>
              </tr>
              <tr>
                <td>Tazas mágicas</td>
                <td>$4.500</td>
                <td>$4.300</td>
                <td>$4.100</td>
                <td>$3.900</td>
                <td>$3.700</td>
                <td>$3.500</td>
              </tr>
              <tr>
                <td>Jarros térmicos</td>
                <td>$3.500</td>
                <td>$2.300</td>
                <td>$2.100</td>
                <td>$2.900</td>
                <td>$2.700</td>
                <td>$2.500</td>
              </tr>
              <tr>
                <td>Relojes</td>
                <td>$3.500</td>
                <td>$2.300</td>
                <td>$2.100</td>
                <td>$2.900</td>
                <td>$2.700</td>
                <td>$2.500</td>
              </tr>
              <tr>
                <td>Delantales</td>
                <td>$3.500</td>
                <td>$2.300</td>
                <td>$2.100</td>
                <td>$2.900</td>
                <td>$2.700</td>
                <td>$2.500</td>
              </tr>
              <tr>
                <td>Mouse Pad</td>
                <td>$1.500</td>
                <td>$1.400</td>
                <td>$1.300</td>
                <td>$1.200</td>
                <td>$1.100</td>
                <td>$1.000</td>
              </tr>
              <tr>
                <td>Baberos</td>
                <td>$2.000</td>
                <td>$1.800</td>
                <td>$1.600</td>
                <td>$1.400</td>
                <td>$1.300</td>
                <td>$1.200</td>
              </tr>
              <tr>
                <td>Gorras</td>
                <td>$2.500</td>
                <td>$2.400</td>
                <td>$2.300</td>
                <td>$2.200</td>
                <td>$2.100</td>
                <td>$2.000</td>
              </tr>
              <tr>
                <td>Almohadones</td>
                <td>$2.500</td>
                <td>$2.400</td>
                <td>$2.300</td>
                <td>$2.200</td>
                <td>$2.100</td>
                <td>$2.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Precios;