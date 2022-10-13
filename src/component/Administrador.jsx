import React from 'react'
import { useState } from 'react'
import { ContenedorBoton,NavBoton, BoxCampo, TextBox, InputBox, Titulo2, ContenedorConfiguracion, ContenedorBotones, Botones, BotonLogo, Titulo, ContenedorPrincipal, ContenedorOpciones, Imagen, Detalle } from './EstilosAdministrador'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router'
export default function Administrador() {
    const [titulo, setTitulo] = useState("ADMINISTRADOR")
    const historial = useHistory();
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
                    <Botones onClick={() => { historial.push("/") }}>CERRAR SESION</Botones>
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
                    </Detalle>
                    <ContenedorBoton>
                            <NavBoton>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </NavBoton>
                        </ContenedorBoton>
                </ContenedorConfiguracion>
            }
        </ContenedorPrincipal>
    )
}
