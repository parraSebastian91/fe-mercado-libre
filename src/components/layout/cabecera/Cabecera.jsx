import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import history from "./../../../utils/history";

import "./Cabecera.scss";

const Cabecera = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const ruta = `/items?search=${data.inputBusqueda}`;
    history.push(ruta);
  };

  return (
    <div className="full-with">
      <div className="head-container">
        <div className="div-logo">
          <a className="nav-logo" href="//www.mercadolibre.cl">
            Mercado Libre Chile - Donde comprar y vender de todo
          </a>
        </div>
        <div className="busqueda">
          <div className="container-busqueda">
            <form
              action=""
              className="form-imput"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="icon-Busqueda">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                type="text"
                className="input-busqueda"
                placeholder="Busqueda"
                name="inputBusqueda"
                ref={register()}
              />
            </form>
          </div>
        </div>
        <div className="extra"></div>
      </div>
    </div>
  );
};

export default Cabecera;
