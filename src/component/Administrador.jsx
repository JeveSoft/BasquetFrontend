import React, { useEffect } from 'react'
import { useState } from 'react'
import { Texto, NavBotonMenu, Nav, BotonVer, Letra, ContenedorTable, BotonAñadir, InputFile, LabelFile, ContenedorBoton, BoxCampo, TextBox, InputBox, Titulo2, ContenedorConfiguracion, ContenedorBotones, Botones, Titulo, ContenedorPrincipal, ContenedorOpciones, Imagen, Detalle, LetraCuerpo, ImagenLogo, BoxCampoBoton, Img, ImgCarga } from './EstilosAdministrador'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faFileInvoice, faTrashCan, faCirclePlay, faImage, faTrash, faCircleUser, faUserTie, faEnvelopeOpenText, faCalendarCheck, faCheckCircle, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';
import ModalRegistroArbitro from './ModalRegistroArbitro'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ModalAñadirInformacion from './ModalAñadirInformacion'
import ModalFoto from './ModalFoto'
import ModalArbitro from './ModalArbitro'
import { IconoValidacion } from './EstiloRegistro'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import ModalEquipo from './ModalEquipo'

const styles = makeStyles({
    encabezado: {
        padding: '0 30px',
        boxShadow: '0 2px 3px 2px #000000'
    },
    bordes: {
        boxShadow: '0 2px 3px 2px #ff7c01',

    },
    celdas: {
        width: '200px',
        background: 'red'
    }
})

export default function Administrador() {
    const [titulo, setTitulo] = useState("ADMINISTRADOR")
    const classes = styles();
    const [modalRegistroArbitro, setModalRegistroArbitro] = useState(false)
    const [modalAñadirInfo, setModalAñadirInfo] = useState(false)
    const [modalAñadirCategoria, setModalAñadirCategoria] = useState(false)
    const [modalAñadirReglamento, setModalAñadirReglamento] = useState(false)
    const [modalVerFoto, setModalVerFoto] = useState(false)
    const [modalVerArbitro, setModalVerArbitro] = useState(false)
    const [modalEquipo, setModalEquipo] = useState(false)
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
    const [validarPreInicio, setValidarPreInicio] = useState(null)
    const [validarPreFin, setValidarPreFin] = useState(null)
    const [validarInicio, setValidarInicio] = useState(null)
    const [validarFin, setValidarFin] = useState(null)
    const [validarInicioLiga, setValidarInicioLiga] = useState(null)
    const [validarFinLiga, setValidarFinLiga] = useState(null)
    const [fechaPreInicio, setFechaPreInicio] = useState("")
    const [fechaPreFin, setFechaPreFin] = useState("")
    const [fechaInicio, setFechaInicio] = useState("")
    const [fechaFin, setFechaFin] = useState("")
    const [fechaInicioLiga, setFechaInicioLiga] = useState("")
    const [fechaFinLiga, setFechaFinLiga] = useState("")
    const [eliminarFoto, setEliminarFoto] = useState(false)
    const [eliminarArbitro, setEliminarArbitro] = useState(false)
    var codigoArbitro = "4"
    var fechas = null
    const [nombreBoton, setNombreBoton] = useState("Guardar")
    const [empezo, setEmpezo] = useState(false)
    const [listaCategorias, setListaCategoria] = useState(null)
    const [listaMedioPago, setListaMedioPago] = useState([])
    const [obtuvoMP, setObtuvoMP] = useState(false)
    const [obtuvoPC, setObtuvoPC] = useState(false)
    const [listaPagoCompleto, setListaPagoCompleto] = useState([])
    const [obtuvoHS, setObtuvoHS] = useState(false)
    const [listaHabilitadoSin, setListaHabilitadoSin] = useState([])
    const [obtuvoH, setObtuvoH] = useState(false)
    const [datos, setDatos] = useState([])
    const [obtuvoC, setObtuvoC] = useState(false)
    const [obtuvoFechas, setObtuvoFechas] = useState(false)
    const [obtuvoA, setObtuvoA] = useState(false)
    const [obtuvoI, setObtuvoI] = useState(false)
    const [listaArbitro, setListaArbitro] = useState([])
    const [listaHabilitado, setListaHabilitado] = useState([])
    const [listaInformacion, setListaInformacion] = useState([])
    const [elEquipo, setElEquipo] = useState([])
    const [tipoEquipo, settipoEquipo] = useState([])
    const url = "http://127.0.0.1:8000/"
    const [espera, setEspera] = useState('false')
    const [inhabilitado, setInhabilitado] = useState(false)

    const validarFechaFinLiga = () => {
        if (fechaFinLiga != "") {
            if (fechaFinLiga > fechaInicioLiga && validarInicioLiga == 'true' && validarInicio == 'true' && validarFin == 'true' && validarPreFin == 'true' && validarPreInicio == 'true') {
                setValidarFinLiga('true')
            } else {
                setValidarFinLiga('false')
            }
        } else {
            setValidarFinLiga(null)
        }
    }
    const validarFechaInicioLiga = () => {
        if (fechaInicioLiga != "") {
            if (fechaInicioLiga > fechaFin && validarInicio == 'true' && validarFin == 'true' && validarPreFin == 'true' && validarPreInicio == 'true') {
                setValidarInicioLiga('true')
            } else {
                setValidarInicioLiga('false')
            }
        } else {
            setValidarInicioLiga(null)
        }
    }
    const validarFechaInicio = () => {
        if (fechaInicio != "") {
            if (fechaInicio > fechaPreFin && validarPreFin == 'true' && validarPreInicio == 'true') {
                setValidarInicio('true')
            } else {
                setValidarInicio('false')
            }
        } else {
            setValidarInicio(null)
        }
    }
    const validarFechaFin = () => {
        if (fechaFin != "") {
            if (fechaFin > fechaInicio && validarInicio == 'true' && validarPreFin == 'true' && validarPreInicio == 'true') {
                setValidarFin('true')
            } else {
                setValidarFin('false')
            }
        } else {
            setValidarFin(null)
        }
    }
    const validarFechaPreFin = () => {
        if (fechaPreFin != "") {
            if (fechaPreFin > fechaPreInicio && validarPreInicio == 'true') {
                setValidarPreFin('true')
            } else {
                setValidarPreFin('false')
            }
        } else {
            setValidarPreFin(null)
        }
    }
    const validarFechaPreInicio = () => {
        if (fechaPreInicio != "") {
            if (!empezo) {
                var fechaActual = new Date().toISOString()
                if (fechaPreInicio > fechaActual) {
                    setValidarPreInicio('true')
                } else {
                    setValidarPreInicio('false')
                }
            } else {
                setValidarPreInicio('true')
            }

        } else {
            setValidarPreInicio(null)
        }
    }
    const subirPagos = () => {
        setEspera('true')
        setInhabilitado(true)
        axios.get(url + 'todosCampeonatos').then(response => {
            if (response.data.length > 0) {
                var pagos = {
                    "DESCRIPCION": "",
                    "INIPREINSCRIPCION": "",
                    "FINPREINSCRIPCION": "",
                    "INIINSCRIPCION": "",
                    "FININSCRIPCION": "",
                    "INICIOLIGA": "",
                    "FINLIGA": "",
                    "PAGOMITAD": "pagomedio.jpg",
                    "PAGOCOMPLETO": "pagocompleto.jpg"
                }
                axios.put(url+'acutalizarPagos/'+response.data[0].IDCAMPEONATO,pagos).then(response => {
                    setEspera('false')
                    setInhabilitado(false)
                    toast("Pagos Establecidas", {
                        icon: "✅", duration: 3000, style: {
                            border: '2px solid #ff7c01',
                            padding: '10px',
                            color: '#fff',
                            background: '#000',
                            borderRadius: '4%',
                        },
                    });
                })

            } else {
                var pagos = {
                    "DESCRIPCION": "",
                    "INIPREINSCRIPCION": "",
                    "FINPREINSCRIPCION": "",
                    "INIINSCRIPCION": "",
                    "FININSCRIPCION": "",
                    "INICIOLIGA": "",
                    "FINLIGA": "",
                    "PAGOMITAD": "pagomedio.jpg",
                    "PAGOCOMPLETO": "pagocompleto.jpg"
                }
                axios.post(url + 'añadirCampeonato', pagos).then(response => {
                    setEspera('false')
                    setInhabilitado(false)
                    toast("Pagos Establecidas", {
                        icon: "✅", duration: 3000, style: {
                            border: '2px solid #ff7c01',
                            padding: '10px',
                            color: '#fff',
                            background: '#000',
                            borderRadius: '4%',
                        },
                    });
                })
            }
        })
    }
    const subirFechas = () => {
        setEspera('true')
        setInhabilitado(true)
        if (validarFinLiga == 'true' && validarInicioLiga == 'true' && validarInicio == 'true' && validarFin == 'true' && validarPreFin == 'true' && validarPreInicio == 'true') {
            axios.get(url + 'todosCampeonatos').then(response => {
                if (response.data.length > 0) {
                    axios.put(url + 'acutalizarFechas/' + response.data[0].IDCAMPEONATO,
                        {
                            "INIPREINSCRIPCION": fechaPreInicio,
                            "FINPREINSCRIPCION": fechaPreFin,
                            "INIINSCRIPCION": fechaInicio,
                            "FININSCRIPCION": fechaFin,
                            "INICIOLIGA": fechaInicioLiga,
                            "FINLIGA": fechaFinLiga
                        }).then(response => {
                            setEspera('false')
                            setInhabilitado(false)
                            toast("Fechas Establecidas", {
                                icon: "✅", duration: 3000, style: {
                                    border: '2px solid #ff7c01',
                                    padding: '10px',
                                    color: '#fff',
                                    background: '#000',
                                    borderRadius: '4%',
                                },
                            });
                        })
                } else {
                    var fechas = {
                        "DESCRIPCION": "",
                        "INIPREINSCRIPCION": fechaPreInicio,
                        "FINPREINSCRIPCION": fechaPreFin,
                        "INIINSCRIPCION": fechaInicio,
                        "FININSCRIPCION": fechaFin,
                        "INICIOLIGA": fechaInicioLiga,
                        "FINLIGA": fechaFinLiga,
                        "PAGOMITAD": "",
                        "PAGOCOMPLETO": ""
                    }
                    axios.post(url + 'añadirCampeonato', fechas).then(response => {
                        setEspera('false')
                        setInhabilitado(false)
                        toast("Fechas Establecidas", {
                            icon: "✅", duration: 3000, style: {
                                border: '2px solid #ff7c01',
                                padding: '10px',
                                color: '#fff',
                                background: '#000',
                                borderRadius: '4%',
                            },
                        });
                    })
                }
            })

        } else {
            toast("Verificar Fechas", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
        }
    }
    const obtenerFechas = () => {
        if (titulo === "CONFIGURAR LIGA" && opcionL === '1') {
            if (fechas == null) {
                if (nombreBoton == "Guardar") {
                    axios.get(url + 'todosCampeonatos').then(response => {
                        fechas = response.data
                        setObtuvoFechas(true)
                        if (fechas.length > 0) {
                            setFechaPreInicio(fechas[0].INIPREINSCRIPCION)
                            document.getElementById('fechaPreInicio').value = fechaPreInicio
                            setFechaPreFin(fechas[0].FINPREINSCRIPCION)
                            document.getElementById('fechaPreFin').value = fechaPreFin
                            setFechaInicio(fechas[0].INIINSCRIPCION)
                            document.getElementById('fechaInicio').value = fechaInicio
                            setFechaFin(fechas[0].FININSCRIPCION)
                            document.getElementById('fechaFin').value = fechaFin
                            setFechaInicioLiga(fechas[0].INICIOLIGA)
                            document.getElementById('fechaInicioLiga').value = fechaInicioLiga
                            setFechaFinLiga(fechas[0].FINLIGA)
                            document.getElementById('fechaFinLiga').value = fechaFinLiga
                            setNombreBoton("Editar")
                            verificarFechas()
                            setObtuvoFechas(true)
                        }
                    })
                }
            }
        }

    }
    useEffect(function () {
        if (titulo === "CONFIGURAR LIGA" && nombreBoton !== 'Editar' && opcionL === '1') {
            if (!obtuvoFechas) {
                obtenerFechas()
            } else {
                document.getElementById('fechaPreInicio').value = fechaPreInicio
                document.getElementById('fechaPreFin').value = fechaPreFin
                document.getElementById('fechaInicio').value = fechaInicio
                document.getElementById('fechaFin').value = fechaFin
                document.getElementById('fechaInicioLiga').value = fechaInicioLiga
                document.getElementById('fechaFinLiga').value = fechaFinLiga
            }
        } else {
            if (titulo === "CONFIGURAR LIGA" && opcionL === '1') {
                document.getElementById('fechaPreInicio').value = fechaPreInicio
                document.getElementById('fechaPreFin').value = fechaPreFin
                document.getElementById('fechaInicio').value = fechaInicio
                document.getElementById('fechaFin').value = fechaFin
                document.getElementById('fechaInicioLiga').value = fechaInicioLiga
                document.getElementById('fechaFinLiga').value = fechaFinLiga
            }
        }
        if (titulo === "ARBITRO") {
            obtenerArbitro()
        }
        if (titulo === "INFORMACIÓN") {
            obtenerInformacion()
        }
        if (titulo === "EQUIPO") {
            if (opcion === '1') { obtenerMedioPago() }
            if (opcion === '2') { obtenerPagoCompleto() }
            if (opcion === '3') { obtenerHabilitadoSin() }
            if (opcion === '4') { obtenerHabilitado() }
        }
        obtenerCategoria()
        if (titulo === "CONFIGURAR LIGA" && opcionL === '1') {
            validarFechaPreInicio()
            validarFechaPreFin()
            validarFechaInicio()
            validarFechaFin()
            validarFechaInicioLiga()
            validarFechaFinLiga()
        }
    })
    const verificarFechas = () => {
        var fechaActual = new Date().toISOString()
        if (fechaPreInicio < fechaActual) {
            setEmpezo(true)
        }
    }
    const obtenerCategoria = () => {
        axios.get(url + 'categorias').then(response => {
            setListaCategoria(response.data)
            setObtuvoC(true)
        })
    }
    const obtenerArbitro = () => {
        axios.get(url + 'arbitros').then(response => {
            setListaArbitro(response.data)
            setObtuvoA(true)
        })
    }
    const obtenerPagoCompleto = () => {
        axios.get(url + 'pagoCompleto').then(response => {
            setListaPagoCompleto(response.data)
            setObtuvoPC(true)
        })
    }
    const obtenerMedioPago = () => {
        axios.get(url + 'medioPago').then(response => {
            setListaMedioPago(response.data)
            setObtuvoMP(true)
        })
    }
    const obtenerHabilitadoSin = () => {
        axios.get(url + 'habilitadoSin').then(response => {
            setListaHabilitadoSin(response.data)
            setObtuvoHS(true)
        })
    }
    const obtenerHabilitado = () => {
        axios.get(url + 'habilitado').then(response => {
            setListaHabilitado(response.data)
            setObtuvoH(true)
        })
    }

    const obtenerInformacion = () => {
        axios.get(url + 'informacion').then(response => {
            setListaInformacion(response.data)
            setObtuvoI(true)
        })
    }

    return (
        <ContenedorPrincipal>
            <ContenedorOpciones>
                <Titulo>{titulo}</Titulo>
                <ImagenLogo src={require('../Imagenes/LogoBlanco.png')} onClick={() => { setTitulo("ADMINISTRADOR"); setActivoCL(""); setActivoE(""); setActivoA(""); setActivoI(""); }} />
                <ContenedorBotones>
                    <Botones opcion={activoCL} onClick={() => { setTitulo("CONFIGURAR LIGA"); setActivoCL("true"); setActivoE(""); setActivoA(""); setActivoI(""); obtenerFechas() }}>CONFIGURAR LIGA</Botones>
                    <Botones opcion={activoE} onClick={() => { setTitulo("EQUIPO"); setActivoCL(""); setActivoE("true"); setActivoA(""); setActivoI(""); obtenerMedioPago(); }}>EQUIPO</Botones>
                    <Botones opcion={activoA} onClick={() => { setTitulo("ARBITRO"); setActivoCL(""); setActivoE(""); setActivoA("true"); setActivoI(""); obtenerArbitro(); }}>ARBITRO</Botones>
                    <Botones opcion={activoI} onClick={() => { setTitulo("INFORMACIÓN"); setActivoCL(""); setActivoE(""); setActivoA(""); setActivoI("true"); }}>INFORMACIÓN</Botones>
                    <Botones onClick={() => { setTitulo("ADMINISTRADOR"); setActivoCL(""); setActivoE(""); setActivoA(""); setActivoI(""); setModal(!modal) }}>CERRAR SESION</Botones>
                </ContenedorBotones>
            </ContenedorOpciones>
            {
                titulo === "ADMINISTRADOR" &&
                <Imagen src={require('../Imagenes/Logo.png')} />
            }
            {
                titulo === "CONFIGURAR LIGA" &&
                <ContenedorConfiguracion>
                    <Titulo2>CONFIGURAR LIGA</Titulo2>
                    <Nav>
                        <NavBotonMenu activo={activoF} onClick={() => { setActivoF("true"); setActivoL(""); setActivoP(""); setOpcionL('1') }}><Texto>FECHAS DE LIGA</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoL} onClick={() => { setActivoF(""); setActivoL("true"); setActivoP(""); setOpcionL('2') }}><Texto>CONFIGURACION LIGA</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoP} onClick={() => { setActivoF(""); setActivoL(""); setActivoP("true"); setOpcionL('3') }}><Texto>SUBIR PAGOS LIGA</Texto></NavBotonMenu>
                    </Nav>
                    {
                        opcionL === '1' &&
                        <>
                            {
                                obtuvoFechas &&
                                <Detalle>
                                    <BoxCampo>
                                        <TextBox>Inicio Pre-Inscripcion</TextBox>
                                        <InputBox type="date" valido={validarPreInicio} id="fechaPreInicio" onChange={(e) => { setFechaPreInicio(e.target.value) }} onKeyUp={validarFechaPreInicio}
                                            onBlur={validarFechaPreInicio} />
                                        <IconoValidacion icon={validarPreInicio === 'true' ? faCircleCheck : faCircleXmark} valido={validarPreInicio} />
                                    </BoxCampo>
                                    <BoxCampo>
                                        <TextBox>Fin Pre-Inscripcion</TextBox>
                                        <InputBox type="date" valido={validarPreFin} id="fechaPreFin" onChange={(e) => { setFechaPreFin(e.target.value) }} onKeyUp={validarFechaPreFin}
                                            onBlur={validarFechaPreFin} />
                                        <IconoValidacion icon={validarPreFin === 'true' ? faCircleCheck : faCircleXmark} valido={validarPreFin} />
                                    </BoxCampo>
                                    <BoxCampo>
                                        <TextBox>Inicio Inscripcion</TextBox>
                                        <InputBox type="date" valido={validarInicio} id="fechaInicio" onChange={(e) => { setFechaInicio(e.target.value) }} onKeyUp={validarFechaInicio}
                                            onBlur={validarFechaInicio} />
                                        <IconoValidacion icon={validarInicio === 'true' ? faCircleCheck : faCircleXmark} valido={validarInicio} />
                                    </BoxCampo>
                                    <BoxCampo>
                                        <TextBox>Fin Inscripcion</TextBox>
                                        <InputBox type="date" valido={validarFin} id="fechaFin" onChange={(e) => { setFechaFin(e.target.value) }} onKeyUp={validarFechaFin}
                                            onBlur={validarFechaFin} />
                                        <IconoValidacion icon={validarFin === 'true' ? faCircleCheck : faCircleXmark} valido={validarFin} />
                                    </BoxCampo>
                                    <BoxCampo>
                                        <TextBox>Inicio Liga</TextBox>
                                        <InputBox type="date" valido={validarInicioLiga} id="fechaInicioLiga" onChange={(e) => { setFechaInicioLiga(e.target.value) }} onKeyUp={validarFechaInicioLiga}
                                            onBlur={validarFechaInicioLiga} />
                                        <IconoValidacion icon={validarInicioLiga === 'true' ? faCircleCheck : faCircleXmark} valido={validarInicioLiga} />
                                    </BoxCampo>
                                    <BoxCampo>
                                        <TextBox>Fin Liga</TextBox>
                                        <InputBox type="date" valido={validarFinLiga} id="fechaFinLiga" onChange={(e) => { setFechaFinLiga(e.target.value) }} onKeyUp={validarFechaFinLiga}
                                            onBlur={validarFechaFinLiga} />
                                        <IconoValidacion icon={validarFinLiga === 'true' ? faCircleCheck : faCircleXmark} valido={validarFinLiga} />
                                    </BoxCampo>
                                    <BotonAñadir disabled={inhabilitado} onClick={subirFechas}>
                                        {espera == 'false' && nombreBoton}
                                        {espera == 'true' && <Img src={require('../Imagenes/Carga.gif')} />}
                                    </BotonAñadir>
                                </Detalle>
                            }
                            {
                                !obtuvoFechas &&
                                <ImgCarga src={require('../Imagenes/Carga.gif')} />
                            }

                        </>
                    }
                    {
                        opcionL === '2' &&
                        <>
                            {
                                obtuvoC &&
                                <Detalle>
                                    <ContenedorTable ventana='categoria'>
                                        <Table>
                                            <TableHead className={classes.encabezado}>
                                                <TableRow>
                                                    <TableCell><Letra>Categorias</Letra></TableCell>
                                                    <TableCell align='right'><Letra img1={'true'}><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    listaCategorias.map(datos => {
                                                        if (obtuvoC) {
                                                            return (
                                                                <TableRow className={classes.bordes}>
                                                                    <TableCell><LetraCuerpo>{datos.NOMBRECATEGORIA}</LetraCuerpo></TableCell>
                                                                    <TableCell align='center'><BotonVer disabled={inhabilitado} onClick={() => {
                                                                        setEspera('true')
                                                                        setInhabilitado(true)
                                                                        axios.delete(url + 'eliminarCategoria/' + datos.NOMBRECATEGORIA).then(response => {
                                                                            setEspera('false')
                                                                            setInhabilitado(false)
                                                                            toast("Categoria Eliminada con Exito", {
                                                                                icon: "✅", duration: 3000, style: {
                                                                                    border: '2px solid #ff7c01',
                                                                                    padding: '10px',
                                                                                    color: '#fff',
                                                                                    background: '#000',
                                                                                    borderRadius: '4%',
                                                                                },
                                                                            })
                                                                        })
                                                                    }}>
                                                                        {espera == 'false' && <FontAwesomeIcon icon={faTrashCan} />}
                                                                        {espera == 'true' && <Img src={require('../Imagenes/Carga.gif')} />}                                                                                                                           </BotonVer></TableCell>
                                                                </TableRow>
                                                            )
                                                        }

                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </ContenedorTable>
                                    <BoxCampoBoton text='false'>
                                        <BotonAñadir onClick={() => setModalAñadirCategoria(!modalAñadirCategoria)}>Añadir Categoria</BotonAñadir>
                                    </BoxCampoBoton>
                                    <BoxCampoBoton text='false'>
                                        <BotonAñadir onClick={() => setModalAñadirReglamento(!modalAñadirReglamento)}>Añadir Reglamento</BotonAñadir>
                                    </BoxCampoBoton>
                                </Detalle>
                            }
                            {
                                !obtuvoC &&
                                <ImgCarga src={require('../Imagenes/Carga.gif')} />
                            }
                        </>

                    }
                    {
                        opcionL === '3' &&
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
                            <BotonAñadir disabled={inhabilitado} onClick={subirPagos}>
                                {espera == 'false' && "Guardar"}
                                {espera == 'true' && <Img src={require('../Imagenes/Carga.gif')} />}
                            </BotonAñadir>
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
                        <NavBotonMenu activo={activoNR} onClick={() => { setActivoNR("true"); setActivoRS(""); setActivoR(""); setActivoMP(""); setOpcion("2") }}><Texto >EQUIPOS NO HABILITADOS</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoRS} onClick={() => { setActivoNR(""); setActivoRS("true"); setActivoR(""); setActivoMP(""); setOpcion("3") }}><Texto >EQUIPOS SIN JUGADORES</Texto></NavBotonMenu>
                        <NavBotonMenu activo={activoR} onClick={() => { setActivoNR(""); setActivoRS(""); setActivoR("true"); setActivoMP(""); setOpcion("4") }}><Texto >EQUIPOS HABILITADOS</Texto></NavBotonMenu>
                    </Nav>
                    <ContenedorTable ventana='2'>
                        {opcion == '1' &&
                            <>
                                {
                                    obtuvoMP &&
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
                                            {
                                                listaMedioPago.map(datos => {
                                                    if (obtuvoMP) {
                                                        return (

                                                            <TableRow className={classes.bordes}>
                                                                <TableCell><LetraCuerpo equipo='true'>{datos.NOMBREDELEGADO}</LetraCuerpo></TableCell>
                                                                <TableCell><LetraCuerpo equipo='true'>{datos.NOMBREEQUIPO}</LetraCuerpo></TableCell>
                                                                <TableCell align='right'><BotonVer onClick={() => { setModalEquipo(!modalEquipo); setElEquipo(datos); settipoEquipo('medio') }}><FontAwesomeIcon icon={faEnvelopeOpenText} /></BotonVer></TableCell>
                                                                <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                }
                                {
                                    !obtuvoMP &&
                                    <ImgCarga src={require('../Imagenes/Carga.gif')} />
                                }
                            </>

                        }
                        {opcion == '2' &&
                            <>
                                {obtuvoPC &&
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
                                            {
                                                listaPagoCompleto.map(datos => {
                                                    if (obtuvoPC) {
                                                        return (

                                                            <TableRow className={classes.bordes}>
                                                                <TableCell><LetraCuerpo>{datos.NOMBREDELEGADO}</LetraCuerpo></TableCell>
                                                                <TableCell><LetraCuerpo>{datos.NOMBREEQUIPO}</LetraCuerpo></TableCell>
                                                                <TableCell align='right'><BotonVer onClick={() => { setModalEquipo(!modalEquipo); setElEquipo(datos); settipoEquipo('completo') }}><FontAwesomeIcon icon={faFileInvoice} /></BotonVer></TableCell>
                                                                <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                }
                                {
                                    !obtuvoPC &&
                                    <ImgCarga src={require('../Imagenes/Carga.gif')} />
                                }
                            </>

                        }
                        {opcion == '3' &&
                            <>
                                {
                                    obtuvoHS &&
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
                                            {
                                                listaHabilitadoSin.map(datos => {
                                                    if (obtuvoHS) {
                                                        return (
                                                            <TableRow className={classes.bordes}>
                                                                <TableCell><LetraCuerpo>{datos.NOMBREDELEGADO}</LetraCuerpo></TableCell>
                                                                <TableCell><LetraCuerpo>{datos.NOMBREEQUIPO}</LetraCuerpo></TableCell>
                                                                <TableCell align='right'><BotonVer onClick={() => { setModalEquipo(!modalEquipo); setElEquipo(datos); settipoEquipo('sinJugador') }}><FontAwesomeIcon icon={faCirclePlay} /></BotonVer></TableCell>
                                                                <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                }
                                {
                                    !obtuvoHS &&
                                    <ImgCarga src={require('../Imagenes/Carga.gif')} />
                                }
                            </>

                        }
                        {opcion == '4' &&
                            <>
                                {
                                    obtuvoH &&
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
                                            {
                                                listaHabilitado.map(datos => {
                                                    if (obtuvoH) {
                                                        return (
                                                            <TableRow className={classes.bordes}>
                                                                <TableCell><LetraCuerpo>{datos.NOMBREDELEGADO}</LetraCuerpo></TableCell>
                                                                <TableCell><LetraCuerpo>{datos.NOMBREEQUIPO}</LetraCuerpo></TableCell>
                                                                <TableCell align='right'><BotonVer onClick={() => { setModalEquipo(!modalEquipo); setElEquipo(datos); settipoEquipo('habilitado') }}><FontAwesomeIcon icon={faCheckCircle} /></BotonVer></TableCell>
                                                                <TableCell align='right'><BotonVer><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                }
                                {
                                    !obtuvoH &&
                                    <ImgCarga src={require('../Imagenes/Carga.gif')} />
                                }
                            </>

                        }

                    </ContenedorTable>
                </ContenedorConfiguracion>
            }
            {
                titulo === "ARBITRO" &&
                <ContenedorConfiguracion>
                    <Titulo2>ARBITRO</Titulo2>
                    <ContenedorTable ventana='1'>
                        {
                            obtuvoA &&
                            <Table>
                                <TableHead className={classes.encabezado}>
                                    <TableRow>
                                        <TableCell><Letra>NOMBRE DE ARBITRO</Letra></TableCell>
                                        <TableCell align='right'><Letra img2='true'><FontAwesomeIcon icon={faCircleUser} /></Letra></TableCell>
                                        <TableCell align='right'><Letra img2='true'><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        listaArbitro.map(datos => {
                                            return (
                                                <TableRow className={classes.bordes}>
                                                    <TableCell><LetraCuerpo name='true'>{datos.NOMBRE}</LetraCuerpo></TableCell>
                                                    <TableCell align='right'><BotonVer onClick={() => { setModalVerArbitro(!modalVerArbitro); setDatos(datos); }}><FontAwesomeIcon icon={faUserTie} /></BotonVer></TableCell>
                                                    <TableCell align='right'><BotonVer onClick={() => { setEliminarArbitro(!eliminarArbitro); setDatos(datos); }}><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        }
                        {
                            !obtuvoA &&
                            <ImgCarga src={require('../Imagenes/Carga.gif')} />
                        }

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
                        {
                            obtuvoI &&
                            <Table>
                                <TableHead className={classes.encabezado}>
                                    <TableRow>
                                        <TableCell ><Letra imagen='true'>TITULO DE IMAGEN</Letra></TableCell>
                                        <TableCell align='right'><Letra img='true'><FontAwesomeIcon icon={faCirclePlay} /></Letra></TableCell>
                                        <TableCell align='right'><Letra img='true'><FontAwesomeIcon icon={faTrash} /></Letra></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        listaInformacion.map(datos => {
                                            return (
                                                <TableRow className={classes.bordes}>
                                                    <TableCell><LetraCuerpo titulo='true'>{datos.TITULO}</LetraCuerpo></TableCell>
                                                    <TableCell align='right'><BotonVer onClick={() => setModalVerFoto(!modalVerFoto)}><FontAwesomeIcon icon={faImage} /></BotonVer></TableCell>
                                                    <TableCell align='right'><BotonVer onClick={() => { setEliminarFoto(!eliminarFoto); setDatos(datos) }}><FontAwesomeIcon icon={faTrashCan} /></BotonVer></TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }

                                </TableBody>
                            </Table>
                        }
                        {
                            !obtuvoI &&
                            <ImgCarga src={require('../Imagenes/Carga.gif')} />
                        }

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
                codigo={codigoArbitro}
            />
            <ModalAñadirInformacion
                estado={modalAñadirInfo}
                cambiarEstado={setModalAñadirInfo}
                tipo={'informacion'}
                titulo={'Añadir Informacion'}
            />
            <ModalAñadirInformacion
                estado={modalAñadirReglamento}
                cambiarEstado={setModalAñadirReglamento}
                tipo={'reglamento'}
                titulo={'Añadir Reglamento'}
            />
            <ModalAñadirInformacion
                estado={modalAñadirCategoria}
                cambiarEstado={setModalAñadirCategoria}
                tipo={'categoria'}
                titulo={'Añadir Categoria'}
            />
            <Modal
                estado={eliminarFoto}
                cambiarEstado={setEliminarFoto}
                tipo={'eliminarFoto'}
                mensaje={"¿Seguro de eliminar foto?"}
                datos={datos}
            />
            <Modal
                estado={eliminarArbitro}
                cambiarEstado={setEliminarArbitro}
                tipo={'eliminarArbitro'}
                mensaje={"¿Seguro de eliminar Arbitro?"}
                datos={datos}
            />
            <ModalFoto
                estado={modalVerFoto}
                cambiarEstado={setModalVerFoto}
            />
            <ModalArbitro
                estado={modalVerArbitro}
                cambiarEstado={setModalVerArbitro}
                datos={datos}
            />
            <ModalEquipo
                estado={modalEquipo}
                cambiarEstado={setModalEquipo}
                datos={elEquipo}
                tipo={tipoEquipo}
            />

        </ContenedorPrincipal>
    )
}