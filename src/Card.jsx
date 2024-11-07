import React from "react";

const Card = ({ titulo, autor }) => {
  return (<div className="tarjeta">
    <h3>El libro que escogistes es {titulo}</h3>
    <h3>está escrito por {autor}</h3>
    </div>);
};

export default Card;
