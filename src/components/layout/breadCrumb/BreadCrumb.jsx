import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./BreadCrumb.scss";

const BreadCrumb = (props) => {
  return (
    <div>
      <div className="bread-crump">
        {props.cumbs &&
          props.cumbs.map((m, i) => {
            return (
              <div className="crump" key={uuidv4()}>
                {i !== 0 && <div className="arrow-content"><span className="arrow">{">"}</span></div>}
                <div className="categoria-container">
                  <span className="categoria">{m}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BreadCrumb;
