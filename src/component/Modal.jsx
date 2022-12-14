import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Img } from "./EstilosAdministrador";
import {url,urlImage} from "../services/const"

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContenedorModal = styled.div`
  width: 350px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 25px;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;
export const Titulo = styled.div`
  font-size: 25px;
  font-weight: 1000;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 300%;
    background: linear-gradient(135deg, #000000, #ff7c01);
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;
  &:hover {
    background: #c9c9c9;
  }
`;
export const DetalleUsuario = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
export const InputBox = styled.input`
  margin-bottom: 10px;
  height: 40px;
  width: 65%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ff7c01;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;

  &:focus {
    border-color: black;
  }
  &:hover {
    border-color: black;
  }
`;
export const Boton = styled.button`
  background: #ff7c01;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 110px;
  margin: 10px;
  height: 40px;
  font-size: 16px;
  &:hover {
    background: black;
    color: #ff7c01;
  }
  ${(props) =>
    props.espera === "true" &&
    css`
      border: 2px solid black;
    `}
`;
export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
`;
export default function Modal({ estado, cambiarEstado, mensaje, tipo, datos, obtenerInformacion }) {
  const historial = useHistory();
 
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);

  const verificarProceso = () => {
    setEspera("true");
    setInhabilitado(true);
    if (tipo == "eliminarFoto") {
      axios.delete(url + "eliminarFoto/" + datos.TITULO).then((response) => {
        toast("Foto Eliminado con Exito", {
          icon: "???",
          duration: 3000,
          style: {
            border: "2px solid #ff7c01",
            padding: "10px",
            color: "#fff",
            background: "#000",
            borderRadius: "4%",
          },
        });
        setEspera("false");
        setInhabilitado(false);
        cambiarEstado(false);
        obtenerInformacion()
      });
    } else {
      if (tipo == "eliminarArbitro") {
        axios
          .delete(url + "eliminarArbitro/" + datos.IDARBITRO)
          .then((response) => {
            toast("Arbitro Eliminado con Exito", {
              icon: "???",
              duration: 3000,
              style: {
                border: "2px solid #ff7c01",
                padding: "10px",
                color: "#fff",
                background: "#000",
                borderRadius: "4%",
              },
            });
            setEspera("false");
            setInhabilitado(false);
            cambiarEstado(false);
          });
      } else {
        if (tipo == "registro") {
        } else {
          historial.replace("/");
        }
      }
    }
  };
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>SEGURO</Titulo>
            </EncabezadoModal>
            <Texto>{mensaje}</Texto>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <Boton
                espera={espera}
                disabled={inhabilitado}
                onClick={() => {
                  verificarProceso();
                }}
              >
                {espera == "false" && "Si"}
                {espera == "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </Boton>
              <Boton
                espera={espera}
                disabled={inhabilitado}
                onClick={() => {
                  cambiarEstado(false);
                }}
              >
                No
              </Boton>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
