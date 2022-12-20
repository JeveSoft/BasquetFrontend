import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { BotonDescarga, ImgJugador } from "./EstiloEquipos";
import {url, urlImage} from "../services/const"
export default function QrJugadores (){

      const VentanaQr = styled.div`
           margin:10px;
           width: 200px;
           text-align:center;
       `;
       const VentanaQrs = styled.div`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
       `;

      let location = useLocation(); 
      
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
                    <VentanaQr key={jugador.IDJUGADOR}>
                              <h5>{jugador.NOMBREJUGADOR}</h5>
                              <ImgJugador src={urlImage+"storage/"+jugador.FOTOJUGADOR} />
                              <img src={urlImage+"qrJugadores/"+jugador.FOTOQR} />
                    </VentanaQr>
                    )
                    })
          }   
          </VentanaQrs>
          <BotonDescarga style={{margin:"50px"}} href="javascript:window.print()">Imprimir</BotonDescarga>
          </>
          )
}