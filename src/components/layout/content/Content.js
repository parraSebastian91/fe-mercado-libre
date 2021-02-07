import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";


import Resultado from './resultado/Resultado'
import Detalle from "./detalle/Detalle";
import './Content.scss'

const routes = [

    {
        path: "/items",
        component: Resultado,
    },
    {
        path: "/items/:id",
        component: Detalle
    }
];

const Content = () => {
    return (
        <div className="full-content">
            <div className="content-style">
                <div className="bread-crump">
                    asdas
                </div>
                <div className="contenido">
                    <BrowserRouter>
                        <Switch>
                            {routes.map((route, i) => (
                                <Route exact path={route.path} component={route.component} key={i} />
                            ))}
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
}

export default Content;