import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Resultado from './resultado/Resultado'
import './Content.scss'

const Content = () => {
    return (
        <div className="full-content">
            <div className="content-style">
                <div className="bread-crump">
                    asdas
                </div>
                <div className="contenido">
                    <Resultado />
                </div>
            </div>
        </div>
    )
}

export default Content;