import React, { useEffect, useState } from 'react'
import { NavMenu, BotonNavegacion, Nav, GlobalStyles, ContenedorRegistro, Titulo, DetalleUsuario, BoxCampo, TextBox, InputBox, Category, Label, Radio, NavBoton } from './EstiloRegistro'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import Modal from './Modal';

export default function RegistroEquipo() {
    const [equipo, setEquipo] = useState("")
    const [siglas, setSiglas] = useState("")
    const [logo, setLogo] = useState("")
    const [cantidadJugadores, setCantidadJugadores] = useState("")
    const [creacion, setCreacion] = useState("")
    const [categoria, setCategoria] = useState("")
    const historial = useHistory();
    const [modal, setModal] = useState(false)

    function esValido() {
        var valido = true
        if (equipo === "") {
            toast("Ingesar Nombre Equipo", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
            valido = false
        } else {

        }
        if (siglas === "") {
            toast("Ingesar Siglas de Equipo", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
            valido = false
        } else {

        }
        if (logo === "") {
            toast("Ingesar Logo", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
            valido = false
        } else {

        }
        if (cantidadJugadores === "") {
            toast("Ingesar Cantidad de Jugadores", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
            valido = false
        } else {

        }
        if (creacion === "") {
            toast("Ingesar Creacion de Equipo", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
            valido = false
        } else {

        }
        if (categoria === "") {
            toast("Ingesar Categoria", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
            valido = false
        } else {

        }
        return valido
    }



    const registroPago = () => {
        if (esValido()) {
            setModal(!modal)
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
                    <Titulo>REGISTRO EQUIPO</Titulo>
                    <DetalleUsuario>
                        <BoxCampo>
                            <TextBox>Nombre Equipo</TextBox>
                            <InputBox type="text" placeholder="Nombre Equipo" required id='nombreEquipo' onChange={(e) => { setEquipo(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Siglas Equipo</TextBox>
                            <InputBox type="text" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { setSiglas(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Logo Equipo</TextBox>
                            <InputBox type="email" placeholder="Logo Equipo" required id="logo" onChange={(e) => { setLogo(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Cantidad de Jugadores</TextBox>
                            <InputBox type="text" placeholder="Cantidad de Jugadores" required id="cantidadJugadores" onChange={(e) => { setCantidadJugadores(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Creacion de Equipo </TextBox>
                            <InputBox type="date" placeholder="Creacion de Equipo" required id="creacion" onChange={(e) => { setCreacion(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Categoria</TextBox>
                            <InputBox type="text" placeholder="Categoria" required id="categoria" onChange={(e) => { setCategoria(e.target.value) }} />
                        </BoxCampo>
                    </DetalleUsuario>
                    <NavBoton onClick={registroPago}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton>
                </ContenedorRegistro>
                <Modal 
                estado={modal}
                cambiarEstado={setModal} 
                pestaña = "/registroPago"
                />
            </GlobalStyles>
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )

}
