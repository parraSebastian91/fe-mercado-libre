import React, { useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { v4 as uuidv4 } from "uuid";

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
        <ol>
          {items.map((m) => {
            return <li key={uuidv4()}></li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Resultado;
