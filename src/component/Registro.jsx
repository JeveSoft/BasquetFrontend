import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './Nav'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom'
import {  BotonGenerar, GlobalStyles, ContenedorRegistro, Titulo, DetalleUsuario, BoxCampo, TextBox, InputBox, Category, Label, Radio, NavBoton } from './EstiloRegistro'

export default function Registro() {
    const [genero, setGenero] = useState("")
    const historial = useHistory();
    var [nombre, setNombre] = useState("")
    var [carnet, setCarnet] = useState("")
    var [correo, setCorreo] = useState("")
    var [numeroCel, setNumeroCel] = useState("")
    var [fechaNacimiento, setFechaNacimiento] = useState("")
    var [equipo, setEquipo] = useState("")
    var [nacionalidad, setNacionalidad] = useState("")
    var [cantidadJugadores, setCantidadJugadores] = useState("")
    const [actualizo, setActualizo] = useState(false);
    const [jugadores, setJugadores] = useState([
        { Jugador: "1" },
        { Jugador: "2" },
        { Jugador: "3" },
        { Jugador: "4" },
        { Jugador: "5" },
        { Jugador: "6" },
        { Jugador: "7" },
        { Jugador: "8" },
        { Jugador: "9" }
    ])

    const cambioGenero = e => {
        setGenero(e.target.value)
    }

    const eliminarJugadores = () => {
        if (actualizo) {
            setJugadores([
                { Jugador: "1" },
                { Jugador: "2" },
                { Jugador: "3" },
                { Jugador: "4" },
                { Jugador: "5" },
                { Jugador: "6" },
                { Jugador: "7" },
                { Jugador: "8" },
                { Jugador: "9" }])
            document.getElementById("nroJugadores").value = ""
            setCantidadJugadores("")
            setActualizo(false)
        } else {
            toast("Generar Lista de Jugadores", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
        }
    }

    const generarJugadores = () => {
        if (cantidadJugadores != "") {
            if (cantidadJugadores >= 10) {
                var i = 10;
                while (i <= cantidadJugadores) {
                    jugadores.push({ Jugador: i })
                    i++
                }
                setActualizo(true)
            } else {
                setActualizo(true)
            }
        } else {
            toast("Ingesar Cantidad Jugadores", {
                icon: "⚠️", duration: 3000, style: {
                    border: '3px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '25%',
                },
            });
        }

    }

    function esValido() {
        var valido = true
        console.log(nombre)
        if (nombre === "") {
            toast("Ingesar Nombre Usuario", {
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

    const registroJugadores = () => {
        if (esValido()) {
            historial.push('/registroJugadores')
        }

    }

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>logo</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to='/fixture' activeStyle>
                        FIXTURE
                    </NavLink>
                    <NavLink to='/equipo' activeStyle>
                        EQUIPOS
                    </NavLink>
                    <NavLink to='/tabla' activeStyle>
                        TABLA DE POSICIONES
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/iniciarSesion'>
                        <img src={require('../Imagenes/menu.png')} />
                    </NavBtnLink>
                </NavBtn>
            </Nav>
            <GlobalStyles>
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
                    <Titulo>EQUIPO Y CANTIDAD JUGADORES</Titulo>
                    <DetalleUsuario>
                        <BoxCampo>
                            <TextBox>EQUIPO</TextBox>
                            <InputBox type="text" placeholder="Equipo" required id='equipo' onChange={(e) => { setEquipo(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Numero de Jugadores</TextBox>
                            <InputBox type="number" placeholder="Nº Jugadores" required id='nroJugadores' max={20} min={9} onChange={(e) => { setCantidadJugadores(e.target.value) }} />
                        </BoxCampo>
                        <BoxCampo>
                            <BotonGenerar onClick={generarJugadores}>
                                <FontAwesomeIcon icon={faPlus} />
                            </BotonGenerar>
                        </BoxCampo>
                        <BoxCampo>
                            <BotonGenerar onClick={eliminarJugadores}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </BotonGenerar>
                        </BoxCampo>
                    </DetalleUsuario>
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
                    }
                    <div className='button'>
                        <NavBoton onClick={registroJugadores}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </NavBoton>
                    </div>
                </ContenedorRegistro>
            </GlobalStyles>
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )
}