import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import { v4 as uuidv4 } from "uuid";
import BreadCrumb from "./../layout/breadCrumb/BreadCrumb";

import logo from "./../../assets/icons/free-shipping-icon-1.png";

import MercadoLibreService from "./../../servicios/mercadoLibre";

import "./Resultado.scss";

const Resultado = () => {
  const [items, setItems] = useState([]);
  const [crumbs, setCrumbs] = useState([]);
  const { search } = useLocation();
  const mercadoLibreservices = new MercadoLibreService();

  const params = queryString.parse(search);
  useEffect(() => {
    mercadoLibreservices
      .getBusqueda(params.search)
      .then((data) => {
        setItems(data.data.items);
        setCrumbs(data.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.search]);

  return (
    <div className="full">
      <BreadCrumb cumbs={crumbs} />
      <div className="content-result">
        <ol className="lista">
          {items.map((m) => {
            return (
              <li className="item" key={uuidv4()}>
                <div className="imagen-container">
                  <img src={m.picture} alt="" className="imagen" />
                </div>
                <div className="descripcion">
                  <div className="valor-container">
                    <div className="valor">
                      <span>
                        $
                        {m.price.amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>
                    </div>
                    <div className="free-shipping">
                      {m.free_shipping && (
                        <img src={logo} alt="Logo" className="logo" />
                      )}
                    </div>
                  </div>
                  <div className="sub-descripcion">
                    <Link
                      to={{
                        pathname: `items/${m.id}`,
                        state: { id: m.id, breadCrumb: crumbs },
                      }}
                      className="linkDescripcion"
                    >
                      {m.title}
                    </Link>
                    <span className="estadoProducto">{m.condition}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Resultado;
