import React from 'react'
import { useState } from 'react'
import { InputFile, LabelFile, ContenedorBoton, NavBoton, BoxCampo, TextBox, InputBox, Titulo2, ContenedorConfiguracion, ContenedorBotones, Botones, BotonLogo, Titulo, ContenedorPrincipal, ContenedorOpciones, Imagen, Detalle } from './EstilosAdministrador'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'
import Modal from './Modal';
import IniciarSesion from './IniciarSesion'
export default function Administrador() {
    const [titulo, setTitulo] = useState("ADMINISTRADOR")
    const historial = useHistory();
    const [modal, setModal] = useState(false)
    return (
        <ContenedorPrincipal>
            <ContenedorOpciones>
                <Titulo>{titulo}</Titulo>
                <BotonLogo onClick={() => { setTitulo("ADMINISTRADOR") }}></BotonLogo>
                <ContenedorBotones>
                    <Botones onClick={() => { setTitulo("CONFIGURAR LIGA") }}>CONFIGURAR LIGA</Botones>
                    <Botones onClick={() => { setTitulo("EQUIPO") }}>EQUIPO</Botones>
                    <Botones onClick={() => { setTitulo("PAGOS") }}>PAGOS</Botones>
                    <Botones onClick={() => { setTitulo("INFORMACIÓN") }}>INFORMACIÓN</Botones>
                    <Botones onClick={() => setModal(!modal)}>CERRAR SESION</Botones>
                </ContenedorBotones>
            </ContenedorOpciones>
            {
                titulo === "ADMINISTRADOR" &&
                <Imagen />
            }
            {
                titulo === "CONFIGURAR LIGA" &&
                <ContenedorConfiguracion>
                    <Titulo2>CONFIGURAR LIGA</Titulo2>
                    <Detalle>
                        <BoxCampo>
                            <TextBox>Inicio Pre-Inscripcion</TextBox>
                            <InputBox type="date" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Fin Pre-Inscripcion</TextBox>
                            <InputBox type="date" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Inicio Inscripcion</TextBox>
                            <InputBox type="date" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Fin Inscripcion</TextBox>
                            <InputBox type="date" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Inicio Liga</TextBox>
                            <InputBox type="date" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Fin Liga</TextBox>
                            <InputBox type="date" placeholder="Siglas Equipo" required id="siglasEquipo" onChange={(e) => { }} />
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Pago Mitad</TextBox>
                            <InputFile type="file" name="" id="mitad" hidden />
                            <LabelFile for="mitad" id='imagenMitad'>Seleccionar Archivo</LabelFile>
                        </BoxCampo>
                        <BoxCampo>
                            <TextBox>Pago Completo</TextBox>
                            <InputFile type="file" name="" id="completo" hidden />
                            <LabelFile for="completo" id='imagenCompleto'>Seleccionar Archivo</LabelFile>
                        </BoxCampo>
                    </Detalle>
                    <ContenedorBoton>
                        <NavBoton>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </NavBoton>
                    </ContenedorBoton>
                </ContenedorConfiguracion>
            }
            {
                titulo === "EQUIPO" &&
                <ContenedorConfiguracion>
                    <Titulo2>EQUIPO</Titulo2>

                </ContenedorConfiguracion>
            }
            {
                titulo === "PAGOS" &&
                <ContenedorConfiguracion>
                    <Titulo2>PAGOS</Titulo2>

                </ContenedorConfiguracion>
            }
            {
                titulo === "INFORMACIÓN" &&
                <ContenedorConfiguracion>
                    <Titulo2>INFORMACIÓN</Titulo2>

                </ContenedorConfiguracion>
            }
            <Modal
                estado={modal}
                cambiarEstado={setModal}
            />
        </ContenedorPrincipal>
    )
}
