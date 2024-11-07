import { useState } from "react";
import Card from "./Card";

const Form = () => {
//Variables useState
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  //Validaciones
  const handleSubmit = (event) => {
    event.preventDefault();
    let regexBlanco = /^\s/;
    if (
      libro.titulo.length >= 3 &&
      !regexBlanco.test(libro.titulo) &&
      libro.autor.length>=6 
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setMostrar(false)
      setError(true);
    }
  };
  return (
    <div>
      
        <form onSubmit={handleSubmit}>
          {/* onsubmit */}
          <label>Título:</label>
          {/* onchange */}
          <input
            type="text"
            onChange={(event) =>
              setLibro({ ...libro, titulo: event.target.value })
            }
          />
          <label>Autor:</label>
          <input
            type="text"
            onChange={(event) =>
                setLibro({ ...libro, autor: event.target.value })
            }
          />
          <button type="submit">Elegir libro</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          )}
        </form>
        {mostrar ? (
        <Card titulo={libro.titulo} autor={libro.autor}  />
      ):(<></>)}
    </div>
  )
}

export default Form