import { useState } from "react";

import "./MiOrg.css"

const MiOrg = (props) => {
    //Estados - hooks funcionalidades que nos ayudan a travajar con el comportamiento de react
    //useState
    // const [nombreVariable, funcionActualiza] = userState (valorInicial) nos va a ayudar cuando vayamos escribiendo nuestros inputs poder guardar de lo que esta escribiendo el usuario o esta o no logueado, p.e.
    console.log(props);
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar (!mostrar)
    //     //con esa linea creamos un switch toma el valor del estado que inicia como true y lo va a invertir, como un ciclo. checar documentacion de los hooks.
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src= "/img/add.png" alt= "add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg