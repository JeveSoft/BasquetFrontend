import {React } from "react";
import styled from "styled-components";
import { PopUpContainer, BotonPopup, LineaPopUp } from "./EstiloEquipos";
export function PopUpEquipo ( { equipo, cerrarPopup } ){
          const SpanBold = styled.span`
              font-weight: bold;
          `
          return (  
                    <PopUpContainer>
                               <BotonPopup onClick={()=>cerrarPopup(false)}>x</BotonPopup>
                               <LineaPopUp></LineaPopUp>
                                <h4><SpanBold>Nombre:</SpanBold> {equipo.NOMBRE}</h4>
                                <h4> <SpanBold>Siglas:</SpanBold> {equipo.SIGLAS}</h4>
                                <h4> <SpanBold>Fecha de Creacion:</SpanBold> {equipo.FECHACREACION}</h4>
                                <h4> <SpanBold>Categoria:</SpanBold> {equipo.CATEGORIA}</h4>
                    </PopUpContainer>
          )
}