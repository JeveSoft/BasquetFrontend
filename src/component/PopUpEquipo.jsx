import {React } from "react";

import { PopUpContainer, BotonPopup } from "./EstiloEquipos";
export function PopUpEquipo ( { equipo, cerrarPopup } ){

          return (  
                    <PopUpContainer>
                               <BotonPopup onClick={()=>cerrarPopup(false)}>x</BotonPopup>
                                <h2>Nombre: {equipo.NOMBRE}</h2>
                                <h2>Siglas: {equipo.SIGLAS}</h2>
                                <h2>Fecha de Creacion: {equipo.FECHACREACION}</h2>
                                <h2>Categoria: {equipo.CATEGORIA}</h2>
                    </PopUpContainer>
          )
}