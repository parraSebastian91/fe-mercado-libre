import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Cabecera.scss'

const Cabecera = () => {
    return (
        <div className="full-with">
            <div className="head-container">
                <div className="div-logo">
                    <a className="nav-logo" href="//www.mercadolibre.cl" >Mercado Libre Chile - Donde comprar y vender de todo</a>
                </div>
                <div className="busqueda">
                    <div className="container-busqueda">
                        <div className="icon-Busqueda">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input type="text" className="input-busqueda" placeholder="Busqueda" />
                    </div>
                </div>
                <div className="extra">

                </div>
            </div>
        </div>
    )
}

export default Cabecera;