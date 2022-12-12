import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {url, urlImage} from "../services/const"
import {
  faChevronRight,
  faChevronLeft,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import {
  SelectNacionalidad,
  NavBoton1,
  LabelFile,
  InputFile,
  ContenedorBotones,
  CategoryPago,
  DetalleUsuarioPago,
  ImagenPago,
  NavMenu,
  BotonNavegacion,
  Nav,
  GlobalStyles,
  ContenedorRegistro,
  Titulo,
  DetalleUsuario,
  BoxCampo,
  TextBox,
  InputBox,
  Category,
  Label,
  Radio,
  NavBoton,
  IconoValidacion,
  ImagenLogo,
  Img,
} from "./EstiloRegistro";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import InputValidar from "./InputValidar";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Registro() {
  const [genero, setGenero] = useState("");
  const historial = useHistory();
  var [nombre, setNombre] = useState({ campo: "", valido: null });
  var [carnet, setCarnet] = useState({ campo: "", valido: null });
  var [correo, setCorreo] = useState({ campo: "", valido: null });
  var [numeroCel, setNumeroCel] = useState("");
  var [fechaNacimiento, setFechaNacimiento] = useState("");
  var [nacionalidad, setNacionalidad] = useState("");
  const [equipo, setEquipo] = useState({ campo: "", valido: null });
  const [siglas, setSiglas] = useState({ campo: "", valido: null });
  const [logo, setLogo] = useState("");
  const [cantidadJugadores, setCantidadJugadores] = useState("");
  const [creacion, setCreacion] = useState("");
  const [categoria, setCategoria] = useState("");
  var [ventana1, setVentana1] = useState(true);
  var [ventana2, setVentana2] = useState(false);
  var [ventana3, setVentana3] = useState(false);
  var [ventana4, setVentana4] = useState(false);
  var [validarJug, setValidarJug] = useState(null);
  var [validarFechaN, setValidarFechaN] = useState(null);
  var [validarCreacion, setValidarCreacion] = useState(null);
  const [pago, setPago] = useState("");
  const [listaCategoria, setListaCategoria] = useState([]);
 
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [campeonato, setCampeonato] = useState({});
  const [comprobantePago,setComprobantePago] = useState(null);
  const [logoEquipo,setLogoEquipo] = useState(null);
  const existeDelegado = () => {
    axios.get(url + "delegadoNombre/" + carnet.campo).then((response) => {
      if (response.data.length <= 0) {
        obtenerCategoria();
      } else {
        toast("Existe Delegado", {
          icon: "⚠️",
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
    });
  };
  const existeEquipo = () => {
    axios.get(url + "obtenerEquipo/" + equipo.campo).then((response) => {
      if (response.data.length <= 0) {
        setVentana2(false);
        setVentana3(true);
      } else {
        toast("Existe Equipo", {
          icon: "⚠️",
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
    });
  };
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}/,
    sigla: /^[a-zA-Z0-9-]{1,4}/,
  };
  const cambioPago = (e) => {
    setPago(e.target.value);
  };
  document.title = "Registro";
  const cambioGenero = (e) => {
    setGenero(e.target.value);
  };
  function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    return edad;
  }
  function esValidoDelegado() {
    var valido = true;
    if (nombre.campo === "") {
      toast("Ingesar Nombre Completo", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (nombre.valido === "false") {
        valido = false;
        toast("Nombre Invalido", {
          icon: "⚠️",
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
    }
    if (carnet.campo === "") {
      toast("Ingesar Carnet Identidad", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (carnet.valido === "false") {
        valido = false;
        toast("Carnet Invalido", {
          icon: "⚠️",
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
    }
    if (correo.campo === "") {
      toast("Ingesar Correo", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (correo.valido === "false") {
        valido = false;
        toast("Correo Invalido", {
          icon: "⚠️",
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
    }
    if (numeroCel === "") {
      toast("Ingesar Numero de Celular", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (numeroCel.length < 3 || numeroCel.length > 30) {
        valido = false;
        toast("Nombre Completo Invalido", {
          icon: "⚠️",
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
      if (!isValidPhoneNumber(numeroCel)) {
        toast("Numero Invalido", {
          icon: "⚠️",
          duration: 3000,
          style: {
            border: "2px solid #ff7c01",
            padding: "10px",
            color: "#fff",
            background: "#000",
            borderRadius: "4%",
          },
        });
        valido = false;
      }
    }
    if (fechaNacimiento === "") {
      toast("Ingesar Fecha de Nacimiento", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      var fechaActual = new Date().toISOString();
      if (fechaNacimiento < fechaActual) {
        var edad = calcularEdad(fechaNacimiento);
        if (edad < 18) {
          valido = false;
          toast("Delegado Tiene Que Ser Mayor Edad", {
            icon: "⚠️",
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
      } else {
        valido = false;
        toast("Fecha de Nacimiento Invalida", {
          icon: "⚠️",
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
    }
    if (nacionalidad === "") {
      toast("Ingesar Nacionalidad", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    }
    if (genero === "") {
      toast("Seleccionar Genero", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    }
    return valido;
  }
  function esValidoEquipo() {
    var valido = true;
    if (equipo === "") {
      toast("Ingesar Nombre Equipo", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (equipo.valido === "false") {
        valido = false;
        toast("Equipo Invalido", {
          icon: "⚠️",
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
      if (equipo.campo.length < 3 || equipo.campo.length > 30) {
        valido = false;
        toast("Nombre Equipo Invalido", {
          icon: "⚠️",
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
    }
    if (siglas === "") {
      toast("Ingesar Siglas de Equipo", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (siglas.campo.length < 3 || siglas.campo.length > 10) {
        valido = false;
        toast("Siglas De Equipo Invalido", {
          icon: "⚠️",
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
    }
    if (cantidadJugadores === "") {
      toast("Ingesar Cantidad de Jugadores", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      if (cantidadJugadores < 5) {
        toast("Cantidad de Jugadores Minima 5", {
          icon: "⚠️",
          duration: 3000,
          style: {
            border: "2px solid #ff7c01",
            padding: "10px",
            color: "#fff",
            background: "#000",
            borderRadius: "4%",
          },
        });
        valido = false;
      }
      if (cantidadJugadores > 15) {
        toast("Cantidad de Jugadores Maxima 15", {
          icon: "⚠️",
          duration: 3000,
          style: {
            border: "2px solid #ff7c01",
            padding: "10px",
            color: "#fff",
            background: "#000",
            borderRadius: "4%",
          },
        });
        valido = false;
      }
    }
    if (creacion === "") {
      toast("Ingesar Creacion de Equipo", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
      var fechaActual = new Date().toISOString();
      if (creacion > fechaActual) {
        valido = false;
        toast("Fecha de Creacion Invalida", {
          icon: "⚠️",
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
    }
    if (categoria === "") {
      toast("Ingesar Categoria", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    } else {
    }

    if(logoEquipo === null){
      toast("Ingesar Logo", {
        icon: "⚠️",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
      valido = false;
    }
    
    return valido;
  }
  const registroEquipo = () => {
    obtenerCampeonato();

    if (esValidoDelegado()) {
      existeDelegado();
    }
  };
  const registroPago = () => {
    if (esValidoEquipo()) {
      existeEquipo();
    }
  };
  const registroDelegado = () => {
    setVentana1(true);
    setVentana2(false);
  };
  const recuperarVentana1 = () => {
    if (document.getElementById("nombreCompleto") != null) {
      document.getElementById("nombreCompleto").value = nombre.campo;
    }
    if (document.getElementById("carnetIdentidad") != null) {
      document.getElementById("carnetIdentidad").value = carnet.campo;
    }
    if (document.getElementById("correo") != null) {
      document.getElementById("correo").value = correo.campo;
    }
    if (document.getElementById("numeroCelular") != null) {
      document.getElementById("numeroCelular").value = numeroCel;
    }
    if (document.getElementById("fechaNacimiento") != null) {
      document.getElementById("fechaNacimiento").value = fechaNacimiento;
    }
    if (document.getElementById("nacionalidad") != null) {
      document.getElementById("nacionalidad").value = nacionalidad;
    }
  };
  const recuperarVentana2 = () => {
    if (document.getElementById("nombreEquipo") != null) {
      document.getElementById("nombreEquipo").value = equipo.campo;
    }
    if (document.getElementById("siglasEquipo") != null) {
      document.getElementById("siglasEquipo").value = siglas.campo;
    }
    if (document.getElementById("logo") != null) {
      document.getElementById("logo").value = logo;
    }
    if (document.getElementById("cantidadJugadores") != null) {
      document.getElementById("cantidadJugadores").value = cantidadJugadores;
    }
    if (document.getElementById("creacion") != null) {
      document.getElementById("creacion").value = creacion;
    }
    if (document.getElementById("categoria") != null) {
      document.getElementById("categoria").value = categoria;
    }
  };
  const validar = () => {
    if (ventana1) {
      if (fechaNacimiento != "") {
        var fechaActual = new Date().toISOString();
        if (fechaNacimiento < fechaActual) {
          var edad = calcularEdad(fechaNacimiento);
          if (edad > 18) {
            setValidarFechaN("true");
          }
        } else {
          setValidarFechaN("false");
        }
      }
    }
    if (ventana2) {
      if (cantidadJugadores != "") {
        if (cantidadJugadores > 4 && cantidadJugadores < 20) {
          setValidarJug("true");
        } else {
          setValidarJug("false");
        }
      }
      if (creacion != "") {
        var fechaActual = new Date().toISOString();
        if (creacion < fechaActual) {
          setValidarCreacion("true");
        } else {
          setValidarCreacion("false");
        }
      }
    }
  };
  const obtenerCategoria = () => {
    axios.get(url + "categorias").then((response) => {
      setListaCategoria(response.data);
      setVentana1(false);
      setVentana2(true);
    });
  };
  useEffect(function () {
    recuperarVentana1();
    recuperarVentana2();
  });

  function generarIDDelegado() {
    var codigo = (
      7 +
      fechaNacimiento.substring(8, 10) +
      nombre.campo.substring(0, 3) +
      carnet.campo.substring(0, 2) +
      fechaNacimiento.substring(0, 2)
    ).toUpperCase();
    return codigo;
  }

  function generarIDEquipo() {
    var codigo =
      equipo.campo.substring(0, 3) +
      creacion.substring(0, 2) +
      creacion.substring(8, 10).toUpperCase();
    return codigo;
  }

  const enviarCredenciales = () => {
    var templateParams = {
      nombre: nombre.campo,
      correo: correo.campo,
      fecha: new Date().toLocaleDateString(),
      equipo: equipo.campo,
      id: generarIDDelegado(),
      ci: carnet.campo,
    };
    emailjs
      .send(
        "service_486x7hq",
        "template_ct1it0m",
        templateParams,
        "uygKcXnl0C2x-7MkG"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const agregarBaseDatos = () => {
    setEspera("true");
    setInhabilitado(true);
    const delegado = {
      IDDELEGADO: generarIDDelegado(),
      NOMBRE: nombre.campo,
      CI: carnet.campo,
      EMAIL: correo.campo,
      CELULAR: numeroCel,
      FECHANACIMIENTO: fechaNacimiento,
      NACIONALIDAD: nacionalidad,
      GENERO: genero,
      CONTRASENA: carnet.campo,
    };
    const equipoBd = {
      IDEQUIPO: generarIDEquipo(),
      NOMBRE: equipo.campo,
      SIGLAS: siglas.campo,
      LOGO: "LOGO.JPG",
      CANTIDAD: cantidadJugadores,
      FECHACREACION: creacion,
      IDDELEGADO: generarIDDelegado(),
      CATEGORIA: categoria,
    };
    var inscripcion = {
      IDEQUIPO: generarIDEquipo(),
      COMPROBANTEPAGO: "vacio",
      PAGOMEDIO: pago,
      COMPROBANTEMEDIO: "vacio",
      HABILITADO: "false",
    };
    console.log(equipoBd)
    axios.post(url + "anadirDelegado", delegado).then((response) => {
      axios.post(url + "anadirEquipo", equipoBd).then((response) => {
        axios.post(url + "anadirInscripcion", inscripcion).then((response) => {
          toast("Delegado Registrado", {
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
          enviarComprobatenPago(equipoBd.IDEQUIPO);
          enviarCredenciales();
          setEspera("false");
          setInhabilitado(false);
          historial.replace("/");
        });
      });
    });
  };

  const enviarComprobatenPago = async (idEquipo) =>{
    const f = new FormData();
    f.append("imagen",comprobantePago);
    const response = await fetch(url+"comprobantePago/"+idEquipo,{
      method : "POST",
      body: f
    })
    console.log(logoEquipo);

    const f2 = new FormData();
    f2.append("imagen",logoEquipo);
    const response2 = await fetch(url+ "agregarLogo/"+idEquipo,{
      method: "POST",
      body: f2
    })
  }
  const obtenerCampeonato = async () =>{
     const response = await fetch(url + "todosCampeonatos");
     const data = await response.json();
     console.log(data);
     setCampeonato(data[0]);
  }

  return (
    <>
      <Nav>
        <ImagenLogo
          onClick={() => {
            historial.push("/");
          }}
          src={require("../Imagenes/LogoBlanco.png")}
        />{" "}
        <NavMenu>
          <BotonNavegacion
            onClick={() => {
              historial.push("/fixture");
            }}
          >
            FIXTURE
          </BotonNavegacion>
          <BotonNavegacion
            onClick={() => {
              historial.push("/equipo");
            }}
          >
            EQUIPOS
          </BotonNavegacion>
          <BotonNavegacion
            onClick={() => {
              historial.push("/tabla");
            }}
          >
            TABLA DE POSICIONES
          </BotonNavegacion>
        </NavMenu>
      </Nav>
      <GlobalStyles>
        {ventana1 && (
          <ContenedorRegistro>
            <Titulo>REGISTRO DELEGADO</Titulo>
            <DetalleUsuario>
              <InputValidar
                estado={nombre}
                cambiarEstado={setNombre}
                tipo="text"
                label="Nombre Completo"
                placeholder="Nombre Completo"
                name="combreCompleto"
                expresionRegular={expresiones.nombre}
              />
              <InputValidar
                estado={carnet}
                cambiarEstado={setCarnet}
                tipo="text"
                label="Carnet Identidad"
                placeholder="Carnet Identidad"
                name="carnetIdentidad"
                expresionRegular={expresiones.carnet}
                mensaje="Carnet Invalido"
              />
              <InputValidar
                estado={correo}
                cambiarEstado={setCorreo}
                tipo="email"
                label="Correo"
                placeholder="Correo"
                name="correo"
                expresionRegular={expresiones.correo}
                mensaje="Correo Invalido"
              />
              <BoxCampo>
                <TextBox>Numero de Celular</TextBox>
                <PhoneInput
                  placeholder="Numero de Celular"
                  defaultCountry="BO"
                  id="numeroCelular"
                  value={numeroCel}
                  onChange={(numeroCel) => setNumeroCel(numeroCel)}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Fecha Nacimiento </TextBox>
                <InputBox
                  type="date"
                  valido={validarFechaN}
                  placeholder="Fecha Nacimiento"
                  required
                  id="fechaNacimiento"
                  onChange={(e) => {
                    setFechaNacimiento(e.target.value);
                  }}
                  onKeyUp={validar}
                  onBlur={validar}
                />
                <IconoValidacion
                  icon={
                    validarFechaN === "true" ? faCircleCheck : faCircleXmark
                  }
                  valido={validarFechaN}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Nacionalidad</TextBox>
                <SelectNacionalidad
                  type="text"
                  placeholder="Nacionalidad"
                  required
                  id="nacionalidad"
                  onChange={(e) => {
                    setNacionalidad(e.target.value);
                  }}
                >
                  <option value="">Nacionalidad</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Afganistán">Afganistán</option>
                  <option value="Albania">Albania</option>
                  <option value="Alemania">Alemania</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antártida">Antártida</option>
                  <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                  <option value="Antillas Holandesas0">
                    Antillas Holandesas
                  </option>
                  <option value="Arabia Saudita">Arabia Saudita</option>
                  <option value="Argelia">Argelia</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaiján">Azerbaiján</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Bélgica">Bélgica</option>
                  <option value="Belice">Belice</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bielorusia">Bielorusia</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Camboya">Camboya</option>
                  <option value="Camerún">Camerún</option>
                  <option value="Canadá">Canadá</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Chipre">Chipre</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Corea del Norte">Corea del Norte</option>
                  <option value="Corea del Sur">Corea del Sur</option>
                  <option value="Costa de Marfil">Costa de Marfil</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croacia">Croacia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Darussalam">Darussalam</option>
                  <option value="Dinamarca">Dinamarca</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egipto">Egipto</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Em. Arabes Un.">Em. Arabes Un.</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Eslovaquia">Eslovaquia</option>
                  <option value="Eslovenia">Eslovenia</option>
                  <option value="España">España</option>
                  <option value="Estados Unidos">Estados Unidos</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Etiopía">Etiopía</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Filipinas">Filipinas</option>
                  <option value="Finlandia">Finlandia</option>
                  <option value="Francia">Francia</option>
                  <option value="Gabón">Gabón</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Grecia">Grecia</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Groenlandia">Groenlandia</option>
                  <option value="Guadalupe">Guadalupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guayana Francesa">Guayana Francesa</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea Ecuatorial">Guinea Ecuatorial</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haití">Haití</option>
                  <option value="Holanda">Holanda</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungría">Hungría</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Irak">Irak</option>
                  <option value="Irán">Irán</option>
                  <option value="Irlanda">Irlanda</option>
                  <option value="Islandia">Islandia</option>
                  <option value="Islas Cayman">Islas Cayman</option>
                  <option value="Islas Cook">Islas Cook</option>
                  <option value="Islas Faroe">Islas Faroe</option>
                  <option value="Islas Marianas del Norte">
                    Islas Marianas del Norte
                  </option>
                  <option value="Islas Marshall">Islas Marshall</option>
                  <option value="Islas Solomon">Islas Solomon</option>
                  <option value="Islas Turcas y Caicos">
                    Islas Turcas y Caicos
                  </option>
                  <option value="Islas Vírgenes">Islas Vírgenes</option>
                  <option value="Islas Wallis y Futuna">
                    Islas Wallis y Futuna
                  </option>
                  <option value="Israel">Israel</option>
                  <option value="Italia">Italia</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japón">Japón</option>
                  <option value="Jordania">Jordania</option>
                  <option value="Kazajstán">Kazajstán</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kirguistán">Kirguistán</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Laos">Laos</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Letonia">Letonia</option>
                  <option value="Líbano">Líbano</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libia">Libia</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lituania">Lituania</option>
                  <option value="Luxemburgo">Luxemburgo</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malasia">Malasia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marruecos">Marruecos</option>
                  <option value="Martinica">Martinica</option>
                  <option value="Mauricio">Mauricio</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="México">México</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Mónaco">Mónaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Níger">Níger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Noruega">Noruega</option>
                  <option value="Nueva Caledonia">Nueva Caledonia</option>
                  <option value="Nueva Zelandia">Nueva Zelandia</option>
                  <option value="Omán">Omán</option>
                  <option value="Pakistán">Pakistán</option>
                  <option value="Panamá">Panamá</option>
                  <option value="Papua Nueva Guinea">Papua Nueva Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Perú">Perú</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Polinesia Francesa">Polinesia Francesa</option>
                  <option value="Polonia">Polonia</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="RD Congo">RD Congo</option>
                  <option value="Reino Unido">Reino Unido</option>
                  <option value="República Centroafricana">
                    República Centroafricana
                  </option>
                  <option value="República Checa">República Checa</option>
                  <option value="República Dominicana">
                    República Dominicana
                  </option>
                  <option value="Reunión">Reunión</option>
                  <option value="Rumania">Rumania</option>
                  <option value="Rusia">Rusia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Sahara Occidental">Sahara Occidental</option>
                  <option value="Saint Pierre y Miquelon">
                    Saint Pierre y Miquelon
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa Americana">Samoa Americana</option>
                  <option value="San Cristóbal y Nevis">
                    San Cristóbal y Nevis
                  </option>
                  <option value="San Marino">San Marino</option>
                  <option value="Santa Elena">Santa Elena</option>
                  <option value="Santa Lucía">Santa Lucía</option>
                  <option value="Sao Tomé y Príncipe">
                    Sao Tomé y Príncipe
                  </option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia y Montenegro">
                    Serbia y Montenegro
                  </option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leona">Sierra Leona</option>
                  <option value="Singapur">Singapur</option>
                  <option value="Siria">Siria</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudáfrica">Sudáfrica</option>
                  <option value="Sudán">Sudán</option>
                  <option value="Suecia">Suecia</option>
                  <option value="Suiza">Suiza</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swazilandia">Swazilandia</option>
                  <option value="Taiwán">Taiwán</option>
                  <option value="Uruguay">Uruguay</option>
                </SelectNacionalidad>
              </BoxCampo>
            </DetalleUsuario>
            <Titulo>GENERO</Titulo>
            <Category>
              <Label for="dot-1">
                <Radio
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Hombre"
                  checked={genero === "Hombre" ? true : false}
                  onChange={cambioGenero}
                />
                <span className="gender">Hombre</span>
              </Label>
              <Label for="dot-2">
                <Radio
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Mujer"
                  checked={genero === "Mujer" ? true : false}
                  onChange={cambioGenero}
                />
                <span className="gender">Mujer</span>
              </Label>
            </Category>
            <ContenedorBotones>
              <NavBoton1 onClick={registroEquipo}>
                <FontAwesomeIcon icon={faChevronRight} />
              </NavBoton1>
            </ContenedorBotones>
          </ContenedorRegistro>
        )}
        {ventana2 && (
          <ContenedorRegistro>
            <Titulo>REGISTRO EQUIPO</Titulo>
            <DetalleUsuario>
              <InputValidar
                estado={equipo}
                cambiarEstado={setEquipo}
                tipo="text"
                label="Nombre Equipo"
                placeholder="Nombre Equipo"
                name="nombreEquipo"
                expresionRegular={expresiones.carnet}
              />
              <InputValidar
                estado={siglas}
                cambiarEstado={setSiglas}
                tipo="text"
                label="Siglas Equipo"
                placeholder="Siglas Equipo"
                name="siglasEquipo"
                expresionRegular={expresiones.sigla}
              />
              <BoxCampo>
                <TextBox>Logo Equipo</TextBox>
                <input type="file" name="" id="logo" hidden onChange={(e)=> 
                  {setLogoEquipo(e.target.files[0])
                  }} 
                  />
                <LabelFile for="logo" id="imagenLogo">
                  Seleccionar Archivo
                </LabelFile>
              </BoxCampo>
              <BoxCampo>
                <TextBox>Cantidad de Jugadores</TextBox>
                <InputBox
                  type="number"
                  valido={validarJug}
                  placeholder="Cantidad de Jugadores"
                  required
                  id="cantidadJugadores"
                  onChange={(e) => {
                    setCantidadJugadores(e.target.value);
                  }}
                  onKeyUp={validar}
                  onBlur={validar}
                />
                <IconoValidacion
                  icon={validarJug === "true" ? faCircleCheck : faCircleXmark}
                  valido={validarJug}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Creacion de Equipo </TextBox>
                <InputBox
                  type="date"
                  valido={validarCreacion}
                  placeholder="Creacion de Equipo"
                  required
                  id="creacion"
                  onChange={(e) => {
                    setCreacion(e.target.value);
                  }}
                  onKeyUp={validar}
                  onBlur={validar}
                />
                <IconoValidacion
                  icon={
                    validarCreacion === "true" ? faCircleCheck : faCircleXmark
                  }
                  valido={validarCreacion}
                />
              </BoxCampo>
              <BoxCampo>
                <TextBox>Categoria</TextBox>
                <SelectNacionalidad
                  type="text"
                  placeholder="Categoria"
                  required
                  id="categoria"
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                >
                  <option value="">Categoria</option>
                  {listaCategoria.map((datos) => {
                    return (
                      <option value={datos.NOMBRECATEGORIA}>
                        {datos.NOMBRECATEGORIA}
                      </option>
                    );
                  })}
                </SelectNacionalidad>
              </BoxCampo>
            </DetalleUsuario>
            <ContenedorBotones>
              <NavBoton left onClick={registroDelegado}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavBoton>
              <NavBoton right onClick={registroPago}>
                <FontAwesomeIcon icon={faChevronRight} />
              </NavBoton>
            </ContenedorBotones>
          </ContenedorRegistro>
        )}
        {ventana3 && (
          <ContenedorRegistro>
            <Titulo>PAGO</Titulo>
            <CategoryPago>
              <Label for="dot-1">
                <Radio
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Medio"
                  checked={pago === "Medio" ? true : false}
                  onChange={cambioPago}
                />
                <span className="gender">Pago Medio</span>
              </Label>
              <Label for="dot-2">
                <Radio
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Completo"
                  checked={pago === "Completo" ? true : false}
                  onChange={cambioPago}
                />
                <span className="gender">Pago Completo</span>
              </Label>
            </CategoryPago>
            <DetalleUsuarioPago>
              {pago == "Completo" && (
                <ImagenPago src={urlImage+"storage/"+campeonato.PAGOCOMPLETO} />
              )}
              {pago == "Medio" && (
                <ImagenPago src={urlImage+"storage/"+campeonato.PAGOMITAD} />
              )}
            </DetalleUsuarioPago>
            <ContenedorBotones>
              <NavBoton
                left
                onClick={() => {
                  setVentana3(false);
                  setVentana2(true);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavBoton>
              <NavBoton
                right
                onClick={() => {
                  if (pago != "") {
                    setVentana3(false);
                    setVentana4(true);
                  } else {
                    toast("Seleccionar Pago", {
                      icon: "⚠️",
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
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </NavBoton>
            </ContenedorBotones>
          </ContenedorRegistro>
        )}
        {ventana4 && (
          <ContenedorRegistro>
            <Titulo>COMPROBANTE DE PAGO</Titulo>
            <CategoryPago>
              <input type="file" name="" id="logo" hidden onChange={(e)=>setComprobantePago(e.target.files[0])}/>
              <LabelFile for="logo" id="comprobantePago">
                Seleccionar Archivo
              </LabelFile>
            </CategoryPago>
            <ContenedorBotones>
              <NavBoton
                disabled={inhabilitado}
                left
                onClick={() => {
                  setVentana4(false);
                  setVentana3(true);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavBoton>
              <NavBoton
                disabled={inhabilitado}
                right
                onClick={agregarBaseDatos}
              >
                {espera == "false" && <FontAwesomeIcon icon={faChevronRight} />}

                {espera == "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </NavBoton>
            </ContenedorBotones>
          </ContenedorRegistro>
        )}
      </GlobalStyles>
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
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