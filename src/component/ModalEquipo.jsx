import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import styled, { css } from 'styled-components'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContenedorModal = styled.div`
  width: 900px;
  min-height: 610px;
  background: white;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 8px 7px 29px 8px;
  padding: 20px;
  height: 290px;
`
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`
export const Titulo = styled.div`
    font-size: 25px;
    font-weight: 1000;
    position: relative;
    &::before{
        content: "";
      position:absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 458%;
    background: linear-gradient(135deg,#000000,#ff7c01);
    }
`
const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: black;
  &:hover{
    background: #c9c9c9;
  }
`
const DetalleUsuario = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`
const SubTitulo = styled.h1`
    font-size:20px;
    margin-top: 10px;
    font-weight: 700;
`
export const BoxCampo = styled.div`
    margin: 10px;
    width: 400px;
    position: relative;
    z-index:90;
`
export const TextBox = styled.span`
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
`
const ImgLogo = styled.img`
    width: 60px;
    height: 60px;
    background: red;
`
const ImgComprobante = styled.img`
    width: 200px;
    height: 200px;
    background: red;
`
const ContenedorBoton = styled.div`
width: 100%;
position: relative;
`
const BotonAñadir = styled.button`
height: 40px;
color: #ff7c01;
outline: none;
border: none;
background: none;
cursor: pointer;
padding: 0;
position: relative;
border: 2px solid #ff7c01;
border-radius: 5px;
font-weight: 1000;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #ff7c01;
    border: 2px solid black;
    color: black;
}

    ${props => props.tipo == 'medio' && css`
        width: 250px;
        left: 36%;

    `}
    ${props => props.tipo == 'completo' && css`
        width: 40%;
        margin: 0px 35px 0px 45px;
    `}
    ${props => props.tipo == 'sinJugador' && css`
        width: 250px;
        left: 36%;
    `}
    ${props => props.tipo == 'habilitado' && css`
        width: 40%;
        margin: 0px 35px 0px 45px;
    `}
`
export default function ModalEquipo({ estado, cambiarEstado, datos, tipo }) {
    const url = "http://127.0.0.1:8000/"

    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <Titulo>INFORMACION</Titulo>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => { cambiarEstado(false) }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </BotonCerrar>
                        {
                            tipo == 'medio' &&
                            <DetalleUsuario>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                                    <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                                    <TextBox>CI Delegado = {datos.CI}</TextBox>
                                    <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                                    <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                                    <TextBox>Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}</TextBox>
                                    <TextBox>Nacionalidad Delegado = {datos.NACIONALIDAD}</TextBox>
                                    <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                                    <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                                    <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                                    <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                                    <TextBox>Fecha Creacion Equipo= {datos.FECHACREACION}</TextBox>
                                    <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                                    <TextBox>Logo Equipo= <ImgLogo></ImgLogo></TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                </BoxCampo>
                                <ContenedorBoton>
                                    <BotonAñadir tipo={tipo}>Recordar</BotonAñadir>
                                </ContenedorBoton>
                            </DetalleUsuario>
                        }
                        {
                            tipo == 'completo' &&
                            <DetalleUsuario>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                                    <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                                    <TextBox>CI Delegado = {datos.CI}</TextBox>
                                    <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                                    <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                                    <TextBox>Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}</TextBox>
                                    <TextBox>Nacionalidad Delegado = {datos.NACIONALIDAD}</TextBox>
                                    <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                                    <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                                    <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                                    <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                                    <TextBox>Fecha Creacion Equipo= {datos.FECHACREACION}</TextBox>
                                    <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                                    <TextBox>Logo Equipo= <ImgLogo></ImgLogo></TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                </BoxCampo>
                                {
                                    datos.COMPROBANTECOMPLETO[0] != null &&
                                    <>
                                        <BoxCampo>
                                            <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                        </BoxCampo>
                                    </>
                                }
                                <ContenedorBoton>
                                    <BotonAñadir tipo={tipo} onClick={() => {
                                        axios.put(url+'habilitarSinJugador/' + datos.IDINSCRIPCION,{"HABILITADO": "SinJugador"}).then(response => {
                                            toast("Equipo Habilitado Con Exito", {
                                                icon: "✅", duration: 3000, style: {
                                                    border: '2px solid #ff7c01',
                                                    padding: '10px',
                                                    color: '#fff',
                                                    background: '#000',
                                                    borderRadius: '4%',
                                                },
                                            })
                                            cambiarEstado(false)
                                        })
                                    }}>Habilitar</BotonAñadir>
                                    <BotonAñadir tipo={tipo} onClick={() => {cambiarEstado(false)}}>Cancelar</BotonAñadir>
                                </ContenedorBoton>
                            </DetalleUsuario>
                        }
                        {
                            tipo == 'sinJugador' &&
                            <DetalleUsuario>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                                    <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                                    <TextBox>CI Delegado = {datos.CI}</TextBox>
                                    <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                                    <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                                    <TextBox>Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}</TextBox>
                                    <TextBox>Nacionalidad Delegado = {datos.NACIONALIDAD}</TextBox>
                                    <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                                    <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                                    <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                                    <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                                    <TextBox>Fecha Creacion Equipo= {datos.FECHACREACION}</TextBox>
                                    <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                                    <TextBox>Logo Equipo= <ImgLogo></ImgLogo></TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                </BoxCampo>
                                {
                                    datos.COMPROBANTECOMPLETO[0] != null &&
                                    <>
                                        <BoxCampo>
                                            <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                        </BoxCampo>
                                    </>
                                }
                                <ContenedorBoton>
                                    <BotonAñadir tipo={tipo} onClick={() => { }}>Recordar</BotonAñadir>
                                </ContenedorBoton>
                            </DetalleUsuario>
                        }
                        {
                            tipo == 'habilitado' &&
                            <DetalleUsuario>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                                    <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                                    <TextBox>CI Delegado = {datos.CI}</TextBox>
                                    <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                                    <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                                    <TextBox>Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}</TextBox>
                                    <TextBox>Nacionalidad Delegado = {datos.NACIONALIDAD}</TextBox>
                                    <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                                    <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                                    <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                                    <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                                    <TextBox>Fecha Creacion Equipo= {datos.FECHACREACION}</TextBox>
                                    <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                                    <TextBox>Logo Equipo= <ImgLogo></ImgLogo></TextBox>
                                </BoxCampo>
                                <BoxCampo>
                                    <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                </BoxCampo>
                                {
                                    datos.COMPROBANTECOMPLETO[0] != null &&
                                    <>
                                        <BoxCampo>
                                            <TextBox>Comprobante = <ImgComprobante></ImgComprobante></TextBox>
                                        </BoxCampo>
                                    </>
                                }
                                <ContenedorBoton>
                                    <BotonAñadir tipo={tipo} onClick={() => { }}>Habilitar</BotonAñadir>
                                    <BotonAñadir tipo={tipo} onClick={() => {cambiarEstado(false)}}>Cancelar</BotonAñadir>
                                </ContenedorBoton>
                            </DetalleUsuario>
                        }
                    </ContenedorModal>
                </Overlay>
            }
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )
}
