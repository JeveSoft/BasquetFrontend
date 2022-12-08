import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { BotonDescarga } from "./EstiloEquipos";
export default function QrJugadores (){

      const VentanaQr = styled.div`
           margin:10px;
           width: 200px;
       `;
       const VentanaQrs = styled.div`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
       `;

      let location = useLocation(); 
      const url = "http://127.0.0.1:8000/";
      const [jugadores,setJugadores] = useState([]); 
      const obtenerIdEquipo = () =>{
      }
          
      const obtenerJugadores = async () =>{
      var idEquipo =  location.pathname.substring(13,location.pathname.length); 
              const response = await fetch(url+"obtenerJugadores/"+idEquipo);
              const data = await response.json();
              setJugadores(data);
              console.log(data);
          }
          useEffect(()=>{
               //obtenerIdEquipo()
               obtenerJugadores();
          },[])
     return (
          <>
          <VentanaQrs>
             {
                jugadores.map((jugador) => {
                   return (
                    <VentanaQr>
                              <h5>{jugador.NOMBREJUGADOR}</h5>
                              <img src={url+"qrJugadores/"+jugador.FOTOQR} />
                    </VentanaQr>
                    )
                    })
          }   
          </VentanaQrs>
          <BotonDescarga href="javascript:window.print()">Imprimir</BotonDescarga>
          </>
          )
}