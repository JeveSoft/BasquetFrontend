import React, { useEffect } from 'react'
import { useState } from 'react'
import { Texto, NavBotonMenu, Nav, BotonVer, Letra, ContenedorTable, BotonAñadir, InputFile, LabelFile, ContenedorBoton, BoxCampo, TextBox, InputBox, Titulo2, ContenedorConfiguracion, ContenedorBotones, Botones, Titulo, ContenedorPrincipal, ContenedorOpciones, Imagen, Detalle, LetraCuerpo, ImagenLogo, BotonGuardar, ContenedorBotonGuardar } from './EstilosAdministrador'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faFileInvoice, faTrashCan, faCirclePlay, faImage, faTrash, faCircleUser, faUserTie, faEnvelopeOpenText, faCalendarCheck, faCheckCircle, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Modal, { Boton } from './Modal';
import ModalRegistroArbitro from './ModalRegistroArbitro'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ModalAñadirInformacion from './ModalAñadirInformacion'
import ModalFoto from './ModalFoto'
import ModalArbitro from './ModalArbitro'
import { IconoValidacion } from './EstiloRegistro'

const styles = makeStyles({
    encabezado: {
        padding: '0 30px',
        boxShadow: '0 2px 3px 2px #000000'
    },
    bordes: {
        boxShadow: '0 2px 3px 2px #ff7c01',
    }
})

export default function Administrador() {
    const [titulo, setTitulo] = useState("ADMINISTRADOR")
    const classes = styles();
    const [modalRegistroArbitro, setModalRegistroArbitro] = useState(false)
    const [modalAñadirInfo, setModalAñadirInfo] = useState(false)
    const [modalVerFoto, setModalVerFoto] = useState(false)
    const [modalVerArbitro, setModalVerArbitro] = useState(false)
    const [modal, setModal] = useState(false)
    const [activoCL, setActivoCL] = useState("")
    const [activoE, setActivoE] = useState("")
    const [activoA, setActivoA] = useState("")
    const [activoI, setActivoI] = useState("")
    const [activoNR, setActivoNR] = useState("")
    const [activoMP, setActivoMP] = useState("true")
    const [activoRS, setActivoRS] = useState("")
    const [activoR, setActivoR] = useState("")
    const [opcion, setOpcion] = useState("1")
    const [activoF, setActivoF] = useState("true")
    const [activoL, setActivoL] = useState("")
    const [activoP, setActivoP] = useState("")
    const [opcionL, setOpcionL] = useState("1")
    const [validarPreInicio,setValidarPreInicio] = useState(null)
    const [validarPreFin,setValidarPreFin] = useState(null)
    const [fechaPreInicio,setFechaPreInicio] = useState("")
    const [fechaPreFin,setFechaPreFin] = useState("")
    const [eliminarFoto, setEliminarFoto] = useState(false)
    const [eliminarArbitro, setEliminarArbitro] = useState(false)
    var codigoArbitro = "4"
    
    const validar = () => {
        if (opcionL== '1' && titulo == "CONFIGURAR LIGA"){
            var fechaActual = new Date().toISOString()
                if (fechaPreInicio > fechaActual) {
                    setValidarPreInicio('true')
                }else{
                    setValidarPreInicio('false')
                }
        }
        
        /*if (opcionL== '1' && titulo == "CONFIGURAR LIGA"){
            if (fechaNacimiento != "") {
                var fechaActual = new Date().toISOString()
                if (fechaNacimiento < fechaActual) {
                    var edad = calcularEdad(fechaNacimiento);
                    if (edad > 18) {
                        setValidarFechaN('true')
                    }
                } else {
                    setValidarFechaN('false')
                }
            }
        }*/
    }
    return (
        <ContenedorPrincipal>
            <ContenedorOpciones>
                <Titulo>{titulo}</Titulo>
                <ImagenLogo src={require('../Imagenes/LogoBlanco.png')} onClick={() => { setTitulo("ADMINISTRADOR"); setActivoCL(""); setActivoE(""); setActivoA(""); setActivoI(""); }} />
                <ContenedorBotones>
                    <Botones opcion={activoCL} onClick={() => { setTitulo("CONFIGURAR LIGA"); setActivoCL("true"); setActivoE(""); setActivoA(""); setActivoI(""); }}>CONFIGURAR LIGA</Botones>
                    <Botones opcion={activoE} onClick={() => { setTitulo("EQUIPO"); setActivoCL(""); setActivoE("true"); setActivoA(""); setActivoI(""); }}>EQUIPO</Botones>
                    <Botones opcion={activoA} onClick={() => { setTitulo("ARBITRO"); setActivoCL(""); setActivoE(""); setActivoA("true"); setActivoI(""); }}>ARBITRO</Botones>
                    <Botones opcion={activoI} onClick={() => { console.log (codigoArbitro);setTitulo("INFORMACIÓN"); setActivoCL(""); setActivoE(""); setActivoA(""); setActivoI("true"); }}>INFORMACIÓN</Botones>
                    <Botones onClick={() => { setTitulo("ADMINISTRADOR"); setActivoCL(""); setActivoE(""); setActivoA(""); setActivoI(""); setModal(!modal) }}>CERRAR SESION</Botones>
                </ContenedorBotones>
            </ContenedorOpciones>
            {
                titulo === "ADMINISTRADOR" &&
                <Imagen src={require('../Imagenes/Logo.png')}/>
            }
            {
                titulo === "CONFIGURAR LIGA" &&
                <ContenedorConfiguracion>
                    <Titulo2>CONFIGURAR LIGA</Titulo2>
                    <Nav>
                        <NavBotonMenu activo={activoF} onClick={() => { setActivoF("true"); setActivoL(""); setActivoP(""); setOpcionL("1") }}><Texto>FECHAS DE LIGA</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoL} onClick={() => { setActivoF(""); setActivoL("true"); setActivoP(""); setOpcionL("2") }}><Texto>CONFIGURACION LIGA</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoP} onClick={() => { setActivoF(""); setActivoL(""); setActivoP("true"); setOpcionL("3") }}><Texto>SUBIR PAGOS LIGA</Texto></NavBotonMenu>
                    </Nav>
                    {
                        opcionL == '1' &&
                        <Detalle>
                            <BoxCampo>
                                <TextBox>Inicio Pre-Inscripcion</TextBox>
                                <InputBox type="date" valido={validarPreFin} id="fechaPreInicio" onChange={(e) => { setFechaPreInicio(e.target.value) }} onKeyUp={validar}
                                onBlur={validar}/>
                                <IconoValidacion icon={validarPreFin === 'true' ? faCircleCheck : faCircleXmark} valido={validarPreInicio} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Fin Pre-Inscripcion</TextBox>
                                <InputBox type="date" valido={validarPreFin} id="fechaPreFin" onChange={(e) => { setFechaPreFin(e.target.value) }} onKeyUp={validar}
                                onBlur={validar}/>
                                <IconoValidacion icon={validarPreFin === 'true' ? faCircleCheck : faCircleXmark} valido={validarPreFin} />
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
                            <ContenedorBotonGuardar>
                                <BotonGuardar>Guardar</BotonGuardar>
                            </ContenedorBotonGuardar>
                        </Detalle>
                    }
                    {
                        opcionL == '3' &&
                        <Detalle>
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
                    }
                </ContenedorConfiguracion>
            }
            {
                titulo === "EQUIPO" &&
                <ContenedorConfiguracion>
                    <Titulo2>EQUIPO</Titulo2>
                    <Nav>
                        <NavBotonMenu activo={activoMP} onClick={() => { setActivoNR(""); setActivoRS(""); setActivoR(""); setActivoMP("true"); setOpcion("1") }}><Texto >MEDIO PAGO</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoNR} onClick={() => { setActivoNR("true"); setActivoRS(""); setActivoR(""); setActivoMP(""); setOpcion("2") }}><Texto >EQUIPOS NO REGISTRADOS</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoRS} onClick={() => { setActivoNR(""); setActivoRS("true"); setActivoR(""); setActivoMP(""); setOpcion("3") }}><Texto >EQUIPOS SIN JUGADORES</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoR} onClick={() => { setActivoNR(""); setActivoRS(""); setActivoR("true"); setActivoMP(""); setOpcion("4") }}><Texto >EQUIPOS HABILITADOS</Texto></NavBotonMenu>
                    </Nav>
                    <ContenedorTable ventana='2'>
                        {opcion == '1' &&
                            <Table>
                                <TableHead className={classes.encabezado}>
                                    <TableRow>
                                        <TableCell><Letra equipo='true'>DELEGADO</Letra></TableCell>
                                        <TableCell><Letra equipo='true'>EQUIPO</Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faTruckFast} /></Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className={classes.bordes}>
                                        <TableCell><LetraCuerpo equipo='true'>Sergio Brayan Soliz123123123 Nogales</LetraCuerpo></TableCell>
                                        <TableCell><LetraCuerpo equipo='true'>Estrellas fugaces</LetraCuerpo></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faEnvelopeOpenText} /></BotonVer></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        }
                        {opcion == '2' &&
                            <Table>
                                <TableHead className={classes.encabezado}>
                                    <TableRow>
                                        <TableCell><Letra>DELEGADO</Letra></TableCell>
                                        <TableCell><Letra>EQUIPO</Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faCalendarCheck} /></Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className={classes.bordes}>
                                        <TableCell><LetraCuerpo>11111111</LetraCuerpo></TableCell>
                                        <TableCell><LetraCuerpo>Juan Garcia</LetraCuerpo></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faFileInvoice} /></BotonVer></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        }
                        {opcion == '3' &&
                            <Table>
                                <TableHead className={classes.encabezado}>
                                    <TableRow>
                                        <TableCell><Letra>DELEGADO</Letra></TableCell>
                                        <TableCell><Letra>EQUIPO</Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faCirclePlay} /></Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className={classes.bordes}>
                                        <TableCell><LetraCuerpo>11111111</LetraCuerpo></TableCell>
                                        <TableCell><LetraCuerpo>Juan Garcia</LetraCuerpo></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faFileInvoice} /></BotonVer></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        }
                        {opcion == '4' &&
                            <Table>
                                <TableHead className={classes.encabezado}>
                                    <TableRow>
                                        <TableCell><Letra>DELEGADO</Letra></TableCell>
                                        <TableCell><Letra>EQUIPO</Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faCheckCircle} /></Letra></TableCell>
                                        <TableCell align='right'><Letra img={'true'}><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className={classes.bordes}>
                                        <TableCell><LetraCuerpo>11111111</LetraCuerpo></TableCell>
                                        <TableCell><LetraCuerpo>Juan Garcia</LetraCuerpo></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faFileInvoice} /></BotonVer></TableCell>
                                        <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        }

                    </ContenedorTable>
                </ContenedorConfiguracion>
            }
            {
                titulo === "ARBITRO" &&
                <ContenedorConfiguracion>
                    <Titulo2>ARBITRO</Titulo2>
                    <ContenedorTable ventana='1'>
                        <Table>
                            <TableHead className={classes.encabezado}>
                                <TableRow>
                                    <TableCell><Letra id='true'>ID</Letra></TableCell>
                                    <TableCell><Letra>NOMBRE DE ARBITRO</Letra></TableCell>
                                    <TableCell align='right'><Letra img='true'><FontAwesomeIcon icon={faCircleUser} /></Letra></TableCell>
                                    <TableCell align='right'><Letra img='true'><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className={classes.bordes}>
                                    <TableCell><LetraCuerpo id='true'>417SER1320</LetraCuerpo></TableCell>
                                    <TableCell><LetraCuerpo name='true'>Sergio Brayan Soliz Nogales</LetraCuerpo></TableCell>
                                    <TableCell align='right'><BotonVer onClick={() => setModalVerArbitro(!modalVerArbitro)}><FontAwesomeIcon icon={faUserTie} /></BotonVer></TableCell>
                                    <TableCell align='right'><BotonVer onClick={() => setEliminarArbitro(!eliminarArbitro)}><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </ContenedorTable>
                    <ContenedorBoton>
                        <BotonAñadir onClick={() => setModalRegistroArbitro(!modalRegistroArbitro)}>
                            Añadir Nuevo Arbitro
                        </BotonAñadir>
                    </ContenedorBoton>
                </ContenedorConfiguracion>
            }
            {
                titulo === "INFORMACIÓN" &&
                <ContenedorConfiguracion>
                    <Titulo2>INFORMACIÓN</Titulo2>
                    <ContenedorTable ventana='1'>
                        <Table>
                            <TableHead className={classes.encabezado}>
                                <TableRow>
                                    <TableCell ><Letra imagen='true'>TITULO DE IMAGEN</Letra></TableCell>
                                    <TableCell align='right'><Letra img='true'><FontAwesomeIcon icon={faCirclePlay} /></Letra></TableCell>
                                    <TableCell align='right'><Letra img='true'><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className={classes.bordes}>
                                    <TableCell><LetraCuerpo titulo='true'>Titulo</LetraCuerpo></TableCell>
                                    <TableCell align='right'><BotonVer onClick={() => setModalVerFoto(!modalVerFoto)}><FontAwesomeIcon icon={faImage} /></BotonVer></TableCell>
                                    <TableCell align='right'><BotonVer onClick={() => setEliminarFoto(!eliminarFoto)}><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </ContenedorTable>
                    <ContenedorBoton>
                        <BotonAñadir onClick={() => setModalAñadirInfo(!modalAñadirInfo)}>
                            Añadir Informacion
                        </BotonAñadir>
                    </ContenedorBoton>
                </ContenedorConfiguracion>
            }
            <Modal
                estado={modal}
                cambiarEstado={setModal}
                mensaje={"¿Seguro de cerrar sesion?"}
            />
            <ModalRegistroArbitro
                estado={modalRegistroArbitro}
                cambiarEstado={setModalRegistroArbitro}
                codigo = {codigoArbitro}
            />
            <ModalAñadirInformacion
                estado={modalAñadirInfo}
                cambiarEstado={setModalAñadirInfo}
            />
            <Modal
                estado={eliminarFoto}
                cambiarEstado={setEliminarFoto}
                tipo={'eliminarFoto'}
                mensaje={"¿Seguro de eliminar foto?"}
            />
            <Modal
                estado={eliminarArbitro}
                cambiarEstado={setEliminarArbitro}
                tipo={'eliminarArbitro'}
                mensaje={"¿Seguro de eliminar Arbitro?"}
            />
            <ModalFoto
                estado={modalVerFoto}
                cambiarEstado={setModalVerFoto}
            />
            <ModalArbitro
                estado={modalVerArbitro}
                cambiarEstado={setModalVerArbitro}
            />
        </ContenedorPrincipal>
    )
}