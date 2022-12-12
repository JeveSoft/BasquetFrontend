import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { url, urlImage} from "../services/const"
import {
  Texto,
  NavBotonMenu,
  Nav,
  BotonAñadir,
  InputFile,
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
  ImagenLogo,
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
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import { IconoValidacion } from "./EstiloRegistro";
import axios from "axios";
import { toast } from "react-hot-toast";

import {DetalleUsuario} from "./EstiloRegistro";
import PhoneInput from "react-phone-number-input";
import { Boton } from "./IniciarSesion";
import { SelectJugador,ContenedorJugadores, ImgJugador , ContenedorJugador, BotonDescarga, ContenedorExcel, BotonDescargaLink} from "./EstiloEquipos"
import ModalJugador from "./ModalJugador"
import InputValidar from "./InputValidar";
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

  const [modal, setModal] = useState(false);
  const [activoCL, setActivoCL] = useState("");
  const [activoE, setActivoE] = useState("");
  const [activoA, setActivoA] = useState("");
  const [activoI, setActivoI] = useState("");
  const [activoNR, setActivoNR] = useState("");
  const [activoMP, setActivoMP] = useState("true");
  const [activoRS, setActivoRS] = useState("");
  const [activoR, setActivoR] = useState("");
  const [opcion, setOpcion] = useState("1");
 


 

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
  const [pagoMedio, setPagoMedio] = useState("");
  const [pagoMedioImg, setPagoMedioImg] = useState(null);
  const [excel, setExcel] = useState(null);

  var [nombreJugador, setNombreJugador] = useState({ campo: "", valido: null });
  /* JUGADOR */

  const [nombreJ,setNombreJ] = useState({ campo: "", valido: null });
  const [carnetJ,setCarnetJ] = useState({ campo: "", valido: null });
  const [correoJ,setCorreoJ] = useState({ campo: "", valido: null });
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

  const obtenerDelegado = async () =>{
     var idDelegadoP =  location.pathname.substring(10,location.pathname.length); 
     setIdDelegado(idDelegadoP);
     const delegadoInfo = await fetch(url+"delegado/"+idDelegadoP);
     const dataDelegado = await delegadoInfo.json();
     
     setDelegado(dataDelegado[0]);
     actualizarValores();
     actualizarValoresVista();
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
     var idDelegadoP =  location.pathname.substring(10,location.pathname.length); 
     const response = await fetch(url+"estadoInscripcion/"+idDelegadoP);
     const data = await response.json();
     console.log(data);
     setInfoInscripcion(data);
     setPagoMedio(data[0].PAGOMEDIO);
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
    var idInscripcion = infoInscripcion[0].IDINSCRIPCION;

    const response = await fetch(url + "comprobantePagoMedio/" +idInscripcion, 
        { method: "POST",
          body: f 
        })
    const data = await response.json();
    obtenerInfoInscripcion();
    console.log(data);
 }

 function generarIdJugador() {
  var codigo = (
    7 +
    fechaNacimientoJug.substring(8, 10) +
    nombreJ.campo.substring(0, 3) +
    carnetJ.campo.substring(0, 2) +
    fechaNacimientoJug.substring(0, 2)
  ).toUpperCase();
  return codigo;
 }

 const validarJugador = () => {
  if(nombreJ.campo == ""){
    mensajeDeRespuestaError("Ingresar nombre completo");
  }else if(nombreJ.valido == "false"){
    mensajeDeRespuestaError("Nombre invalido");
  }
  if(correoJ.campo == ""){
    mensajeDeRespuestaError("Ingresar correo");
  }else if(correoJ.valido == "false"){
    mensajeDeRespuestaError("Correo Invalido");
  }

  if(carnetJ.campo == ""){
    mensajeDeRespuestaError("Ingresar carnet");
  }else if(carnetJ.valido == "false"){
    mensajeDeRespuestaError("Carnet Invalido");
  }

  if(numeroCelJ == ""){
    mensajeDeRespuestaError("Ingresar numero");
  }else if(numeroCelJ.length < 3 || numeroCelJ.length > 30){
    mensajeDeRespuestaError("Numero Invalido");
  }
  if(fechaNacimientoJug == ""){
    mensajeDeRespuestaError("Ingresar fechaNacimiento");
  }
  if(rolJ == ""){
    mensajeDeRespuestaError("Ingresar rol");
  }





  if(nombreJ.valido == "true" && carnetJ.valido == "true" && correoJ.valido == "true" ){
      return true;
    }
    return false;
 }

  const enviarJugador = async () =>{
    console.log(cantidadActual);
    console.log(cantidadMaxima);
    console.log(carnetJ);
    console.log(correoJ);
    console.log(nombreJ);
    if(cantidadActual < cantidadMaxima){
      if(validarJugador()){
        var  IDJUGADORR = generarIdJugador();      
        console.log("engtro")
        var dataJugador = {
          IDJUGADOR : IDJUGADORR,
          IDEQUIPO  : infoInscripcion[0].IDEQUIPO,          
          NOMBREJUGADOR : nombreJ.campo,
          CIJUGADOR : carnetJ.campo,          
          CELULAR : numeroCelJ,       
          EMAIL : correoJ.campo,              
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
          const response2 = await fetch(url + "setImgCi/"+ carnetJ.campo,
          {
            method: "POST",
            body: f
          }) 
          
          /* Envio imagen Jugador */
          const f2 = new FormData();
          f2.append("imagen",fotoJ);
          console.log(fotoJ);
          const response3 = await fetch(url + "setImgJugador/"+ carnetJ.campo,
          {
            method: "POST",
            body: f2
          }) 
          mensajeDeRespuesta("Jugador Ingresado Correctamente");
          
        }
        obtenerJugadores();
      }else{
        mensajeDeRespuestaError("Cantidad Maxima de jugadores ingresados");
        limpiarCampos();
        limpiarVariables();
      }
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
  })}

  const mensajeDeRespuestaError = (txt) =>{
    toast(txt, {
   icon: "⚠️",
   duration: 3000,
   style: {
     border: "2px solid #ff7c01",
     padding: "10px",
     color: "#fff",
     background: "#000",
     borderRadius: "4%",
   },
 })}


 const limpiarCampos = () =>{
  document.getElementById("nombreJugador").value = "";
  document.getElementById("carnetJugador").value = "";
  document.getElementById("correoJugador").value = "";
  document.getElementById("numeroJugador").value = "3";
  document.getElementById("fechaNacJ").value = "";
  document.getElementById("fotoCiJ").value = "";
  document.getElementById("fotoJ").value = "";
  document.getElementById("rol").value = "Rol";
 }

 const  limpiarVariables = () => {
      setNombreJ({ campo: "", valido: null });
      setCarnetJ({ campo: "", valido: null });
      setCorreoJ({ campo: "", valido: null });
      setNumeroCelJ("");
      setFechaNacimientoJug("");
      setFotoCiJ(null);
      setFotoJ(null);
 }

 const obtenerJugadores = async () => {
    const response = await fetch(url + "obtenerJugadores/"+infoInscripcion[0].IDEQUIPO);
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
    obtenerInfoInscripcion();
    obtenerJugadores();
  },[]);

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
              obtenerInfoInscripcion();
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
                label="Nombre Completo"
                placeholder= "Nombre Completo"
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
                label="Nombre Completo"
                placeholder= "Carnet Identidad"
                name="nombreDelegado"
                id="carnetIdentidad"
                onChange={(e)=>setCarnet(e.target.value)}
                expresionRegular={expresiones.nombre}
                />
              </BoxCampo>

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
                  placeholder="Fecha Nacimiento"
                  required
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  onChange={(e) => {
                    setFechaNacimientoDel(e.target.value);
                  }}
                />
                
              </BoxCampo>
             
              <BoxCampo>
                <TextBox>Nacionalidad </TextBox>
                <InputBox
                  type="text"
                  placeholder="Nacionalidad"
                  required
                  name="nacionalidad"
                  id="nacionalidad"
                  onChange={(e) => {
                    setNacionalidad(e.target.value);
                  }}
                />
              
              </BoxCampo>

              <Boton onClick={()=>actualizarDelegado()}>Actualizar</Boton>
            </DetalleUsuario>
          
        </ContenedorConfiguracion>
      )}
      {titulo === "ESTADO DE INSCRIPCION" && (
        <ContenedorConfiguracion>
          <Titulo2>ESTADO DE INSCRIPCION</Titulo2>
           
           {
            
            pagoMedio == "Medio" ? 
                  <>
                    <h3 style={{margin:"20px 0px"}}>Complete el pago porfavor</h3>
                    <label>Inserte el segundo comprobante de pago</label>
                    <br/>
                    <InputFile type="file" name="files" onChange={(e)=>guardarPagoMedio(e)}/>
                    <br/>
                    <BotonAñadir onClick={()=>enviarPagoMedio()}>Enviar Comprobante</BotonAñadir>
                  </>
                :
                
                <h5 style={{margin:"20px 0px"}}>Su comprobante fue enviado con exito &#9989;</h5>
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
              
               <InputValidar
                estado={nombreJ}
                cambiarEstado={setNombreJ}
                tipo="text"
                label="Nombre Completo"
                placeholder="Nombre Completo"
                name="nombreJugador"
                expresionRegular={expresiones.nombre}
              />
              <InputValidar
                estado={carnetJ}
                cambiarEstado={setCarnetJ}
                tipo="text"
                label="Carnet Identidad"
                placeholder="Carnet Identidad"
                name="carnetJugador"
                expresionRegular={expresiones.carnet}
                mensaje="Carnet Invalido"
              />
              <InputValidar
                estado={correoJ}
                cambiarEstado={setCorreoJ}
                tipo="email"
                label="Correo"
                placeholder="Correo"
                name="correoJugador"
                expresionRegular={expresiones.correo}
                mensaje="Correo Invalido"
              />
          
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
                  placeholder="Fecha Nacimiento"
                  id="fechaNacJ"
                  required
                  onChange={(e) => {
                    setFechaNacimientoJug(e.target.value);
                  }}
              
                />
              </BoxCampo>

              <BoxCampo>
                <TextBox>Rol</TextBox>
                <SelectJugador defaultValue="Rol" id="rol" name="select" onChange={(e)=> setRolJ(e.target.value)}>
                    <option value="Rol"  disabled="disabled">Rol</option>
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
                  accept="image/*"
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
                  accept="image/*"
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
            
                <ContenedorExcel style={{margin: "100px 0px"}}>
                     <label style={{margin: "20px 0px"}}><h5>Importante: </h5>Si usted tiene jugadores ingresados manualmente se borraran al momento de enviar el excel.</label>
                      <BotonDescarga href={require("../Imagenes/PlantillaJugadores.xlsx")} download="plantilla.xlsx">Descargar Plantilla</BotonDescarga>
                      <br/>
                     <input style={{margin: "20px 0px 25px 0px"}} type="file" onChange={(e)=>setExcel(e.target.files[0])} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                      <br/>
                <Boton onClick={() => enviarExcel()}>
                    Enviar excel
                </Boton>
              </ContenedorExcel>
             
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
                    <ImgJugador src={require("../Imagenes/imagenJugador.jpg")} alt="foto carnet" />
                    :
                     <ImgJugador src={urlImage+"storage/"+jugador.FOTOJUGADOR} alt="foto jugador" />
                 }
                 <h5>{jugador.NOMBREJUGADOR}</h5>
                 {/* <p>{jugador.CIJUGADOR}</p> */}

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
            <BotonDescargaLink to={"/qrJugadores/"+infoInscripcion[0].IDEQUIPO}>Obtener qr Jugadores</BotonDescargaLink>
        </ContenedorConfiguracion>
      )}
      
      <Modal
        estado={modal}
        cambiarEstado={setModal}
        mensaje={"¿Seguro de cerrar sesion?"}
      />
    
    </ContenedorPrincipal>
  );
}