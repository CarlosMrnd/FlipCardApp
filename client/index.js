import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./style.css";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
/*FALTA
- Si no se escogen las 2 opciones no pasar al GamePage -> useState / if
(Emplieza el juego) 3 2 1 empieza ... un cuadrito emergente con click
Encabezado
    - Funcion que cuente los clicks -> useState
    - Funcion que ejecute el tiempo -> useState
Tablero de juego
    - desabilitar tarjetas cuando hacen match.
Mensajes de juego
    - Si gana
    - Si pierde
- Boton de juego nuevo
- Boton de salir a inicio
*/