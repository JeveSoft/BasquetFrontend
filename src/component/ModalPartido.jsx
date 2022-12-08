import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";

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
  width: 400px;
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
    width: 310%;
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
  justify-content: center;
  align-content: center;
`;
export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  text-align: center;
`;
export default function ModalPartido({ estado, cambiarEstado, datos }) {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>PARTIDO</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
                  <Texto>{datos.equipo1}</Texto> 
                  <Texto> VS </Texto>
               <Texto>{datos.equipo2}</Texto> 
              <Texto>Fecha: {datos.dia}</Texto>
              <Texto>Hora: {datos.hora}</Texto>
              <Texto>Lugar: {datos.lugar}</Texto>

            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}