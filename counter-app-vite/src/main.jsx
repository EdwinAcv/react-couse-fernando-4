import React from "react";
import  ReactDOM  from "react-dom/client";
import {App} from './App.jsx';


function imprime() {
    console.log('Prueba')
}


ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <App nombre={'edwin'}  funcion= {() => {imprime()}}/>
    </React.StrictMode>
)