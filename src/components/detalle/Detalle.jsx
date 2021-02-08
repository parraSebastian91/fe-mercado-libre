import React, { useState, useEffect } from "react";
import MercadoLibreService from "./../../servicios/mercadoLibre";
import BreadCrumb from "./../layout/breadCrumb/BreadCrumb";

import "./Detalle.scss";

const Detalle = ({ location }) => {
  const [item, setItem] = useState({});
  const [monto, setsetMonto] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const mercadoLibreservices = new MercadoLibreService();

  useEffect(() => {
    if (!didMount) {
      mercadoLibreservices
        .getItem(location.state.id)
        .then((datos) => {
          setItem({ ...datos.data });
          setsetMonto(datos.data.price.amount);
        })
        .catch((err) => {
          console.log(err);
        });
      setDidMount(true);
    }
  });

  return (
    <div className="full-detalle">
      <BreadCrumb cumbs={location.state.breadCrumb} />
      <div className="detalle">
        <div className="producto">
          <div className="imagen">
            <img src={item.picture} alt="" className="img" />
          </div>
          <div className="descripcion">
            <h2>Descripci&oacute;n del producto</h2>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="costo">
          <div className="info">
            <div className="encabezado">
              <span className="condicion">{item.condition}</span>-
              <span className="cantidad"> {item.sold_quantity} Vendidos</span>
            </div>
            <span className="titulo">{item.title}</span>
          </div>
          <div className="valor">
            {didMount && (
              <span className="monto">
                ${monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
            )}
          </div>
          <div className="boton"></div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
