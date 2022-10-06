import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom'
import { NavMenu, BotonNavegacion, Nav, GlobalStyles, ContenedorRegistro, Titulo, DetalleUsuario, BoxCampo, TextBox, InputBox, Category, Label, Radio, NavBoton } from './EstiloRegistro'
import Modal from './Modal';

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
    document.title = "Registro"

    const cambioGenero = e => {
        setGenero(e.target.value)
    }

    function esValido() {
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

    const registroJugadores = () => {
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
                    <NavBoton onClick={registroJugadores}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton>
                </ContenedorRegistro>
                <Modal 
                estado={modal}
                cambiarEstado={setModal} 
                pestaña = "/registroEquipo"
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