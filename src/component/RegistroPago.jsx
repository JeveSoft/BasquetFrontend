import React from 'react'
import { NavMenu, BotonNavegacion, Nav, GlobalStyles, ContenedorRegistro, Titulo, BoxCampo, TextBox, InputBox, Label, Radio, NavBoton } from './EstiloRegistro'
import { useHistory } from 'react-router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { useState } from 'react'

export const ImagenPago = styled.img`
    height: 300px;
    width: 300px;
`
export const DetalleUsuario = styled.div`
    margin-left: 25%;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content:center;
    align-content: center;
`
export const Category = styled.div`
    display: flex;
    width: 50%;
    margin-left: 20%;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
`
export default function RegistroPago() {
    const historial = useHistory();
    const [pago, setPago] = useState("")
    const cambioPago = e => {
        setPago(e.target.value)
    }

    if (document.title != "Registro") {
        if (document.title === "Inicio") {
            historial.replace('/')
        }
        if (document.title === "Fixture") {
            historial.replace('/fixture')
        }
        if (document.title === "Equipos") {
            historial.replace('/equipos')
        }
        if (document.title === "Tabla Posiciones") {
            historial.replace('/tabla')
        }

    }
    return (
        <>
            <Nav>
                <BotonNavegacion onClick={() => { historial.replace('/') }}><h1>logo</h1></BotonNavegacion>
                <NavMenu>
                    <BotonNavegacion onClick={() => { historial.replace('/fixture') }}>FIXTURE</BotonNavegacion>
                    <BotonNavegacion onClick={() => { historial.replace('/equipo') }}>EQUIPOS</BotonNavegacion>
                    <BotonNavegacion onClick={() => { historial.replace('/tabla') }}>TABLA DE POSICIONES</BotonNavegacion>
                </NavMenu>
            </Nav>
            <GlobalStyles>
                <ContenedorRegistro>
                    <Titulo>PAGO</Titulo>
                    <Category>
                        <Label for="dot-1">
                            <Radio type='radio' name='gender' id="dot-1" value="Medio" checked={pago === "Medio" ? true : false} onChange={cambioPago} />
                            <span className='gender'>Pago Medio</span>
                        </Label>
                        <Label for="dot-2">
                            <Radio type='radio' name='gender' id="dot-2" value="Completo" checked={pago === "Completo" ? true : false} onChange={cambioPago} />
                            <span className='gender'>Pago Completo</span>
                        </Label>
                    </Category>
                    <DetalleUsuario>
                        {
                            pago == "Completo" && <ImagenPago src={require('../Imagenes/2.jpg')} />
                        }
                        {
                            pago == "Medio" && <ImagenPago src={require('../Imagenes/1.jpg')} />
                        }
                    </DetalleUsuario>

                    <NavBoton onClick={""}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton>
                </ContenedorRegistro>
            </GlobalStyles>
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )
}
