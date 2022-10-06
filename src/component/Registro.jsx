import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom'
import { NavBoton1,ContenedorBotones, CategoryPago, DetalleUsuarioPago, ImagenPago, NavMenu, BotonNavegacion, Nav, GlobalStyles, ContenedorRegistro, Titulo, DetalleUsuario, BoxCampo, TextBox, InputBox, Category, Label, Radio, NavBoton } from './EstiloRegistro'
import Modal from './Modal';
import { useEffect } from 'react';

export default function Registro() {
    const [genero, setGenero] = useState("")
    const historial = useHistory();
    var [nombre, setNombre] = useState("")
    var [carnet, setCarnet] = useState("")
    var [correo, setCorreo] = useState("")
    var [numeroCel, setNumeroCel] = useState("")
    var [fechaNacimiento, setFechaNacimiento] = useState("")
    var [nacionalidad, setNacionalidad] = useState("")
    const [modal, setModal] = useState(false)
    const [equipo, setEquipo] = useState("")
    const [siglas, setSiglas] = useState("")
    const [logo, setLogo] = useState("")
    const [cantidadJugadores, setCantidadJugadores] = useState("")
    const [creacion, setCreacion] = useState("")
    const [categoria, setCategoria] = useState("")
    var [ventana1, setVentana1] = useState(true)
    var [ventana2, setVentana2] = useState(false)
    var [ventana3, setVentana3] = useState(false)
    const [pago, setPago] = useState("")
    const cambioPago = e => {
        setPago(e.target.value)
    }

    document.title = "Registro"

    const cambioGenero = e => {
        setGenero(e.target.value)
    }

    function esValidoDelegado() {
        var valido = true
        if (nombre === "") {
            toast("Ingesar Nombre Completo", {
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
        if (carnet === "") {
            toast("Ingesar Carnet Identidad", {
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
        if (correo === "") {
            toast("Ingesar Correo", {
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
        if (numeroCel === "") {
            toast("Ingesar Numero de Celular", {
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
        if (fechaNacimiento === "") {
            toast("Ingesar Fecha de Nacimiento", {
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
        if (nacionalidad === "") {
            toast("Ingesar Nacionalidad", {
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
        if (genero === "") {
            toast("Seleccionar Genero", {
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

    function esValidoEquipo() {
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

    const registroEquipo = () => {
        if (esValidoDelegado()) {
            //setModal(!modal)
            setVentana1(false)
            setVentana2(true)
        }
    }

    const registroPago = () => {
        if (esValidoEquipo()) {
            setVentana2(false)
            setVentana3(true)
        }
    }

    const registroDelegado = () =>{
        setVentana1(true)
        setVentana2(false)
    }   

    const recuperarVentana1 = () =>{
        if (document.getElementById("nombreCompleto") != null){
            document.getElementById("nombreCompleto").value = nombre
        }
        if (document.getElementById("carnetIdentidad") != null){
            document.getElementById("carnetIdentidad").value = carnet
        }
        if (document.getElementById("correo") != null){
            document.getElementById("correo").value = correo
        }
        if (document.getElementById("numeroCelular") != null){
            document.getElementById("numeroCelular").value = numeroCel
        }
        if (document.getElementById("fechaNacimiento") != null){
            document.getElementById("fechaNacimiento").value = fechaNacimiento
        }
        if (document.getElementById("nacionalidad") != null){
            document.getElementById("nacionalidad").value = nacionalidad
        }
    }

    const recuperarVentana2 = () =>{
        if (document.getElementById("nombreEquipo") != null){
            document.getElementById("nombreEquipo").value = equipo
        }
        if (document.getElementById("siglasEquipo") != null){
            document.getElementById("siglasEquipo").value = siglas
        }
        if (document.getElementById("logo") != null){
            document.getElementById("logo").value = logo
        }
        if (document.getElementById("cantidadJugadores") != null){
            document.getElementById("cantidadJugadores").value = cantidadJugadores
        }
        if (document.getElementById("creacion") != null){
            document.getElementById("creacion").value = creacion
        }
        if (document.getElementById("categoria") != null){
            document.getElementById("categoria").value = categoria
        }
    }

    useEffect(function(){
        recuperarVentana1()
        recuperarVentana2()
    })

    return (
        <>
            <Nav>
                <BotonNavegacion onClick={() => { historial.push('/') }}><h1>logo</h1></BotonNavegacion>
                <NavMenu>
                    <BotonNavegacion onClick={() => { historial.push('/fixture') }}>FIXTURE</BotonNavegacion>
                    <BotonNavegacion onClick={() => { historial.push('/equipo') }}>EQUIPOS</BotonNavegacion>
                    <BotonNavegacion onClick={() => { historial.push('/tabla') }}>TABLA DE POSICIONES</BotonNavegacion>
                </NavMenu>
            </Nav>
            <GlobalStyles>
                {ventana1 &&
                    <ContenedorRegistro>
                        <Titulo>REGISTRO DELEGADO</Titulo>
                        <DetalleUsuario>
                            <BoxCampo>
                                <TextBox>Nombre Completo</TextBox>
                                <InputBox type="text" placeholder="Nombre Completo" required id='nombreCompleto' onChange={(e) => { setNombre(e.target.value) }} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Carnet Identidad</TextBox>
                                <InputBox type="text" placeholder="Carnet Identidad" required id="carnetIdentidad" onChange={(e) => { setCarnet(e.target.value) }} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Correo</TextBox>
                                <InputBox type="email" placeholder="Correo" required id="correo" onChange={(e) => { setCorreo(e.target.value) }} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Numero de Celular</TextBox>
                                <InputBox type="text" placeholder="Numero de Celular" required id="numeroCelular" onChange={(e) => { setNumeroCel(e.target.value) }} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Fecha Nacimiento </TextBox>
                                <InputBox type="date" placeholder="Fecha Nacimiento" required id="fechaNacimiento" onChange={(e) => { setFechaNacimiento(e.target.value) }} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Nacionalidad</TextBox>
                                <InputBox type="text" placeholder="Nacionalidad" required id="nacionalidad" onChange={(e) => { setNacionalidad(e.target.value) }} />
                            </BoxCampo>
                        </DetalleUsuario>
                        <Titulo>GENERO</Titulo>
                        <Category>
                            <Label for="dot-1">
                                <Radio type='radio' name='gender' id="dot-1" value="Hombre" checked={genero === "Hombre" ? true : false} onChange={cambioGenero} />
                                <span className='gender'>Hombre</span>
                            </Label>
                            <Label for="dot-2">
                                <Radio type='radio' name='gender' id="dot-2" value="Mujer" checked={genero === "Mujer" ? true : false} onChange={cambioGenero} />
                                <span className='gender'>Mujer</span>
                            </Label>
                        </Category>
                        <ContenedorBotones>
                            <NavBoton1 onClick={registroEquipo}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </NavBoton1>
                        </ContenedorBotones>
                    </ContenedorRegistro>
                }
                {ventana2 &&
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
                        <ContenedorBotones>
                            <NavBoton left onClick={registroDelegado} >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </NavBoton>
                            <NavBoton right onClick={registroPago} >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </NavBoton>
                        </ContenedorBotones>
                    </ContenedorRegistro>
                }
                {
                    ventana3 &&
                    <ContenedorRegistro>
                        <Titulo>PAGO</Titulo>
                        <CategoryPago>
                            <Label for="dot-1">
                                <Radio type='radio' name='gender' id="dot-1" value="Medio" checked={pago === "Medio" ? true : false} onChange={cambioPago} />
                                <span className='gender'>Pago Medio</span>
                            </Label>
                            <Label for="dot-2">
                                <Radio type='radio' name='gender' id="dot-2" value="Completo" checked={pago === "Completo" ? true : false} onChange={cambioPago} />
                                <span className='gender'>Pago Completo</span>
                            </Label>
                        </CategoryPago>
                        <DetalleUsuarioPago>
                            {
                                pago == "Completo" && <ImagenPago src={require('../Imagenes/2.jpg')} />
                            }
                            {
                                pago == "Medio" && <ImagenPago src={require('../Imagenes/1.jpg')} />
                            }
                        </DetalleUsuarioPago>
                        <ContenedorBotones>
                            <NavBoton left onClick={() => { setVentana3(false); setVentana2(true); }} >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </NavBoton>
                            <NavBoton right onClick={() => { setVentana3(false);}} >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </NavBoton>
                        </ContenedorBotones>
                    </ContenedorRegistro>
                    
                }
                <Modal
                    estado={modal}
                    cambiarEstado={setModal}
                    pestaña="/registroEquipo"
                />
            </GlobalStyles>
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )
}
/*
{
    jugadores.map(jugador => {
        if (actualizo) {
            return (
                <div>
                    <Titulo>JUGADOR {jugador.Jugador}</Titulo>
                    <DetalleUsuario key={jugador.Jugador}>
                        <BoxCampo>
                            <TextBox>Nombre Completo</TextBox>
                            <InputBox type="text" placeholder="Nombre Completo" required id='nombreCompleto' onChange={(e) => { nombre = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Carnet Identidad</TextBox>
                            <InputBox type="text" placeholder="Carnet Identidad" required id="carnetIdentidad" onChange={(e) => { carnet = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Numero de Celular</TextBox>
                            <InputBox type="text" placeholder="Numero de Celular" required id="numeroCelular" onChange={(e) => { numeroCel = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Numero de Jugador</TextBox>
                            <InputBox type="text" placeholder="Numero de Celular" required id="numeroCelular" onChange={(e) => { numeroCel = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Fecha Nacimiento </TextBox>
                            <InputBox type="date" placeholder="Fecha Nacimiento" required id="fechaNacimiento" onChange={(e) => { fechaNacimiento = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Nacionalidad</TextBox>
                            <InputBox type="text" placeholder="Nacionalidad" required id="nacionalidad" onChange={(e) => { nacionalidad = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Posicion</TextBox>
                            <InputBox type="text" placeholder="Numero de Celular" required id="numeroCelular" onChange={(e) => { numeroCel = e.target.value }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Foto Identificacion</TextBox>
                            <InputBox type="text" placeholder="Nacionalidad" required id="nacionalidad" onChange={(e) => { nacionalidad = e.target.value }} />
                        </BoxCampo>

                    </DetalleUsuario>
                </div>
            )
            setActualizo(false)
        }
    })
}*/