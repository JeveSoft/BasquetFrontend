import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

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
  width: 500px;
  height: 400px;
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
    width: 187%;
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
  margin: 25px 25px 25px 25px;
  width: 400px;
  height: 400px;
`;
export const BoxCampo = styled.div`
  width: 400px;
  position: relative;
  z-index: 90;
`;
export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 20px;
`;
export default function ModalArbitro({ estado, cambiarEstado, datos }) {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>DATOS DE ARBITRO</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <BoxCampo>
                <TextBox>ID Arbitro = {datos.IDARBITRO}</TextBox>
                <TextBox>Nombre Arbitro = {datos.NOMBRE}</TextBox>
                <TextBox>CI Arbitro = {datos.CI}</TextBox>
                <TextBox>Email Arbitro = {datos.EMAIL}</TextBox>
                <TextBox>Celular Arbitro = {datos.CELULAR}</TextBox>
                <TextBox>
                  Fecha Nacimiento Arbitro = {datos.FECHANACIMIENTO}
                </TextBox>
                <TextBox>Nacionalidad Arbitro = {datos.NACIONALIDAD}</TextBox>
                <TextBox>Genero Arbitro = {datos.GENERO}</TextBox>
              </BoxCampo>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
