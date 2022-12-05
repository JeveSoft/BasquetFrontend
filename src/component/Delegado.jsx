import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import {
  Texto,
  NavBotonMenu,
  Nav,
  BotonVer,
  Letra,
  ContenedorTable,
  BotonAñadir,
  InputFile,
  LabelFile,
  ContenedorBoton,
  BoxCampo,
  TextBox,
  InputBox,
  Titulo2,
  ContenedorConfiguracion,
  ContenedorBotones,
  Botones,
  Titulo,
  ContenedorPrincipal,
  ContenedorOpciones,
  Imagen,
  Detalle,
  LetraCuerpo,
  ImagenLogo,
  BoxCampoBoton,
  Img,
  ImgCarga,
  SelectNacionalidad,
} from "./EstilosAdministrador";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faFileInvoice,
  faTrashCan,
  faCirclePlay,
  faImage,
  faTrash,
  faCircleUser,
  faUserTie,
  faEnvelopeOpenText,
  faCalendarCheck,
  faCheckCircle,
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import ModalRegistroArbitro from "./ModalRegistroArbitro";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalAñadirInformacion from "./ModalAñadirInformacion";
import ModalFoto from "./ModalFoto";
import ModalArbitro from "./ModalArbitro";
//import { IconoValidacion } from "./EstiloRegistro";
import axios from "axios";
import { toast } from "react-hot-toast";
import ModalEquipo from "./ModalEquipo";
import InputValidar from "./InputValidar";

import {DetalleUsuario} from "./EstiloRegistro";
import PhoneInput from "react-phone-number-input";
import { Boton } from "./IniciarSesion";
import { SelectJugador,ContenedorJugadores, ImgJugador , ContenedorJugador, BotonDescarga} from "./EstiloEquipos"
import ModalJugador from "./ModalJugador"
const styles = makeStyles({
  encabezado: {
    padding: "0 30px",
    boxShadow: "0 2px 3px 2px #000000",
  },
  bordes: {
    boxShadow: "0 2px 3px 2px #ff7c01",
  },
  celdas: {
    width: "200px",
    background: "red",
  },
});

export default function Delegado() {
  const [titulo, setTitulo] = useState("DELEGADO");
  const classes = styles();
  const [modalRegistroArbitro, setModalRegistroArbitro] = useState(false);
  const [modalAñadirInfo, setModalAñadirInfo] = useState(false);
  const [modalAñadirCategoria, setModalAñadirCategoria] = useState(false);
  const [modalAñadirReglamento, setModalAñadirReglamento] = useState(false);
  const [modalVerFoto, setModalVerFoto] = useState(false);
  const [modalVerArbitro, setModalVerArbitro] = useState(false);
  const [modalEquipo, setModalEquipo] = useState(false);
  const [modal, setModal] = useState(false);
  const [activoCL, setActivoCL] = useState("");
  const [activoCF, setActivoCF] = useState("");
  const [activoE, setActivoE] = useState("");
  const [activoA, setActivoA] = useState("");
  const [activoI, setActivoI] = useState("");
  const [activoNR, setActivoNR] = useState("");
  const [activoMP, setActivoMP] = useState("true");
  const [activoRS, setActivoRS] = useState("");
  const [activoR, setActivoR] = useState("");
  const [opcion, setOpcion] = useState("1");
  const [activoF, setActivoF] = useState("true");
  const [activoL, setActivoL] = useState("");
  const [activoFM, setActivoFM] = useState("true");
  const [activoFA, setActivoFA] = useState("");
  const [activoP, setActivoP] = useState("");
  const [opcionL, setOpcionL] = useState("1");
  const [validarPreInicio, setValidarPreInicio] = useState(null);
  const [validarPreFin, setValidarPreFin] = useState(null);
  const [validarInicio, setValidarInicio] = useState(null);
  const [validarFin, setValidarFin] = useState(null);
  const [validarInicioLiga, setValidarInicioLiga] = useState(null);
  const [validarFinLiga, setValidarFinLiga] = useState(null);
  const [fechaPreInicio, setFechaPreInicio] = useState("");
  const [fechaPreFin, setFechaPreFin] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [fechaInicioLiga, setFechaInicioLiga] = useState("");
  const [fechaFinLiga, setFechaFinLiga] = useState("");
  const [eliminarFoto, setEliminarFoto] = useState(false);
  const [eliminarArbitro, setEliminarArbitro] = useState(false);
  var codigoArbitro = "4";
  var fechas = null;
  const [nombreBoton, setNombreBoton] = useState("Guardar");
  const [empezo, setEmpezo] = useState(false);
 
  const url = "http://127.0.0.1:8000/";
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [listaGrupos, setListaGrupos] = useState([]);


/* DELEGADO  */
let location = useLocation();
  const [nombre,setNombre] = useState("");
  const [carnet,setCarnet] = useState("");
  const [correo,setCorreo] = useState("");
  const [numeroCel,setNumeroCel] = useState("");
  const [fechaNacimientoDel,setFechaNacimientoDel] = useState("");
  const [nacionalidad,setNacionalidad] = useState("");
  const [generoDelegado,setgeneroDelegado] = useState("");
  const [delegado, setDelegado] = useState({});
  const [idDelegado, setIdDelegado] = useState("");
  const [infoInscripcion, setInfoInscripcion] = useState({});
  const [pagoMedioValido, setPagoMedioValido] = useState(false);
  const [pagoMedio, setPagoMedio] = useState(true);
  const [pagoMedioImg, setPagoMedioImg] = useState(null);
  const [excel, setExcel] = useState(null);

  /* JUGADOR */

  const [nombreJ,setNombreJ] = useState("");
  const [carnetJ,setCarnetJ] = useState("");
  const [correoJ,setCorreoJ] = useState("");
  const [numeroCelJ,setNumeroCelJ] = useState("");
  const [fechaNacimientoJug,setFechaNacimientoJug] = useState("");
  const [rolJ,setRolJ] = useState("");
  const [fotoCiJ, setFotoCiJ] = useState(null);
  const [fotoJ,setFotoJ] = useState(null);
  const [jugadores,setJugadores] = useState([]);
  const [cantidadMaxima,setCantidadMaxima] = useState("");
  const [cantidadActual,setCantidadActual] = useState("");
  const [editarJugador,setEditarJugador] = useState(false);
  const [jugador,setJugador] = useState({});


  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}/,
    sigla: /^[a-zA-Z0-9-]{1,4}/,
  };

  const validarFechaPreInicio = () => {
    if (fechaPreInicio != "") {
      if (!empezo) {
        var fechaActual = new Date().toISOString();
        if (fechaPreInicio > fechaActual) {
          setValidarPreInicio("true");
        } else {
          setValidarPreInicio("false");
        }
      } else {
        setValidarPreInicio("true");
      }
    } else {
      setValidarPreInicio(null);
    }
  };
  

  const obtenerDelegado = async () =>{
     //const responde = await obtenerIdDelegado();
     var idDelegadoP =  location.pathname.substring(10,location.pathname.length); 
     setIdDelegado(idDelegadoP);
     const delegadoInfo = await fetch(url+"delegado/"+idDelegadoP);
     const dataDelegado = await delegadoInfo.json();
     
     setDelegado(dataDelegado[0]);
     actualizarValores();
     actualizarValoresVista();
     //actualizarValores();
     //actualizarValoresVista();
     //console.log(delegado);  
  }
  const obtenerIdDelegado = async () => {
    var idDelegado =  location.pathname.substring(10,location.pathname.length); 
    setIdDelegado(idDelegado);
  }

  const actualizarDelegado = async ()=> {
    var data = {
        NOMBRE: nombre,
        CI: carnet,
        EMAIL: correo,
        CELULAR: numeroCel,
        FECHANACIMIENTO: fechaNacimientoDel,
        NACIONALIDAD: nacionalidad,
    }; 
    console.log(data);

    //console.log(delegado);
    const response = await fetch(url+"actualizarDelegado/"+idDelegado, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const data2 = await response.json()
    setDelegado(data2);
    console.log(data2);
    
    actualizarValores();
    //actualizarValoresVista();
  }


 const actualizarValoresVista = () =>{
     var valido = document.getElementById("nombreDelegado"); 
     if(valido != null){
       document.getElementById("nombreDelegado").value = delegado.NOMBRE;
       document.getElementById("carnetIdentidad").value = delegado.CI;
       document.getElementById("correo").value = delegado.EMAIL;
       document.getElementById("numeroCelular").value = delegado.CELULAR;
       document.getElementById("fechaNacimiento").value = delegado.FECHANACIMIENTO;
       document.getElementById("nacionalidad").value = delegado.NACIONALIDAD;
      }
 }

 const actualizarValores = () =>{
  
    setNombre(delegado.NOMBRE);
    setCarnet(delegado.CI)
    setCorreo(delegado.EMAIL)
    setNumeroCel(delegado.CELULAR)
    setFechaNacimientoDel(delegado.FECHANACIMIENTO)
    setNacionalidad( delegado.NACIONALIDAD)
 }

 const obtenerInfoInscripcion = async () =>{
     
     const response = await fetch(url+"estadoInscripcion/"+idDelegado);
     const data = await response.json();
     console.log(data);
     setInfoInscripcion(data);
     //setPagoMedio(data.PAGOMEDIO);
     //setPagoMedioValido(data.COMPROPAGOMEDIOVALIDO);
     setCantidadMaxima(data[0].CANTIDAD);
     console.log(cantidadMaxima);
 }

 const guardarPagoMedio = (e) => {
    console.log(e.target.files[0]);
    setPagoMedioImg(e.target.files[0]);
 }

 const enviarExcel = async () => {
  console.log(excel);
  const f = new FormData();
  f.append("file",excel);
  const response = await fetch(url + "addJugadoresExcel/" + infoInscripcion[0].IDEQUIPO,{
    method : "POST",
    body: f
  })
  const data = await response.json();
  mensajeDeRespuesta("Excel enviado correctamente");
  obtenerInfoInscripcion();
}

 const enviarPagoMedio =  async ()  =>{
    const f = new FormData();
    f.append("imagen",pagoMedioImg);
    var idInscripcion = infoInscripcion.IDINSCRIPCION;

    const response = await fetch(url + "comprobantePagoMedio/" +idInscripcion, 
        { method: "POST",
          body: f 
        })
    const data = await response.json();
    setPagoMedio(false);
    console.log(data);
 }

 function generarIdJugador() {
  var codigo = (
    7 +
    fechaNacimientoJug.substring(8, 10) +
    nombreJ.substring(0, 3) +
    carnetJ.substring(0, 2) +
    fechaNacimientoJug.substring(0, 2)
  ).toUpperCase();
  return codigo;
}
  const enviarJugador = async () =>{
    console.log(cantidadActual);
    console.log(cantidadMaxima);

    if(cantidadActual < cantidadMaxima){
          var  IDJUGADORR = generarIdJugador();      
          var dataJugador = {
            IDJUGADOR : IDJUGADORR,
            IDEQUIPO  : infoInscripcion[0].IDEQUIPO,          
            NOMBREJUGADOR : nombreJ,
            CIJUGADOR : carnetJ,          
            CELULAR : numeroCelJ,       
            EMAIL : correoJ,              
            FOTOCIJUGADOR : "vacio",      
            ROL : rolJ,                
            FOTOQR : "vacio",        
            FOTOJUGADOR : "vacio", 
            FECHANACIMIENTO : fechaNacimientoJug
          }
          console.log(dataJugador);


          const response = await fetch(url+"agregarJugador/", {
            method: 'POST', 
            mode: 'cors',
          
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJugador) 
          })
          
          const data = await response.json();
          console.log(data);
          limpiarCampos();
          limpiarVariables();

          /* Envio imagen ci jugador */
          const f = new FormData();
          f.append("imagen",fotoCiJ);
          console.log(fotoCiJ);
          const response2 = await fetch(url + "setImgCi/"+ carnetJ,
          {
            method: "POST",
            body: f
          }) 

          //const data2 = await response2.json();
          //console.log(data2);

          /* Envio imagen Jugador */
          const f2 = new FormData();
          f2.append("imagen",fotoJ);
          console.log(fotoJ);
          const response3 = await fetch(url + "setImgJugador/"+ carnetJ,
          {
            method: "POST",
            body: f2
          }) 
          mensajeDeRespuesta("Jugador Ingresado Correctamente");
          //const data3 = await response3.json();
          //console.log(data3);
    }else{
          mensajeDeRespuesta("Cantidad Maxima de jugadores ingresados");
          limpiarCampos();
          limpiarVariables();
    }
    obtenerJugadores();
 }
 const mensajeDeRespuesta = (txt) =>{
  toast(txt, {
    icon: "✅",
    duration: 3000,
    style: {
      border: "2px solid #ff7c01",
      padding: "10px",
      color: "#fff",
      background: "#000",
      borderRadius: "4%",
    },
  });
 }
 const limpiarCampos = () =>{
  document.getElementById("nombreJugador").value = "";
  document.getElementById("carnetJugador").value = "";
  document.getElementById("correoJugador").value = "";
  document.getElementById("numeroJugador").value = "";
  document.getElementById("fechaNacJ").value = "";
  document.getElementById("fotoCiJ").value = "";
  document.getElementById("fotoJ").value = "";
 }

 const limpiarVariables = () => {
      setNombreJ("");
      setCarnetJ("");
      setCorreoJ("");
      setNumeroCelJ("");
      setFechaNacimientoJug("");
      setFotoCiJ(null);
      setFotoJ(null);
 }

 const obtenerJugadores = async () => {
    const response = await fetch(url + "obtenerJugadores");
    const data = await response.json();
    setJugadores(data);
    setCantidadActual(data.length);
    console.log(cantidadActual);
    console.log(jugadores);
 }

   const infoJugador = (jugador) => {
      setJugador(jugador);
      if(editarJugador){
        setEditarJugador(false);
      }else{
        setEditarJugador(true);
      }

      //console.log(jugador.IDJUGADOR);
   }

   const cerrarModalJugador = (b) =>{
      setEditarJugador(b);
   }

 
  useEffect(function () {
   
    obtenerDelegado();
    obtenerJugadores();
    obtenerInfoInscripcion();
  },[]);
  const verificarFechas = () => {
    var fechaActual = new Date().toISOString();
    if (fechaPreInicio < fechaActual) {
      setEmpezo(true);
    }
  };
  return (
    <ContenedorPrincipal>
      <ContenedorOpciones>
        <Titulo>{titulo}</Titulo>
        <ImagenLogo
          src={require("../Imagenes/LogoBlanco.png")}
          onClick={() => {
            setTitulo("DELEGADO");
            setActivoCL("");
            setActivoE("");
            setActivoA("");
            setActivoI("");
            listaGrupos.splice(0, listaGrupos.length);
          }}
        />
        <ContenedorBotones>
          <Botones
            opcion={activoCL}
            onClick={() => {
              setTitulo("PERFIL");
              setActivoCL("true");
              setActivoE("");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
             
              //console.log(location.pathname.substring(10,location.pathname.length));
              obtenerDelegado();
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            PERFIL
          </Botones>
          <Botones
            opcion={activoE}
            onClick={() => {
              setTitulo("ESTADO DE INSCRIPCION");
              setActivoCL("");
              setActivoE("true");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
              obtenerInfoInscripcion();
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            ESTADO DE INSCRIPCION
          </Botones>
          <Botones
            opcion={activoA}
            onClick={() => {
              setTitulo("AGREGAR JUGADORES");
              setActivoCL("");
              setActivoE("");
              setActivoA("true");
              setActivoI("");
              setActivoCF("");
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            AGREGAR JUGADORES
          </Botones>
            
          <Botones
            opcion={activoI}
            onClick={() => {
              setTitulo("JUGADORES");
              setActivoCL("");
              setActivoE("");
              setActivoA("");
              setActivoI("true");
              setActivoCF("");
              obtenerJugadores();
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            JUGADORES
          </Botones>

          <Botones
            onClick={() => {
              setTitulo("ADMINISTRADOR");
              setActivoCL("");
              setActivoE("");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
              setModal(!modal);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            CERRAR SESION
          </Botones>
        </ContenedorBotones>
      </ContenedorOpciones>
      
      {titulo === "PERFIL" && (
        <ContenedorConfiguracion>
          <Titulo2>PERFIL</Titulo2>

          <DetalleUsuario>
              <BoxCampo>
                <TextBox>Nombre Completo</TextBox>
                <InputBox
                tipo="text"
                //estado={ nombre }
                //cambiarEstado={setNombre}
                
                //id="nombreDelegado"
                label="Nombre Completo"
                //placeholder= {delegado.NOMBRE}
                name="nombreDelegado"
                id="nombreDelegado"
                onChange={(e)=>setNombre(e.target.value)}
                expresionRegular={expresiones.nombre}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Carnet de Identidad</TextBox>
                <InputBox
                tipo="text"
                estado={ carnet }
                cambiarEstado={setCarnet}
                
                //id="nombreDelegado"
                label="Nombre Completo"
                //placeholder= {delegado.NOMBRE}
                name="nombreDelegado"
                id="carnetIdentidad"
                onChange={(e)=>setCarnet(e.target.value)}
                expresionRegular={expresiones.nombre}
                />
              </BoxCampo>
              {/* <InputValidar
                estado={carnet}
                cambiarEstado={setCarnet}
                tipo="text"
                label="Carnet Identidad"
                placeholder= {delegado.CI}
                name="carnetIdentidad"
                expresionRegular={expresiones.carnet}
                mensaje="Carnet Invalido"
              /> */}

              <BoxCampo>
                <TextBox>Correo</TextBox>
                <InputBox
                  estado={correo}
                  cambiarEstado={setCorreo}
                  tipo="email"
                  label="Correo"
                  placeholder="Correo@gmail.com"
                  id="correo"
                  onChange={(e)=>setCorreo(e.target.value)}
                  expresionRegular={expresiones.correo}

                  mensaje="Correo Invalido"
                />
              </BoxCampo>
              {/* <InputValidar
                estado={correo}
                cambiarEstado={setCorreo}
                tipo="email"
                label="Correo"
                placeholder="Correo@gmail.com"
                name="correo"
                expresionRegular={expresiones.correo}
                mensaje="Correo Invalido"
              /> */}

              
              <BoxCampo>
                <TextBox>Numero de Celular</TextBox>
                <PhoneInput
                  //placeholder="Numero de Celular"
                  defaultCountry="BO"
                  id="numeroCelular"
                  name="numeroCelular"
                  value={numeroCel}
                  onChange={(numeroCel) => setNumeroCel(numeroCel)}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Fecha Nacimiento </TextBox>
                <InputBox
                  type="date"
                  //valido={validarFechaN}
                  placeholder="Fecha Nacimiento"
                  required
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  onChange={(e) => {
                    setFechaNacimientoDel(e.target.value);
                  }}
                  //onKeyUp={validar}
                  //onBlur={validar}
                />
                {/* <IconoValidacion
                  icon={
                    validarFechaN === "true" ? faCircleCheck : faCircleXmark
                  }
                  //valido={validarFechaN}
                /> */}
              </BoxCampo>
             
              <BoxCampo>
                <TextBox>Nacionalidad </TextBox>
                <InputBox
                  type="text"
                  //valido={validarFechaN}
                  //placeholder="Fecha Nacimiento"
                  required
                  name="nacionalidad"
                  id="nacionalidad"
                  onChange={(e) => {
                    setNacionalidad(e.target.value);
                  }}
                  //onKeyUp={validar}
                  //onBlur={validar}
                />
               {/*  <IconoValidacion
                  icon={
                    validarFechaN === "true" ? faCircleCheck : faCircleXmark
                  }
                  //valido={validarFechaN}
                /> */}
              </BoxCampo>

              <Boton onClick={()=>actualizarDelegado()}>Actualizar</Boton>
            </DetalleUsuario>
          
        </ContenedorConfiguracion>
      )}
      {titulo === "ESTADO DE INSCRIPCION" && (
        <ContenedorConfiguracion>
          <Titulo2>ESTADO DE INSCRIPCION</Titulo2>
           
           {
              
             (infoInscripcion.COMPROBANTEMEDIO == "vacio" && infoInscripcion.PAGOMEDIO)? 
                  <>
                    <h3 style={{margin:"20px 0px"}}>Complete el pago porfavor</h3>
                    <label>Inserte el segundo comprobante de pago</label>
                    <br/>
                    <InputFile type="file" name="files" onChange={(e)=>guardarPagoMedio(e)}/>
                    <br/>
                    <BotonAñadir onClick={()=>enviarPagoMedio()}>Enviar Comprobante</BotonAñadir>
                  </>
                :
                
                <h3 style={{margin:"20px 0px"}}>{ infoInscripcion.COMPROPAGOMEDIOVALIDO == true ? "Pago completados con exito": "Su comprobante sera revisado lo mas antes posible"}</h3>
           }
          
        </ContenedorConfiguracion>
      )}
      {titulo === "AGREGAR JUGADORES" && (
        <ContenedorConfiguracion>
          <Titulo2>Jugador</Titulo2>
          
          <Nav>
            <NavBotonMenu
              activo={activoMP}
              onClick={() => {
                setActivoNR("");
                setActivoRS("");
                setActivoR("");
                setActivoMP("true");
                setOpcion("1");
              }}
            >
              <Texto>Ingresar Jugadores manualmente</Texto>
            </NavBotonMenu>
            <NavBotonMenu
              activo={activoNR}
              onClick={() => {
                setActivoNR("true");
                setActivoRS("");
                setActivoR("");
                setActivoMP("");
                setOpcion("2");
              }}
            >
              <Texto>Ingresar Jugadores usando Excel</Texto>
            </NavBotonMenu>
          </Nav>

          {
            opcion == "1" && (
              <DetalleUsuario style={{margin: "70px 0px"}}>
              <BoxCampo>
                <TextBox>Nombre Completo</TextBox>
                <InputBox
                tipo="text"
                
                id="nombreJugador"
                placeholder="Nombre Jugador"
                onChange={(e)=>setNombreJ(e.target.value)}
                expresionRegular={expresiones.nombre}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Carnet de Identidad</TextBox>
                <InputBox
                tipo="text"
                id="carnetJugador"
                placeholder= "Carnet De Jugador"
                onChange={(e)=>setCarnetJ(e.target.value)}
                expresionRegular={expresiones.nombre}
                />
              </BoxCampo>

              <BoxCampo>
                <TextBox>Correo</TextBox>
                <InputBox
                  tipo="email"
                  placeholder="Correo@gmail.com"
                  id="correoJugador"
                  onChange={(e)=>setCorreoJ(e.target.value)}
                  expresionRegular={expresiones.correo}
                  mensaje="Correo Invalido"
                />
              </BoxCampo>
          
              <BoxCampo>
                <TextBox>Numero de Celular</TextBox>
                <PhoneInput
                  placeholder="Numero de Celular"
                  defaultCountry="BO"
                  id="numeroJugador"
                  onChange={(numeroCel) => setNumeroCelJ(numeroCel)}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Fecha Nacimiento </TextBox>
                <InputBox
                  type="date"
                 // placeholder="Fecha Nacimiento"
                  id="fechaNacJ"
                  required
                  onChange={(e) => {
                    setFechaNacimientoJug(e.target.value);
                  }}
              
                />
              </BoxCampo>

              <BoxCampo>
                <TextBox>Rol</TextBox>
                <SelectJugador  name="select" onChange={(e)=> setRolJ(e.target.value)}>
                    <option selected="true" disabled="disabled">Rol</option>
                    <option value="jugador">Jugador</option>
                    <option value="cuerpoTecnico">Cuerpo Tecnico</option>
                    <option value="ambos">Ambos</option>
                </SelectJugador>
               
              </BoxCampo>
             
              <BoxCampo>
                <TextBox>Foto Carnet de Identidad</TextBox>
                <InputFile
                  type="file"
                  
                  required
                  name=""
                  id="fotoCiJ"
                  onChange={(e) => {
                    setFotoCiJ(e.target.files[0]);
                  }}
                
                />
              </BoxCampo>

              <BoxCampo>
                <TextBox>Foto Jugador</TextBox>
                <InputFile
                  type="file"
                  required
                  name=""
                  id="fotoJ"
                 
                  onChange={(e) => {
                    setFotoJ(e.target.files[0]);
                  }}
                />
                
              </BoxCampo>

              <Boton onClick={()=>enviarJugador()}>Enviar</Boton>
            </DetalleUsuario>
            )
          }

          {
            opcion == "2" && (
            
                <ContenedorBoton style={{margin: "120px 0px"}}>
                  {/* <h3>Descarge la plantilla para llenar los datos </h3> */}
                  <BotonDescarga href={require("../Imagenes/PlantillaJugadores.xlsx")} download="plantilla.xlsx">Descargar Plantilla</BotonDescarga>
                  <input style={{margin: "30px 0px 10px 0px "}} type="file" onChange={(e)=>setExcel(e.target.files[0])} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                <BotonAñadir onClick={() => enviarExcel()}>
                    Enviar excel
                </BotonAñadir>
              </ContenedorBoton>
             
            )
          }
          
        </ContenedorConfiguracion>
      )}
      {titulo === "JUGADORES" && (
        <ContenedorConfiguracion>
          <Titulo2>Jugadores</Titulo2>
           <ContenedorJugadores>
           {
            jugadores.map( jugador =>{
              return (
                <ContenedorJugador key={jugador.CIJUGADOR} onClick={()=>infoJugador(jugador)}>
                 
                 {
                    jugador.FOTOJUGADOR == "vacio" ? 
                    <ImgJugador src={require("../Imagenes/imagenJugador.jpg")} alt="ATR" />
                    :
                     <ImgJugador src={url+"storage/"+jugador.FOTOJUGADOR} alt="ATR" />
                 }
                 <h5>{jugador.NOMBREJUGADOR}</h5>
                 <p>{jugador.CIJUGADOR}</p>

                </ContenedorJugador>
              )
            })
          }
           <b> {editarJugador ? 
            <ModalJugador 
            jugador={jugador} 
            idDelegado= {idDelegado}
            cerrarModalJugador = {cerrarModalJugador}
            obtenerJugadores = {obtenerJugadores}
            ></ModalJugador> : ""}</b>
          </ContenedorJugadores>
        </ContenedorConfiguracion>
      )}
      
      <Modal
        estado={modal}
        cambiarEstado={setModal}
        mensaje={"¿Seguro de cerrar sesion?"}
      />
      {/* <ModalRegistroArbitro
        estado={modalRegistroArbitro}
        cambiarEstado={setModalRegistroArbitro}
        codigo={codigoArbitro}
      />
      <ModalAñadirInformacion
        estado={modalAñadirInfo}
        cambiarEstado={setModalAñadirInfo}
        tipo={"informacion"}
        titulo={"Añadir Informacion"}
      />
      <ModalAñadirInformacion
        estado={modalAñadirReglamento}
        cambiarEstado={setModalAñadirReglamento}
        tipo={"reglamento"}
        titulo={"Añadir Reglamento"}
      />
      <ModalAñadirInformacion
        estado={modalAñadirCategoria}
        cambiarEstado={setModalAñadirCategoria}
        tipo={"categoria"}
        titulo={"Añadir Categoria"}
      />
      <Modal
        estado={eliminarFoto}
        cambiarEstado={setEliminarFoto}
        tipo={"eliminarFoto"}
        mensaje={"¿Seguro de eliminar foto?"}
        datos={datos}
      />
      <Modal
        estado={eliminarArbitro}
        cambiarEstado={setEliminarArbitro}
        tipo={"eliminarArbitro"}
        mensaje={"¿Seguro de eliminar Arbitro?"}
        datos={datos}
      />
      <ModalFoto estado={modalVerFoto} cambiarEstado={setModalVerFoto} />
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
      /> */}
    </ContenedorPrincipal>
  );
}