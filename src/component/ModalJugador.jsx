import React, { useState , useEffect} from "react";
import styled, { css } from "styled-components";
import { useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast";
import {url,urlImage} from "../services/const"
import {
  InputFile,
  TextBox,
  InputBox,
  BoxCampo
} from "./EstilosAdministrador";

import {DetalleUsuario} from "./EstiloRegistro";
import PhoneInput from "react-phone-number-input";
import { Boton } from "./IniciarSesion";
import { SelectJugador, BotonPopup, ImgJugador} from "./EstiloEquipos"


 export const ModalEditarJugador = styled.div`
          background: white;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: auto;
          height: auto;
          padding: 15px;
          color: #555;
          border-radius: 10px;
          box-shadow: 2px 3px 7px -1px rgba(0,0,0,0.76);
          -webkit-box-shadow: 2px 3px 7px -1px rgba(0,0,0,0.76);
          -moz-box-shadow: 2px 3px 7px -1px rgba(0,0,0,0.76);
 `

export default function ModalJugador( {jugador, idDelegado, idEquipo, cerrarModalJugador, obtenerJugadores}) {
  
  const [nombreJ,setNombreJ] = useState("");
  const [carnetJ,setCarnetJ] = useState("");
  const [correoJ,setCorreoJ] = useState("");
  const [numeroCelJ,setNumeroCelJ] = useState("");
  const [fechaNacimientoJug,setFechaNacimientoJug] = useState("");
  const [rolJ,setRolJ] = useState("");
  const [fotoCiJ, setFotoCiJ] = useState(null);
  const [fotoJ,setFotoJ] = useState(null);
  const [jugadores,setJugadores] = useState([]);
  const [fotoCiTxt,setFotoCiTxt] = useState("");
  const [fotoJTxt,setFotoJTxt] = useState("");

          const expresiones = {
          nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
          correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          telefono: /^\d{7,14}$/, // 7 a 14 numeros.
          carnet: /^[a-zA-Z0-9-]{6,15}/,
          sigla: /^[a-zA-Z0-9-]{1,4}/,
        };


        const actualizarJugador = async () =>{
               
                  /* Envio imagen ci jugador */
                if(fotoCiJ != null){
                  const f = new FormData();
                  f.append("imagen",fotoCiJ);
                  console.log(fotoCiJ);
                  const response2 = await fetch(url + "setImgCi/"+ jugador.CIJUGADOR,
                  {
                    method: "POST",
                    body: f
                  })
                }

                /* Envio imagen Jugador */
                if(fotoJ != null){
                  const f2 = new FormData();
                  f2.append("imagen",fotoJ);
                  console.log(fotoJ);
                  const response3 = await fetch(url + "setImgJugador/"+ jugador.CIJUGADOR,
                  {
                    method: "POST",
                    body: f2
                  }) 
                  //const data3 = await response3.json();
                }
                //console.log(data3);
                mensajeDeRespuesta("Jugador actualizado Correctamente");
                obtenerJugadores();
                cerrarModalJugador(false);
       }

       const mensajeDeRespuesta = (txt) =>{
          toast(txt, {
            icon: "✅",
            duration: 3000,
            style: {
              border: "2px solid #ff7c01",
              padding: "10px",
              color: "#fff",
              background: "#000",
              borderRadius: "4%",
            },
          });
         }

    
        async function eliminarJugador(){
           const response = await fetch(url + "eliminarJugador/" + jugador.CIJUGADOR,{
                    method: "DELETE"
           });
           
           cerrarModalJugador(false); 
           mensajeDeRespuesta("Jugador eliminado Correctamente");
           obtenerJugadores();
        }


  return (
    <ModalEditarJugador>
          
      <DetalleUsuario>
              
              <BoxCampo>
                <TextBox>Cambiar foto Carnet de Identidad</TextBox>
                <InputFile
                  type="file"
                  required
                  name=""
                  id="fotoCiJ"
                  accept="image/*"
                  onChange={(e) => {
                    setFotoCiJ(e.target.files[0]);
                  }}
                
                />
                </BoxCampo>
                {
                  jugador.FOTOCIJUGADOR == "vacio" ? 
                  <ImgJugador src={require("../Imagenes/imagenJugador.jpg")} alt="ATR" />
                  :
                  <ImgJugador src={urlImage+"storage/"+jugador.FOTOCIJUGADOR} alt="ATR" />
                }

              <BoxCampo>
                <TextBox>Cambiar Foto Jugador</TextBox>
                <InputFile
                  type="file"
                  required
                  name=""
                  id="fotoJ"
                  accept="image/*"
                  onChange={(e) => {
                    setFotoJ(e.target.files[0]);
                  }}
                />
                </BoxCampo>
                {
                    jugador.FOTOJUGADOR == "vacio" ? 
                    <ImgJugador src={require("../Imagenes/imagenJugador.jpg")} alt="ATR" />
                    :
                     <ImgJugador src={urlImage+"storage/"+jugador.FOTOJUGADOR} alt="ATR" />
                 }

            </DetalleUsuario>
              <Boton style={{margin:"10px 5px"}} onClick={()=>actualizarJugador()}>Actualizar</Boton>
              <Boton style={{margin:"10px 5px"}} onClick={()=>eliminarJugador()}>Eliminar</Boton>
              <Boton style={{margin:"10px 5px"}} onClick={()=>cerrarModalJugador(false)}>Cancelar</Boton>
    </ModalEditarJugador>
  );
}
