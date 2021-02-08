import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { v4 as uuidv4 } from "uuid"; 
import logo from './../../assets/icons/free-shipping-icon-1.png';

import MercadoLibreService from "./../../servicios/mercadoLibre";

import "./Resultado.scss";

const Resultado = () => {
  const [items, setItems] = useState([]);
  const { search } = useLocation();
  const params = queryString.parse(search);
  const a = new MercadoLibreService();

  useEffect(() => {
    a.getBusqueda(params.search)
      .then((data) => {
        setItems(data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="full">
      <div className="content-result">
        <ol className="lista">
          {items.map((m) => {
            return (
              <li className="item" key={uuidv4()}>
                <div className="imagen-container">
                  <img src={m.picture} alt="" srcset="" className="imagen" />
                </div>
                <div className="descripcion">
                  <div className="valor-container">
                    <div className="valor">
                        <span>
                            {
                                m.price.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                            }
                        </span>
                    </div>
                    <div className="free-shipping">{
                        m.free_shipping && <img src={logo} alt="Logo" className="logo"/>
                    }</div>
                  </div>
                  <div className="sub-descripcion">
                      <a href={`api/item/${m.id}`}>
                          {m.title}
                      </a>
                      <span>
                          {m.condition}
                      </span>
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
