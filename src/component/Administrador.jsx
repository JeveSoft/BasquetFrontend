import React, { useEffect } from "react";
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
import { IconoValidacion } from "./EstiloRegistro";
import axios from "axios";
import { toast } from "react-hot-toast";
import ModalEquipo from "./ModalEquipo";
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

export default function Administrador() {
  const [titulo, setTitulo] = useState("ADMINISTRADOR");
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
  const [listaCategorias, setListaCategoria] = useState(null);
  const [listaMedioPago, setListaMedioPago] = useState([]);
  const [obtuvoMP, setObtuvoMP] = useState(false);
  const [obtuvoPC, setObtuvoPC] = useState(false);
  const [listaPagoCompleto, setListaPagoCompleto] = useState([]);
  const [obtuvoHS, setObtuvoHS] = useState(false);
  const [listaHabilitadoSin, setListaHabilitadoSin] = useState([]);
  const [obtuvoGrupos, setObtuvoGrupos] = useState(true);
  const [obtuvoH, setObtuvoH] = useState(false);
  const [datos, setDatos] = useState([]);
  const [obtuvoC, setObtuvoC] = useState(false);
  const [obtuvoFechas, setObtuvoFechas] = useState(false);
  const [obtuvoA, setObtuvoA] = useState(false);
  const [obtuvoI, setObtuvoI] = useState(false);
  const [listaArbitro, setListaArbitro] = useState([]);
  const [listaHabilitado, setListaHabilitado] = useState([]);
  const [listaInformacion, setListaInformacion] = useState([]);
  const [elEquipo, setElEquipo] = useState([]);
  const [tipoEquipo, settipoEquipo] = useState([]);
  const url = "http://127.0.0.1:8000/";
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [esperaF, setEsperaF] = useState("false");
  const [inhabilitadoF, setInhabilitadoF] = useState(false);
  const [listaGrupos, setListaGrupos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [partidos, setPartidos] = useState([]);
  const [fixture1, setFixture1] = useState(true);
  const [fixture2, setFixture2] = useState(false);
  const [fixture3, setFixture3] = useState(false);
  const [generoFixture, setGenerarFixture] = useState(false);

  const [fixtureSF1, setFixtureSF1] = useState(true);
  const [fixtureSF2, setFixtureSF2] = useState(false);
  const [generoFixtureSF, setGenerarFixtureSF] = useState(false);
  const [activoCFSF, setActivoCFSF] = useState("");

  const [fixtureF1, setFixtureF1] = useState(true);
  const [fixtureF2, setFixtureF2] = useState(false);
  const [generoFixtureF, setGenerarFixtureF] = useState(false);
  const [activoCFF, setActivoCFF] = useState("");
  const [listaFinal, setListaFinal] = useState([]);
  const [categoriaFinal, setCategoriaFinal] = useState("");
  const [obtuvoListaFinal, setObtuvoListaFinal] = useState("");

  const [fechaDia1, setFechaDia1] = useState();
  const [fechaDia2, setFechaDia2] = useState();
  const [fechaDia3, setFechaDia3] = useState();
  const [fechaDia4, setFechaDia4] = useState();
  const [vfechaDia1, setvFechaDia1] = useState(null);
  const [vfechaDia2, setvFechaDia2] = useState(null);
  const [vfechaDia3, setvFechaDia3] = useState(null);
  const [vfechaDia4, setvFechaDia4] = useState(null);

  const [fechasLimite, setFechasLimite] = useState([]);
  const [lugar1, setLugar1] = useState({ campo: "", valido: null });
  const [lugar2, setLugar2] = useState({ campo: "", valido: null });
  const [lugar3, setLugar3] = useState({ campo: "", valido: null });
  const [lugar4, setLugar4] = useState({ campo: "", valido: null });

  const [hora1, setHora1] = useState();
  const [hora2, setHora2] = useState();
  const [hora3, setHora3] = useState();
  const [hora4, setHora4] = useState();
  const [vhora1, setvHora1] = useState(null);
  const [vhora2, setvHora2] = useState(null);
  const [vhora3, setvHora3] = useState(null);
  const [vhora4, setvHora4] = useState(null);
  const [pagoMitad, setPagoMitad] = useState(null);
  const [pagoCompleto, setPagoCompleto] = useState(null); 
  const [informacion, setInformacion] = useState({}); 

  const validarFechaFinLiga = () => {
    if (fechaFinLiga != "") {
      if (
        fechaFinLiga > fechaInicioLiga &&
        validarInicioLiga == "true" &&
        validarInicio == "true" &&
        validarFin == "true" &&
        validarPreFin == "true" &&
        validarPreInicio == "true"
      ) {
        setValidarFinLiga("true");
      } else {
        setValidarFinLiga("false");
      }
    } else {
      setValidarFinLiga(null);
    }
  };
  const validarFechaInicioLiga = () => {
    if (fechaInicioLiga != "") {
      if (
        fechaInicioLiga > fechaFin &&
        validarInicio == "true" &&
        validarFin == "true" &&
        validarPreFin == "true" &&
        validarPreInicio == "true"
      ) {
        setValidarInicioLiga("true");
      } else {
        setValidarInicioLiga("false");
      }
    } else {
      setValidarInicioLiga(null);
    }
  };
  const validarFechaInicio = () => {
    if (fechaInicio != "") {
      if (
        fechaInicio > fechaPreFin &&
        validarPreFin == "true" &&
        validarPreInicio == "true"
      ) {
        setValidarInicio("true");
      } else {
        setValidarInicio("false");
      }
    } else {
      setValidarInicio(null);
    }
  };
  const validarFechaFin = () => {
    if (fechaFin != "") {
      if (
        fechaFin > fechaInicio &&
        validarInicio == "true" &&
        validarPreFin == "true" &&
        validarPreInicio == "true"
      ) {
        setValidarFin("true");
      } else {
        setValidarFin("false");
      }
    } else {
      setValidarFin(null);
    }
  };
  const validarFechaPreFin = () => {
    if (fechaPreFin !== "") {
      if (fechaPreFin > fechaPreInicio && validarPreInicio == "true") {
        setValidarPreFin("true");
      } else {
        setValidarPreFin("false");
      }
    } else {
      setValidarPreFin(null);
    }
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
  const subirPagos = () => {
    setEspera("true");
    setInhabilitado(true);
    axios.get(url + "todosCampeonatos").then((response) => {
      if (response.data.length > 0) {
        var pagos = {
          DESCRIPCION: "",
          INIPREINSCRIPCION: "",
          FINPREINSCRIPCION: "",
          INIINSCRIPCION: "",
          FININSCRIPCION: "",
          INICIOLIGA: "",
          FINLIGA: "",
          PAGOMITAD: "pagomedio.jpg",
          PAGOCOMPLETO: "pagocompleto.jpg",
        };
        axios
          .put(url + "acutalizarPagos/" + response.data[0].IDCAMPEONATO, pagos)
          .then((response) => {
            setEspera("false");
            setInhabilitado(false);
            toast("Pagos Establecidas", {
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
          });
      } else {
        var pagos = {
          DESCRIPCION: "",
          INIPREINSCRIPCION: "",
          FINPREINSCRIPCION: "",
          INIINSCRIPCION: "",
          FININSCRIPCION: "",
          INICIOLIGA: "",
          FINLIGA: "",
          PAGOMITAD: "pagomedio.jpg",
          PAGOCOMPLETO: "pagocompleto.jpg",
        };
        axios.post(url + "anadirCampeonato", pagos).then((response) => {
          setEspera("false");
          setInhabilitado(false);
          toast("Pagos Establecidas", {
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
        });
      }
      if(pagoMitad !== null && pagoCompleto !== null){
        subirComprobantes(response.data[0].IDCAMPEONATO);
        console.log("entreo");
      }
    });
  };

  const subirComprobantes = async (idCampeonato) =>{
    const f = new FormData();
    f.append("imagen",pagoMitad);

    const response2 = await fetch(url + "pagoMedio/"+idCampeonato,{
      method: "POST",
      body: f
    })

    const f2 = new FormData();
    f2.append("imagen",pagoCompleto);

    const response = await fetch(url + "pagoCompleto/"+idCampeonato,{
      method: "POST",
      body: f
    })
  }

  const subirFechas = () => {
    setEspera("true");
    setInhabilitado(true);
    if (
      validarFinLiga === "true" &&
      validarInicioLiga === "true" &&
      validarInicio === "true" &&
      validarFin === "true" &&
      validarPreFin === "true" &&
      validarPreInicio === "true"
    ) {
      axios.get(url + "todosCampeonatos").then((response) => {
        if (response.data.length > 0) {
          axios
            .put(url + "acutalizarFechas/" + response.data[0].IDCAMPEONATO, {
              INIPREINSCRIPCION: fechaPreInicio,
              FINPREINSCRIPCION: fechaPreFin,
              INIINSCRIPCION: fechaInicio,
              FININSCRIPCION: fechaFin,
              INICIOLIGA: fechaInicioLiga,
              FINLIGA: fechaFinLiga,
            })
            .then((response) => {
              setEspera("false");
              setInhabilitado(false);
              toast("Fechas Establecidas", {
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
            });
        } else {
          var fechas = {
            DESCRIPCION: "",
            INIPREINSCRIPCION: fechaPreInicio,
            FINPREINSCRIPCION: fechaPreFin,
            INIINSCRIPCION: fechaInicio,
            FININSCRIPCION: fechaFin,
            INICIOLIGA: fechaInicioLiga,
            FINLIGA: fechaFinLiga,
            PAGOMITAD: "",
            PAGOCOMPLETO: "",
          };
          axios.post(url + "anadirCampeonato", fechas).then((response) => {
            setEspera("false");
            setInhabilitado(false);

            toast("Fechas Establecidas", {
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
          });
        }
      });
    } else {
      setEspera("false");
      setInhabilitado(false);
      toast("Verificar Fechas", {
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
  };
  const obtenerSoloFechas = () => {
    if (fechas == null) {
      axios.get(url + "todosCampeonatos").then((response) => {
        setFechasLimite(response.data);
        setEspera("false");
        setFixture1(false);
        setFixture2(true);
      });
    }
  };
  const obtenerFechas = () => {
    if (titulo === "CONFIGURAR LIGA" && opcionL === "1") {
      if (fechas == null) {
        if (nombreBoton == "Guardar") {
          axios.get(url + "todosCampeonatos").then((response) => {
            fechas = response.data;
            setObtuvoFechas(true);
            if (fechas.length > 0) {
              setFechaPreInicio(fechas[0].INIPREINSCRIPCION);
              document.getElementById("fechaPreInicio").value = fechaPreInicio;
              setFechaPreFin(fechas[0].FINPREINSCRIPCION);
              document.getElementById("fechaPreFin").value = fechaPreFin;
              setFechaInicio(fechas[0].INIINSCRIPCION);
              document.getElementById("fechaInicio").value = fechaInicio;
              setFechaFin(fechas[0].FININSCRIPCION);
              document.getElementById("fechaFin").value = fechaFin;
              setFechaInicioLiga(fechas[0].INICIOLIGA);
              document.getElementById("fechaInicioLiga").value =
                fechaInicioLiga;
              setFechaFinLiga(fechas[0].FINLIGA);
              document.getElementById("fechaFinLiga").value = fechaFinLiga;
              setNombreBoton("Editar");
              verificarFechas();
              setObtuvoFechas(true);
            }
          });
        }
      }
    }
  };
  useEffect(function () {
    if (
      titulo === "CONFIGURAR LIGA" &&
      nombreBoton !== "Editar" &&
      opcionL === "1"
    ) {
      if (!obtuvoFechas) {
        obtenerFechas();
      } else {
        document.getElementById("fechaPreInicio").value = fechaPreInicio;
        document.getElementById("fechaPreFin").value = fechaPreFin;
        document.getElementById("fechaInicio").value = fechaInicio;
        document.getElementById("fechaFin").value = fechaFin;
        document.getElementById("fechaInicioLiga").value = fechaInicioLiga;
        document.getElementById("fechaFinLiga").value = fechaFinLiga;
      }
    } else {
      if (titulo === "CONFIGURAR LIGA" && opcionL === "1") {
        document.getElementById("fechaPreInicio").value = fechaPreInicio;
        document.getElementById("fechaPreFin").value = fechaPreFin;
        document.getElementById("fechaInicio").value = fechaInicio;
        document.getElementById("fechaFin").value = fechaFin;
        document.getElementById("fechaInicioLiga").value = fechaInicioLiga;
        document.getElementById("fechaFinLiga").value = fechaFinLiga;
      }
    }
    if (titulo === "ARBITRO") {
      obtenerArbitro();
    }
    if (titulo === "INFORMACIÓN") {
      obtenerInformacion();
    }
    if (titulo === "EQUIPO") {
      if (opcion === "1") {
        obtenerMedioPago();
      }
      if (opcion === "2") {
        obtenerPagoCompleto();
      }
      if (opcion === "3") {
        obtenerHabilitadoSin();
      }
      if (opcion === "4") {
        obtenerHabilitado();
      }
    }
    if (titulo === "CREAR FIXTURE" && fixture3) {
      validarDia1();
      validarDia2();
      validarDia3();
      validarDia4();
    }
    obtenerCategoria();
    if (titulo === "CONFIGURAR LIGA" && opcionL === "1") {
      validarFechaPreInicio();
      validarFechaPreFin();
      validarFechaInicio();
      validarFechaFin();
      validarFechaInicioLiga();
      validarFechaFinLiga();
    }
  });
  const verificarFechas = () => {
    var fechaActual = new Date().toISOString();
    if (fechaPreInicio < fechaActual) {
      setEmpezo(true);
    }
  };
  const obtenerCategoria = () => {
    axios.get(url + "categorias").then((response) => {
      setListaCategoria(response.data);
      setObtuvoC(true);
    });
  };
  const obtenerArbitro = () => {
    axios.get(url + "arbitros").then((response) => {
      setListaArbitro(response.data);
      setObtuvoA(true);
    });
  };
  const obtenerPagoCompleto = () => {
    axios.get(url + "pagoCompleto").then((response) => {
      setListaPagoCompleto(response.data);
      setObtuvoPC(true);
    });
  };
  const obtenerMedioPago = () => {
    axios.get(url + "medioPago").then((response) => {
      setListaMedioPago(response.data);
      setObtuvoMP(true);
    });
  };
  const obtenerHabilitadoSin = () => {
    axios.get(url + "habilitadoSin").then((response) => {
      setListaHabilitadoSin(response.data);
      setObtuvoHS(true);
    });
  };
  const obtenerHabilitado = () => {
    axios.get(url + "habilitado").then((response) => {
      setListaHabilitado(response.data);
      setObtuvoH(true);
    });
  };
  const obtenerInformacion = () => {
    axios.get(url + "informacion").then((response) => {
      setListaInformacion(response.data);
      setObtuvoI(true);
    });
  };
  const obtenerEquiposCategoria = () => {
    if (categoria != "") {
      setEspera("true");
      setInhabilitado(true);
      axios.get(url + "obtenercategoriafixture/" + categoria).then((data) => {
        if (data.data.length <= 0) {
          setObtuvoGrupos(false);
          axios.get(url + "porCategoria/" + categoria).then((response) => {
            listaGrupos.splice(0, listaGrupos.length);
            if (response.data.length > 7) {
              var listaFixture = response.data;
              var total = listaFixture.length;
              var mitad = listaFixture.length / 2;
              var j = 0;
              var equipoA = [];
              var equipoB = [];
              while (j < mitad) {
                let random = Math.floor(Math.random() * response.data.length);
                let eq = listaFixture[random].NOMBRE;
                equipoA.push(eq);
                listaFixture.splice(random, 1);
                j++;
              }
              while (j < total) {
                let random = Math.floor(Math.random() * response.data.length);
                let eq = listaFixture[random].NOMBRE;
                equipoB.push(eq);
                listaFixture.splice(random, 1);
                j++;
              }
              const grupoA = {
                Grupo: "Grupo A",
                Equipos: equipoA,
              };
              const grupoB = {
                Grupo: "Grupo B",
                Equipos: equipoB,
              };
              listaGrupos.push(grupoA);
              listaGrupos.push(grupoB);
            } else {
              var listaFixtureP = response.data;
              var tamaño = listaFixtureP.length;
              var i = 0;
              var equipo = [];
              while (i < tamaño) {
                let random = Math.floor(Math.random() * response.data.length);
                let eq = listaFixtureP[random].NOMBRE;
                equipo.push(eq);
                listaFixtureP.splice(random, 1);
                i++;
              }
              const grupoA = {
                Grupo: "Grupo A",
                Equipos: equipo,
              };

              listaGrupos.push(grupoA);
            }
            setObtuvoGrupos(true);
            setGenerarFixture(true);
            setEspera("false");
            setInhabilitado(false);
            toast("Fixture de categoria " + categoria + " generada", {
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
          });
        } else {
          setEspera("false");
          setInhabilitado(false);
          toast("Fixture ya generado", {
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
    } else {
      toast("Ingresar Categoria", {
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
  };
  const generarPartidos = () => {
    if (generoFixture) {
      if (listaGrupos.length > 1) {
        setEspera("true");
        var EqGrupoA = listaGrupos[0].Equipos.slice();
        var EqGrupoB = listaGrupos[1].Equipos.slice();
        var partidosA = [];
        var partidosB = [];
        var tamañoA = EqGrupoA.length;
        var tamañoB = EqGrupoB.length;
        while (tamañoA > 0) {
          let random = Math.floor(Math.random() * EqGrupoA.length);
          let eq1 = EqGrupoA[random];
          EqGrupoA.splice(random, 1);
          random = Math.floor(Math.random() * EqGrupoA.length);
          let eq2 = EqGrupoA[random];
          EqGrupoA.splice(random, 1);
          let partido = {
            equipo1: eq1,
            equipo2: eq2,
            lugar: "",
            fecha: "",
            hora: "",
          };
          partidosA.push(partido);
          tamañoA = tamañoA - 2;
        }
        while (tamañoB > 0) {
          let random = Math.floor(Math.random() * EqGrupoB.length);
          let eq1 = EqGrupoB[random];
          EqGrupoB.splice(random, 1);
          random = Math.floor(Math.random() * EqGrupoB.length);
          let eq2 = EqGrupoB[random];
          EqGrupoB.splice(random, 1);
          let partido = {
            equipo1: eq1,
            equipo2: eq2,
            lugar: "",
            fecha: "",
            hora: "",
          };
          partidosB.push(partido);
          tamañoB = tamañoB - 2;
        }
        let lista1 = {
          Grupo: "Grupo A " + categoria,
          Partidos: partidosA,
        };
        let lista2 = {
          Grupo: "Grupo B" + categoria,
          Partidos: partidosB,
        };
        partidos.push(lista1);
        partidos.push(lista2);
        obtenerSoloFechas();
      } else {
        var EqGrupoA = listaGrupos[0].Equipos.slice();
        var partidosA = [];
        var tamañoA = EqGrupoA.length;
        while (tamañoA > 0) {
          let random = Math.floor(Math.random() * EqGrupoA.length);
          let eq1 = EqGrupoA[random];
          EqGrupoA.splice(random, 1);
          random = Math.floor(Math.random() * EqGrupoA.length);
          let eq2 = EqGrupoA[random];
          EqGrupoA.splice(random, 1);
          let partido = {
            equipo1: eq1,
            equipo2: eq2,
            lugar: "",
            fecha: "",
            hora: "",
          };
          partidosA.push(partido);
          tamañoA = tamañoA - 2;
        }
        let lista1 = {
          Grupo: "Grupo A " + categoria,
          Partidos: partidosA,
        };
        partidos.push(lista1);
        obtenerSoloFechas();
      }
    } else {
      toast("Generar Fixture", {
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
  };
  const validarDia1 = () => {
    if (fechaDia1 !== undefined) {
      let fechaInicio = fechasLimite[0].INICIOLIGA;
      let fechaFin = fechasLimite[0].FINLIGA;
      if (fechaDia1 >= fechaInicio && fechaDia1 < fechaFin) {
        setvFechaDia1("true");
      } else {
        setvFechaDia1("false");
      }
    }
  };
  const validarDia2 = () => {
    if (fechaDia2 !== undefined) {
      let fechaFin = fechasLimite[0].FINLIGA;
      if (
        fechaDia2 > fechaDia1 &&
        fechaDia2 < fechaFin &&
        vfechaDia1 === "true"
      ) {
        setvFechaDia2("true");
      } else {
        setvFechaDia2("false");
      }
    }
  };
  const validarDia3 = () => {
    if (fechaDia3 !== undefined) {
      let fechaFin = fechasLimite[0].FINLIGA;
      if (
        fechaDia3 > fechaDia2 &&
        fechaDia3 < fechaFin &&
        vfechaDia2 === "true" &&
        vfechaDia1 === "true"
      ) {
        setvFechaDia3("true");
      } else {
        setvFechaDia3("false");
      }
    }
  };
  const validarDia4 = () => {
    if (fechaDia4 !== undefined) {
      let fechaFin = fechasLimite[0].FINLIGA;
      if (
        fechaDia4 > fechaDia3 &&
        fechaDia4 < fechaFin &&
        vfechaDia3 === "true" &&
        vfechaDia2 === "true" &&
        vfechaDia1 === "true"
      ) {
        setvFechaDia4("true");
      } else {
        setvFechaDia4("false");
      }
    }
  };
  const validarHora1 = () => {
    if (hora1 !== undefined) {
      setvHora1("true");
    } else {
      setvHora1("false");
    }
  };
  const validarHora2 = () => {
    if (hora2 !== undefined) {
      setvHora2("true");
    } else {
      setvHora2("false");
    }
  };

  const validarHoraSemiFinal = () => {
    if (horaSemiFinal !== undefined) {
      setvHoraSemifinal("true");
    } else {
      setvHoraSemifinal("false");
    }
  };
  const validarHoraSemiFinal2 = () => {
    if (horaSemiFinal2 !== undefined) {
      setvHoraSemifinal2("true");
    } else {
      setvHoraSemifinal2("false");
    }
  };
  const validarHora3 = () => {
    if (hora3 !== undefined) {
      setvHora3("true");
    } else {
      setvHora3("false");
    }
  };
  const validarHora4 = () => {
    if (hora4 !== undefined) {
      setvHora4("true");
    } else {
      setvHora4("false");
    }
  };
  function esValidoFixture() {
    var valido = true;
    if (vfechaDia1 === "false" || vfechaDia1 === null) {
      valido = false;
      toast("Verificar Fecha Dia 1", {
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
    if (vfechaDia2 === "false" || vfechaDia2 === null) {
      valido = false;
      toast("Verificar Fecha Dia 2", {
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
    if (vfechaDia3 === "false" || vfechaDia3 === null) {
      valido = false;
      toast("Verificar Fecha Dia 3", {
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
    if (vfechaDia4 === "false" || vfechaDia4 === null) {
      valido = false;
      toast("Verificar Fecha Dia 4", {
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
    if (lugar1.valido === "false") {
      valido = false;
      toast("Verificar Lugar 1", {
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
    if (lugar2.valido === "false") {
      valido = false;
      toast("Verificar Lugar 2", {
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
    if (lugar3.valido === "false") {
      valido = false;
      toast("Verificar Lugar 3", {
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
    if (lugar4.valido === "false") {
      valido = false;
      toast("Verificar Lugar 4", {
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
    if (vhora1 === "false" || vhora1 === null) {
      valido = false;
      toast("Verificar Hora 1", {
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
    if (vhora2 === "false" || vhora2 === null) {
      valido = false;
      toast("Verificar Hora 2", {
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
    if (vhora3 === "false" || vhora3 === null) {
      valido = false;
      toast("Verificar Hora 3", {
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
    if (vhora4 === "false" || vhora4 === null) {
      valido = false;
      toast("Verificar Hora 4", {
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
    return valido;
  }
  const asignacionLugarHora = () => {
    setEsperaF("true");
    setInhabilitadoF(true);
    if (esValidoFixture()) {
      let fechas = [fechaDia1, fechaDia2, fechaDia3, fechaDia4];
      let horas = [hora1, hora2, hora3, hora4];
      let lugares = [lugar1.campo, lugar2.campo, lugar3.campo, lugar4.campo];
      let fecha = 0;
      let lugar = 0;
      let hora = 0;
      let cont = 0;
      partidos[0].Partidos.map((dato) => {
        dato.fecha = fechas[fecha];
        dato.lugar = lugares[lugar];
        dato.hora = horas[hora];
        lugar++;
        hora++;
        cont++;
        if (cont > 3) {
          fecha++;
          cont = 0;
        }
        if (lugar > 3) {
          lugar = 0;
        }
        if (hora > 3) {
          hora = 0;
        }
      });
      if (partidos.length > 1) {
        fecha = 2;
        lugar = 1;
        hora = 0;
        cont = 0;
        partidos[1].Partidos.map((dato) => {
          dato.fecha = fechas[fecha];
          dato.lugar = lugares[lugar];
          dato.hora = horas[hora];
          lugar++;
          hora++;
          cont++;
          if (cont > 3) {
            fecha++;
            cont = 0;
          }
          if (lugar > 3) {
            lugar = 0;
          }
          if (hora > 3) {
            hora = 0;
          }
        });
      }
      subirBaseDatos();
    }
  };
  const subirBaseDatos = () => {
    var partidosLleno = [];
    partidos.map((datos) => {
      datos.Partidos.map((eq) => {
        const par = {
          IDCATEGORIA: categoria,
          GRUPO: datos.Grupo,
          EQUIPO1: eq.equipo1,
          EQUIPO2: eq.equipo2,
          GANADOR: "",
          PERDEDOR: "",
          EMPATE: "",
          ANOTACIONESEQ1: "",
          ANOTACIONESEQ2: "",
          LUGAR: eq.lugar,
          HORA: eq.hora,
          DIA: eq.fecha,
        };
        partidosLleno.push(par);
      });
    });
    partidosLleno.map((partido) => {
      axios.post(url + "anadirPartido", partido).then((response) => {
        setEsperaF("false");
        setInhabilitadoF(false);
      });
    });
    toast("Partidos Establecidos", {
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
    setTitulo("ADMINISTRADOR");
    setFixture1(true);
    setFixture2(false);
    setFixture3(false);
    setActivoCL("");
    setActivoE("");
    setActivoA("");
    setActivoI("");
    setActivoCF("");
    setActivoCFSF("");
    listaGrupos.splice(0, listaGrupos.length);
  };

  const [listaSemiFinalA, setListaSemiFinalA] = useState([]);
  const [listaSemiFinalB, setListaSemiFinalB] = useState([]);
  const [categoriaSemiFinal, setCategoriaSemiFinal] = useState("");
  const [obtuvoListaSemifinalA, setObtuvoListaSemiFinalA] = useState(false);
  const [obtuvoListaSemifinalB, setObtuvoListaSemiFinalB] = useState(false);
  const [fechaSemiFinal, setFechaSemiFinal] = useState("");
  const [lugarSemiFinal, setLugarSemiFinal] = useState({
    campo: "",
    valido: null,
  });
  const [horaSemiFinal2, setHoraSemiFinal2] = useState("");
  const [vHoraSemifinal2, setvHoraSemifinal2] = useState(null);
  const [horaSemiFinal, setHoraSemiFinal] = useState("");
  const [vHoraSemifinal, setvHoraSemifinal] = useState(null);
  const obternetEquipoSemiFinal = () => {
    axios.get(url + "semiFinalA/" + categoriaSemiFinal).then((response) => {
      setListaSemiFinalA(ordenar(response.data));

      setObtuvoListaSemiFinalA(true);
    });
    axios.get(url + "semiFinalB/" + categoriaSemiFinal).then((response) => {
      setListaSemiFinalB(ordenar(response.data));
      setObtuvoListaSemiFinalB(true);
    });
  };

  function ordenar(lista) {
    var n, i, k, aux;
    n = lista.length;
    for (k = 1; k < n; k++) {
      for (i = 0; i < n - k; i++) {
        if (lista[i].PUNTOS < lista[i + 1].PUNTOS) {
          aux = lista[i];
          lista[i] = lista[i + 1];
          lista[i + 1] = aux;
        }
      }
    }

    return [lista[0], lista[1]];
  }

  const [partidosSemifinal, setPartidosSemiFinal] = useState([]);

  const generarPartidosSemiFinal = () => {
    if (obtuvoListaSemifinalA && obtuvoListaSemifinalB) {
      axios.get(url + "haySemifinal/" + categoriaSemiFinal).then((response) => {
        if (response.data.length < 1) {
          let partido1 = {
            equipo1: listaSemiFinalA[0].NOMBRE,
            equipo2: listaSemiFinalB[1].NOMBRE,
            lugar: "",
            fecha: "",
            hora: "",
          };
          let partido2 = {
            equipo1: listaSemiFinalA[1].NOMBRE,
            equipo2: listaSemiFinalB[0].NOMBRE,
            lugar: "",
            fecha: "",
            hora: "",
          };
          partidosSemifinal.push(partido1);
          partidosSemifinal.push(partido2);
          setFixtureSF1(false);
          setFixtureSF2(true);
        } else {
          toast("Fixture Ya Generado", {
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
    } else {
      toast("Generar Fixture", {
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
  };

  function validoSemifinal() {
    let valido = true;
    if (fechaSemiFinal === "") {
      valido = false;
      toast("Seleccionar Fecha", {
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
    if (horaSemiFinal === "") {
      valido = false;
      toast("Seleccionar Fecha", {
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
    if (lugarSemiFinal.campo === "") {
      valido = false;
      toast("Introducir Lugar", {
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
    } else {
      if (lugarSemiFinal.valido === "false") {
        valido = false;
        toast("Verificar Lugar", {
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
    return valido;
  }

  const [partidosFinal, setPartidoFinal] = useState([]);

  const subirDatosSemifinal = () => {
    if (validoSemifinal()) {
      setEspera("true");
      setInhabilitado(true);
      const partido1 = {
        IDCATEGORIA: categoriaSemiFinal,
        GRUPO: "Grupo A " + categoriaSemiFinal,
        EQUIPO1: partidosSemifinal[0].equipo1,
        EQUIPO2: partidosSemifinal[0].equipo2,
        GANADOR: "",
        PERDEDOR: "",
        EMPATE: "",
        ANOTACIONESEQ1: "",
        ANOTACIONESEQ2: "",
        LUGAR: lugarSemiFinal.campo,
        HORA: horaSemiFinal,
        DIA: fechaSemiFinal,
        FASE: "semiFinal",
      };
      const partido2 = {
        IDCATEGORIA: categoriaSemiFinal,
        GRUPO: "Grupo B " + categoriaSemiFinal,
        EQUIPO1: partidosSemifinal[1].equipo1,
        EQUIPO2: partidosSemifinal[1].equipo2,
        GANADOR: "",
        PERDEDOR: "",
        EMPATE: "",
        ANOTACIONESEQ1: "",
        ANOTACIONESEQ2: "",
        LUGAR: lugarSemiFinal.campo,
        HORA: horaSemiFinal2,
        DIA: fechaSemiFinal,
        FASE: "semiFinal",
      };
      axios.post(url + "anadirPartido", partido1).then((response) => {
        axios.post(url + "anadirPartido", partido2).then((response) => {
          setEspera("false");
          setInhabilitado(false);
          toast("Partidos Establecidos", {
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
          setTitulo("ADMINISTRADOR");
          setFixture1(true);
          setFixture2(false);
          setFixture3(false);
          setActivoCL("");
          setActivoE("");
          setActivoA("");
          setActivoI("");
          setActivoCF("");
          setActivoCFSF("");
          listaSemiFinalA.splice(0, listaSemiFinalA.length);
          listaSemiFinalB.splice(0, listaSemiFinalB.length);
          setLugarSemiFinal({ campo: "", valido: "" });
          setHoraSemiFinal("");
          setHoraSemiFinal2("");
          setvHoraSemifinal(null);
          setvHoraSemifinal2(null);
        });
      });
    }
  };

  const obtenerEquipoFinal = () => {
    axios.get(url + "obtenerFinal/" + categoriaFinal).then((response) => {
      setListaFinal(response.data);
      setGenerarFixtureF(true);
      setObtuvoListaFinal(true);
      console.log(listaFinal);
    });
  };

  const generarPartidoFinal = () => {
    if (obtuvoListaFinal) {
      axios.get(url + "hayFinal/" + categoriaFinal).then((response) => {
        if (response.data.length < 1) {
          let partido1 = {
            equipo1: listaFinal[0],
            equipo2: listaFinal[1],
            lugar: "",
            fecha: "",
            hora: "",
          };
          let partido2 = {
            equipo1: listaFinal[2],
            equipo2: listaFinal[3],
            lugar: "",
            fecha: "",
            hora: "",
          };
          partidosFinal.push(partido1);
          partidosFinal.push(partido2);
          setFixtureF1(false);
          setFixtureF2(true);
        }else{
          toast("Fixture Ya Generado", {
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
    }else{
      toast("Generar Fixture", {
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
  };

  const subirDatosFinal = () => {
    if (validoSemifinal()) {
      setEspera("true");
      setInhabilitado(true);
      const partido1 = {
        IDCATEGORIA: categoriaFinal,
        GRUPO: "Grupo A " + categoriaFinal,
        EQUIPO1: partidosFinal[0].equipo1,
        EQUIPO2: partidosFinal[0].equipo2,
        GANADOR: "",
        PERDEDOR: "",
        EMPATE: "",
        ANOTACIONESEQ1: "",
        ANOTACIONESEQ2: "",
        LUGAR: lugarSemiFinal.campo,
        HORA: horaSemiFinal,
        DIA: fechaSemiFinal,
        FASE: "Final",
      };
      const partido2 = {
        IDCATEGORIA: categoriaFinal,
        GRUPO: "Grupo B " + categoriaFinal,
        EQUIPO1: partidosFinal[1].equipo1,
        EQUIPO2: partidosFinal[1].equipo2,
        GANADOR: "",
        PERDEDOR: "",
        EMPATE: "",
        ANOTACIONESEQ1: "",
        ANOTACIONESEQ2: "",
        LUGAR: lugarSemiFinal.campo,
        HORA: horaSemiFinal2,
        DIA: fechaSemiFinal,
        FASE: "Final",
      };
      axios.post(url + "anadirPartido", partido1).then((response) => {
        axios.post(url + "anadirPartido", partido2).then((response) => {
          setEspera("false");
          setInhabilitado(false);
          toast("Partidos Establecidos", {
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
          setTitulo("ADMINISTRADOR");
          setFixtureF1(true);
          setFixtureF2(false);
          setActivoCL("");
          setActivoE("");
          setActivoA("");
          setActivoI("");
          setActivoCF("");
          setActivoCFSF("");
          setActivoCFF("");
          listaFinal.splice(0, listaFinal.length);
          setLugarSemiFinal({ campo: "", valido: "" });
          setHoraSemiFinal("");
          setHoraSemiFinal2("");
          setvHoraSemifinal(null);
          setvHoraSemifinal2(null);
        });
      });
    }
  };

  return (
    <ContenedorPrincipal>
      <ContenedorOpciones>
        <Titulo>{titulo}</Titulo>
        <ImagenLogo admin = {"true"}
          src={require("../Imagenes/LogoBlanco.png")}
          onClick={() => {
            setTitulo("ADMINISTRADOR");
            setActivoCL("");
            setActivoE("");
            setActivoA("");
            setActivoI("");
            setFixture1(true);
            setFixture2(false);
            setFixture3(false);
            setGenerarFixture(false);
            partidos.splice(0, partidos.length);
            listaGrupos.splice(0, listaGrupos.length);
          }}
        />
        <ContenedorBotones admin = {"true"}>
          <Botones
            opcion={activoCL}
            onClick={() => {
              setTitulo("CONFIGURAR LIGA");
              setActivoCL("true");
              setActivoE("");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
              obtenerFechas();
              setFixture1(true);
              setFixture2(false);
              setFixture3(false);
              setGenerarFixture(false);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFSF("");
              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            CONFIGURAR LIGA
          </Botones>
          <Botones
            opcion={activoE}
            onClick={() => {
              setTitulo("EQUIPO");
              setActivoCL("");
              setActivoE("true");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
              obtenerMedioPago();
              setFixture1(true);
              setFixture2(false);
              setFixture3(false);
              setGenerarFixture(false);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFSF("");
              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            EQUIPO
          </Botones>
          <Botones
            opcion={activoA}
            onClick={() => {
              setTitulo("ARBITRO");
              setActivoCL("");
              setActivoE("");
              setActivoA("true");
              setActivoI("");
              setActivoCF("");
              obtenerArbitro();
              setFixture1(true);
              setFixture2(false);
              setFixture3(false);
              setGenerarFixture(false);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFSF("");
              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            ARBITRO
          </Botones>
          <Botones
            opcion={activoI}
            onClick={() => {
              setTitulo("INFORMACIÓN");
              setActivoCL("");
              setActivoE("");
              setActivoA("");
              setActivoCF("");
              setActivoI("true");
              setFixture1(true);
              setFixture2(false);
              setFixture3(false);
              setGenerarFixture(false);
              setActivoCFSF("");
              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            INFORMACIÓN
          </Botones>
          <Botones
            opcion={activoCF}
            onClick={() => {
              setTitulo("CREAR FIXTURE");
              setActivoCL("");
              setActivoE("");
              setActivoA("");
              setActivoI("");
              obtenerHabilitado();
              setActivoCF("true");
              setFixture1(true);
              setFixture2(false);
              setFixture3(false);
              setGenerarFixture(false);
              setActivoCFSF("");
              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            CREAR FIXTURE
          </Botones>
          <Botones
            opcion={activoCFSF}
            onClick={() => {
              setTitulo("CREAR SEMI FINAL");
              setActivoCL("");
              setActivoE("");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
              setActivoCFSF("true");
              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            CREAR SEMIFINAL
          </Botones>
          <Botones
            opcion={activoCFF}
            onClick={() => {
              setTitulo("CREAR FINAL");
              setActivoCL("");
              setActivoE("");
              setActivoA("");
              setActivoI("");
              setActivoCF("");
              setActivoCFSF("");
              setActivoCFF("true");

              setFixtureSF1(true);
              setFixtureSF2(false);
              setGenerarFixtureSF(false);
              setCategoriaSemiFinal("");
              setGenerarFixtureSF(false);
              listaSemiFinalA.splice(0, listaSemiFinalA.length);
              listaSemiFinalB.splice(0, listaSemiFinalB.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);

              //setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            CREAR FINAL
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
              setFixture1(true);
              setFixture2(false);
              setFixture3(false);
              setGenerarFixture(false);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
              setActivoCFF("");
              setFixtureF1(true);
              setFixtureF2(false);
              setGenerarFixtureF(false);
              setCategoriaFinal("");
              setGenerarFixtureF(false);
              listaFinal.splice(0, listaFinal.length);
              partidos.splice(0, partidos.length);
              listaGrupos.splice(0, listaGrupos.length);
            }}
          >
            CERRAR SESION
          </Botones>
        </ContenedorBotones>
      </ContenedorOpciones>
      {titulo === "ADMINISTRADOR" && (
        <Imagen src={require("../Imagenes/Logo.png")} />
      )}
      {titulo === "CONFIGURAR LIGA" && (
        <ContenedorConfiguracion>
          <Titulo2>CONFIGURAR LIGA</Titulo2>
          <Nav>
            <NavBotonMenu
              activo={activoF}
              onClick={() => {
                setActivoF("true");
                setActivoL("");
                setActivoP("");
                setOpcionL("1");
              }}
            >
              <Texto>FECHAS DE LIGA</Texto>
            </NavBotonMenu>
            <NavBotonMenu
              activo={activoL}
              onClick={() => {
                setActivoF("");
                setActivoL("true");
                setActivoP("");
                setOpcionL("2");
              }}
            >
              <Texto>CONFIGURACION LIGA</Texto>
            </NavBotonMenu>
            <NavBotonMenu
              activo={activoP}
              onClick={() => {
                setActivoF("");
                setActivoL("");
                setActivoP("true");
                setOpcionL("3");
              }}
            >
              <Texto>SUBIR PAGOS LIGA</Texto>
            </NavBotonMenu>
          </Nav>
          {opcionL === "1" && (
            <>
              {obtuvoFechas && (
                <Detalle>
                  <BoxCampo>
                    <TextBox>Inicio Pre-Inscripcion</TextBox>
                    <InputBox
                      type="date"
                      valido={validarPreInicio}
                      id="fechaPreInicio"
                      onChange={(e) => {
                        setFechaPreInicio(e.target.value);
                      }}
                      onKeyUp={validarFechaPreInicio}
                      onBlur={validarFechaPreInicio}
                    />
                    <IconoValidacion
                      icon={
                        validarPreInicio === "true"
                          ? faCircleCheck
                          : faCircleXmark
                      }
                      valido={validarPreInicio}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Fin Pre-Inscripcion</TextBox>
                    <InputBox
                      type="date"
                      valido={validarPreFin}
                      id="fechaPreFin"
                      onChange={(e) => {
                        setFechaPreFin(e.target.value);
                      }}
                      onKeyUp={validarFechaPreFin}
                      onBlur={validarFechaPreFin}
                    />
                    <IconoValidacion
                      icon={
                        validarPreFin === "true" ? faCircleCheck : faCircleXmark
                      }
                      valido={validarPreFin}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Inicio Inscripcion</TextBox>
                    <InputBox
                      type="date"
                      valido={validarInicio}
                      id="fechaInicio"
                      onChange={(e) => {
                        setFechaInicio(e.target.value);
                      }}
                      onKeyUp={validarFechaInicio}
                      onBlur={validarFechaInicio}
                    />
                    <IconoValidacion
                      icon={
                        validarInicio === "true" ? faCircleCheck : faCircleXmark
                      }
                      valido={validarInicio}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Fin Inscripcion</TextBox>
                    <InputBox
                      type="date"
                      valido={validarFin}
                      id="fechaFin"
                      onChange={(e) => {
                        setFechaFin(e.target.value);
                      }}
                      onKeyUp={validarFechaFin}
                      onBlur={validarFechaFin}
                    />
                    <IconoValidacion
                      icon={
                        validarFin === "true" ? faCircleCheck : faCircleXmark
                      }
                      valido={validarFin}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Inicio Liga</TextBox>
                    <InputBox
                      type="date"
                      valido={validarInicioLiga}
                      id="fechaInicioLiga"
                      onChange={(e) => {
                        setFechaInicioLiga(e.target.value);
                      }}
                      onKeyUp={validarFechaInicioLiga}
                      onBlur={validarFechaInicioLiga}
                    />
                    <IconoValidacion
                      icon={
                        validarInicioLiga === "true"
                          ? faCircleCheck
                          : faCircleXmark
                      }
                      valido={validarInicioLiga}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Fin Liga</TextBox>
                    <InputBox
                      type="date"
                      valido={validarFinLiga}
                      id="fechaFinLiga"
                      onChange={(e) => {
                        setFechaFinLiga(e.target.value);
                      }}
                      onKeyUp={validarFechaFinLiga}
                      onBlur={validarFechaFinLiga}
                    />
                    <IconoValidacion
                      icon={
                        validarFinLiga === "true"
                          ? faCircleCheck
                          : faCircleXmark
                      }
                      valido={validarFinLiga}
                    />
                  </BoxCampo>
                  <BotonAñadir disabled={inhabilitado} onClick={subirFechas}>
                    {espera === "false" && nombreBoton}
                    {espera === "true" && (
                      <Img src={require("../Imagenes/Carga.gif")} />
                    )}
                  </BotonAñadir>
                </Detalle>
              )}
              {!obtuvoFechas && (
                <ImgCarga src={require("../Imagenes/Carga.gif")} />
              )}
            </>
          )}
          {opcionL === "2" && (
            <>
              {obtuvoC && (
                <Detalle>
                  <ContenedorTable ventana="categoria">
                    <Table>
                      <TableHead className={classes.encabezado}>
                        <TableRow>
                          <TableCell>
                            <Letra>Categorias</Letra>
                          </TableCell>
                          <TableCell align="right">
                            <Letra img1={"true"}>
                              <FontAwesomeIcon icon={faTrash} />
                            </Letra>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {listaCategorias.map((datos) => {
                          if (obtuvoC) {
                            return (
                              <TableRow className={classes.bordes}>
                                <TableCell>
                                  <LetraCuerpo>
                                    {datos.NOMBRECATEGORIA}
                                  </LetraCuerpo>
                                </TableCell>
                                <TableCell align="center">
                                  <BotonVer
                                    disabled={inhabilitado}
                                    onClick={() => {
                                      setEspera("true");
                                      setInhabilitado(true);
                                      axios
                                        .delete(
                                          url +
                                            "eliminarCategoria/" +
                                            datos.NOMBRECATEGORIA
                                        )
                                        .then((response) => {
                                          setEspera("false");
                                          setInhabilitado(false);
                                          toast(
                                            "Categoria Eliminada con Exito",
                                            {
                                              icon: "✅",
                                              duration: 3000,
                                              style: {
                                                border: "2px solid #ff7c01",
                                                padding: "10px",
                                                color: "#fff",
                                                background: "#000",
                                                borderRadius: "4%",
                                              },
                                            }
                                          );
                                        });
                                    }}
                                  >
                                    {espera == "false" && (
                                      <FontAwesomeIcon icon={faTrashCan} />
                                    )}
                                    {espera == "true" && (
                                      <Img
                                        src={require("../Imagenes/Carga.gif")}
                                      />
                                    )}{" "}
                                  </BotonVer>
                                </TableCell>
                              </TableRow>
                            );
                          }
                        })}
                      </TableBody>
                    </Table>
                  </ContenedorTable>
                  <BoxCampoBoton text="false">
                    <BotonAñadir
                      onClick={() =>
                        setModalAñadirCategoria(!modalAñadirCategoria)
                      }
                    >
                      Añadir Categoria
                    </BotonAñadir>
                  </BoxCampoBoton>
                  <BoxCampoBoton text="false">
                    <BotonAñadir
                      onClick={() =>
                        setModalAñadirReglamento(!modalAñadirReglamento)
                      }
                    >
                      Añadir Reglamento
                    </BotonAñadir>
                  </BoxCampoBoton>
                </Detalle>
              )}
              {!obtuvoC && <ImgCarga src={require("../Imagenes/Carga.gif")} />}
            </>
          )}
          {opcionL === "3" && (
            <Detalle>
              <BoxCampo>
                <TextBox>Pago Mitad</TextBox>
                <input type="file" name="" id="mitad" hidden onChange={(e)=>setPagoMitad(e.target.files[0])}/>
                <LabelFile for="mitad" id="imagenMitad">
                  Seleccionar Archivo
                </LabelFile>
              </BoxCampo>
              <BoxCampo>
                <TextBox>Pago Completo</TextBox>
                <input type="file" name="" id="completo" hidden onChange={(e)=>setPagoCompleto(e.target.files[0])}/>
                <LabelFile for="completo" id="imagenCompleto">
                  Seleccionar Archivo
                </LabelFile>
              </BoxCampo>
              <BotonAñadir disabled={inhabilitado} onClick={subirPagos}>
                {espera == "false" && "Guardar"}
                {espera == "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </BotonAñadir>
            </Detalle>
          )}
        </ContenedorConfiguracion>
      )}
      {titulo === "EQUIPO" && (
        <ContenedorConfiguracion>
          <Titulo2>EQUIPO</Titulo2>
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
              <Texto>MEDIO PAGO</Texto>
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
              <Texto>EQUIPOS NO HABILITADOS</Texto>
            </NavBotonMenu>
            <NavBotonMenu
              activo={activoRS}
              onClick={() => {
                setActivoNR("");
                setActivoRS("true");
                setActivoR("");
                setActivoMP("");
                setOpcion("3");
              }}
            >
              <Texto>EQUIPOS SIN JUGADORES</Texto>
            </NavBotonMenu>
            <NavBotonMenu
              activo={activoR}
              onClick={() => {
                setActivoNR("");
                setActivoRS("");
                setActivoR("true");
                setActivoMP("");
                setOpcion("4");
              }}
            >
              <Texto>EQUIPOS HABILITADOS</Texto>
            </NavBotonMenu>
          </Nav>
          <ContenedorTable ventana="2">
            {opcion == "1" && (
              <>
                {obtuvoMP && (
                  <Table>
                    <TableHead className={classes.encabezado}>
                      <TableRow>
                        <TableCell>
                          <Letra equipo="true">DELEGADO</Letra>
                        </TableCell>
                        <TableCell>
                          <Letra equipo="true">EQUIPO</Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faTruckFast} />
                          </Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Letra>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaMedioPago.map((datos) => {
                        if (obtuvoMP) {
                          return (
                            <TableRow className={classes.bordes}>
                              <TableCell>
                                <LetraCuerpo equipo="true">
                                  {datos.NOMBREDELEGADO}
                                </LetraCuerpo>
                              </TableCell>
                              <TableCell>
                                <LetraCuerpo equipo="true">
                                  {datos.NOMBREEQUIPO}
                                </LetraCuerpo>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer
                                  onClick={() => {
                                    setModalEquipo(!modalEquipo);
                                    setElEquipo(datos);
                                    settipoEquipo("medio");
                                  }}
                                >
                                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                </BotonVer>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer>
                                  <FontAwesomeIcon icon={faTrashCan} />
                                </BotonVer>
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                )}
                {!obtuvoMP && (
                  <ImgCarga src={require("../Imagenes/Carga.gif")} />
                )}
              </>
            )}
            {opcion == "2" && (
              <>
                {obtuvoPC && (
                  <Table>
                    <TableHead className={classes.encabezado}>
                      <TableRow>
                        <TableCell>
                          <Letra>DELEGADO</Letra>
                        </TableCell>
                        <TableCell>
                          <Letra>EQUIPO</Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                          </Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Letra>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaPagoCompleto.map((datos) => {
                        if (obtuvoPC) {
                          return (
                            <TableRow className={classes.bordes}>
                              <TableCell>
                                <LetraCuerpo>
                                  {datos.NOMBREDELEGADO}
                                </LetraCuerpo>
                              </TableCell>
                              <TableCell>
                                <LetraCuerpo>{datos.NOMBREEQUIPO}</LetraCuerpo>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer
                                  onClick={() => {
                                    setModalEquipo(!modalEquipo);
                                    setElEquipo(datos);
                                    settipoEquipo("completo");
                                  }}
                                >
                                  <FontAwesomeIcon icon={faFileInvoice} />
                                </BotonVer>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer>
                                  <FontAwesomeIcon icon={faTrashCan} />
                                </BotonVer>
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                )}
                {!obtuvoPC && (
                  <ImgCarga src={require("../Imagenes/Carga.gif")} />
                )}
              </>
            )}
            {opcion == "3" && (
              <>
                {obtuvoHS && (
                  <Table>
                    <TableHead className={classes.encabezado}>
                      <TableRow>
                        <TableCell>
                          <Letra>DELEGADO</Letra>
                        </TableCell>
                        <TableCell>
                          <Letra>EQUIPO</Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faCirclePlay} />
                          </Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Letra>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaHabilitadoSin.map((datos) => {
                        if (obtuvoHS) {
                          return (
                            <TableRow className={classes.bordes}>
                              <TableCell>
                                <LetraCuerpo>
                                  {datos.NOMBREDELEGADO}
                                </LetraCuerpo>
                              </TableCell>
                              <TableCell>
                                <LetraCuerpo>{datos.NOMBREEQUIPO}</LetraCuerpo>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer
                                  onClick={() => {
                                    setModalEquipo(!modalEquipo);
                                    setElEquipo(datos);
                                    settipoEquipo("sinJugador");
                                  }}
                                >
                                  <FontAwesomeIcon icon={faCirclePlay} />
                                </BotonVer>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer>
                                  <FontAwesomeIcon icon={faTrashCan} />
                                </BotonVer>
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                )}
                {!obtuvoHS && (
                  <ImgCarga src={require("../Imagenes/Carga.gif")} />
                )}
              </>
            )}
            {opcion == "4" && (
              <>
                {obtuvoH && (
                  <Table>
                    <TableHead className={classes.encabezado}>
                      <TableRow>
                        <TableCell>
                          <Letra>DELEGADO</Letra>
                        </TableCell>
                        <TableCell>
                          <Letra>EQUIPO</Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                          </Letra>
                        </TableCell>
                        <TableCell align="right">
                          <Letra img={"true"}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Letra>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaHabilitado.map((datos) => {
                        if (obtuvoH) {
                          return (
                            <TableRow className={classes.bordes}>
                              <TableCell>
                                <LetraCuerpo>
                                  {datos.NOMBREDELEGADO}
                                </LetraCuerpo>
                              </TableCell>
                              <TableCell>
                                <LetraCuerpo>{datos.NOMBREEQUIPO}</LetraCuerpo>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer
                                  onClick={() => {
                                    setModalEquipo(!modalEquipo);
                                    setElEquipo(datos);
                                    settipoEquipo("habilitado");
                                  }}
                                >
                                  <FontAwesomeIcon icon={faCheckCircle} />
                                </BotonVer>
                              </TableCell>
                              <TableCell align="right">
                                <BotonVer>
                                  <FontAwesomeIcon icon={faTrashCan} />
                                </BotonVer>
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                )}
                {!obtuvoH && (
                  <ImgCarga src={require("../Imagenes/Carga.gif")} />
                )}
              </>
            )}
          </ContenedorTable>
        </ContenedorConfiguracion>
      )}
      {titulo === "ARBITRO" && (
        <ContenedorConfiguracion>
          <Titulo2>ARBITRO</Titulo2>
          <ContenedorTable ventana="1">
            {obtuvoA && (
              <Table>
                <TableHead className={classes.encabezado}>
                  <TableRow>
                    <TableCell>
                      <Letra>NOMBRE DE ARBITRO</Letra>
                    </TableCell>
                    <TableCell align="right">
                      <Letra img2="true">
                        <FontAwesomeIcon icon={faCircleUser} />
                      </Letra>
                    </TableCell>
                    <TableCell align="right">
                      <Letra img2="true">
                        <FontAwesomeIcon icon={faTrash} />
                      </Letra>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaArbitro.map((datos) => {
                    return (
                      <TableRow className={classes.bordes}>
                        <TableCell>
                          <LetraCuerpo name="true">{datos.NOMBRE}</LetraCuerpo>
                        </TableCell>
                        <TableCell align="right">
                          <BotonVer
                            onClick={() => {
                              setModalVerArbitro(!modalVerArbitro);
                              setDatos(datos);
                            }}
                          >
                            <FontAwesomeIcon icon={faUserTie} />
                          </BotonVer>
                        </TableCell>
                        <TableCell align="right">
                          <BotonVer
                            onClick={() => {
                              setEliminarArbitro(!eliminarArbitro);
                              setDatos(datos);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </BotonVer>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
            {!obtuvoA && <ImgCarga src={require("../Imagenes/Carga.gif")} />}
          </ContenedorTable>
          <ContenedorBoton>
            <BotonAñadir
              onClick={() => setModalRegistroArbitro(!modalRegistroArbitro)}
            >
              Añadir Nuevo Arbitro
            </BotonAñadir>
          </ContenedorBoton>
        </ContenedorConfiguracion>
      )}
      {titulo === "INFORMACIÓN" && (
        <ContenedorConfiguracion>
          <Titulo2>INFORMACIÓN</Titulo2>
          <ContenedorTable ventana="1">
            {obtuvoI && (
              <Table>
                <TableHead className={classes.encabezado}>
                  <TableRow>
                    <TableCell>
                      <Letra imagen="true">TITULO DE IMAGEN</Letra>
                    </TableCell>
                    <TableCell align="right">
                      <Letra img="true">
                        <FontAwesomeIcon icon={faCirclePlay} />
                      </Letra>
                    </TableCell>
                    <TableCell align="right">
                      <Letra img="true">
                        <FontAwesomeIcon icon={faTrash} />
                      </Letra>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaInformacion.map((datos) => {
                    return (
                      <TableRow className={classes.bordes}>
                        <TableCell>
                          <LetraCuerpo titulo="true">
                            {datos.TITULO}
                          </LetraCuerpo>
                        </TableCell>
                        <TableCell align="right">
                          <BotonVer 
                            onClick={() => 
                              {setModalVerFoto(!modalVerFoto)
                               setInformacion(datos)
                              }}
                          >
                            <FontAwesomeIcon icon={faImage} />
                          </BotonVer>
                        </TableCell>
                        <TableCell align="right">
                          <BotonVer
                            onClick={() => {
                              setEliminarFoto(!eliminarFoto);
                              setDatos(datos);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </BotonVer>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
            {!obtuvoI && <ImgCarga src={require("../Imagenes/Carga.gif")} />}
          </ContenedorTable>
          <ContenedorBoton>
            <BotonAñadir onClick={() => setModalAñadirInfo(!modalAñadirInfo)}>
              Añadir Informacion
            </BotonAñadir>
          </ContenedorBoton>
        </ContenedorConfiguracion>
      )}
      {titulo === "CREAR FIXTURE" && (
        <ContenedorConfiguracion>
          <Titulo2>FIXTURE</Titulo2>
          {fixture1 && (
            <>
              <Detalle sin={"true"}>
                {obtuvoC && (
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
                      {listaCategorias.map((datos) => {
                        return (
                          <option value={datos.NOMBRECATEGORIA}>
                            {datos.NOMBRECATEGORIA}
                          </option>
                        );
                      })}
                    </SelectNacionalidad>
                    <BotonAñadir
                      onClick={obtenerEquiposCategoria}
                      disabled={inhabilitado}
                    >
                      {espera === "false" && "Generar Fixture"}
                      {espera === "true" && (
                        <Img src={require("../Imagenes/Carga.gif")} />
                      )}
                    </BotonAñadir>
                  </BoxCampo>
                )}
                {!obtuvoC && (
                  <ImgCarga
                    grupo={"false"}
                    src={require("../Imagenes/Carga.gif")}
                  />
                )}
              </Detalle>
              <Detalle grupo={"true"}>
                {obtuvoGrupos && (
                  <>
                    {listaGrupos.map((datos) => {
                      return (
                        <BoxCampo grupo={"true"}>
                          <TextBox grupo={"true"}>{datos.Grupo}</TextBox>
                          {datos.Equipos.map((enco) => {
                            return <TextBox>{enco}</TextBox>;
                          })}
                        </BoxCampo>
                      );
                    })}
                  </>
                )}
                {!obtuvoGrupos && (
                  <ImgCarga
                    grupo={"true"}
                    src={require("../Imagenes/Carga.gif")}
                  />
                )}
              </Detalle>
              {generoFixture && (
                <BotonAñadir disabled={inhabilitado} onClick={generarPartidos}>
                  {espera === "false" && "Siguiente"}
                  {espera === "true" && (
                    <Img src={require("../Imagenes/Carga.gif")} />
                  )}
                </BotonAñadir>
              )}
            </>
          )}
          {fixture2 && (
            <>
              <Detalle grupo={"false"} sin={"true"}>
                {partidos.map((grupo) => {
                  return (
                    <BoxCampo grupo={"true"}>
                      <TextBox grupo={"true"}>{grupo.Grupo}</TextBox>
                      {grupo.Partidos.map((enco) => {
                        return (
                          <TextBox ultimo={"true"}>
                            {enco.equipo1} Vs {enco.equipo2}
                          </TextBox>
                        );
                      })}
                    </BoxCampo>
                  );
                })}
              </Detalle>
              <BotonAñadir
                disabled={inhabilitado}
                onClick={() => {
                  setFixture2(false);
                  setFixture3(true);
                }}
              >
                {espera === "false" && "Siguiente"}
                {espera === "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </BotonAñadir>
            </>
          )}
          {fixture3 && (
            <Detalle fecha={"true"}>
              <BoxCampo lugar={"true"}>
                <TextBox>Fecha Dia 1</TextBox>
                <InputBox
                  type="date"
                  valido={vfechaDia1}
                  id="fechadia1"
                  onChange={(e) => {
                    setFechaDia1(e.target.value);
                  }}
                  onKeyUp={validarDia1}
                  onBlur={validarDia1}
                />
                <IconoValidacion
                  icon={vfechaDia1 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vfechaDia1}
                />
              </BoxCampo>
              <BoxCampo lugar={"true"}>
                <TextBox>Fecha Dia 2</TextBox>
                <InputBox
                  type="date"
                  valido={vfechaDia2}
                  id="fechadia2"
                  onChange={(e) => {
                    setFechaDia2(e.target.value);
                  }}
                  onKeyUp={validarDia2}
                  onBlur={validarDia2}
                />
                <IconoValidacion
                  icon={vfechaDia2 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vfechaDia2}
                />
              </BoxCampo>
              <BoxCampo lugar={"true"}>
                <TextBox>Fecha Dia 3</TextBox>
                <InputBox
                  type="date"
                  valido={vfechaDia3}
                  id="fechadia3"
                  onChange={(e) => {
                    setFechaDia3(e.target.value);
                  }}
                  onKeyUp={validarDia3}
                  onBlur={validarDia3}
                />
                <IconoValidacion
                  icon={vfechaDia3 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vfechaDia3}
                />
              </BoxCampo>
              <BoxCampo lugar={"true"}>
                <TextBox>Fecha Dia 4</TextBox>
                <InputBox
                  type="date"
                  valido={vfechaDia4}
                  id="fechadia4"
                  onChange={(e) => {
                    setFechaDia4(e.target.value);
                  }}
                  onKeyUp={validarDia4}
                  onBlur={validarDia4}
                />
                <IconoValidacion
                  icon={vfechaDia4 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vfechaDia4}
                />
              </BoxCampo>
              <InputValidar
                estado={lugar1}
                cambiarEstado={setLugar1}
                tipo="text"
                label="Lugar 1"
                placeholder="Lugar 1"
                name="lugar1"
                expresionRegular={/^[a-zA-Z0-9-]{6,100}/}
                classe={"lugar"}
              />
              <InputValidar
                estado={lugar2}
                cambiarEstado={setLugar2}
                tipo="text"
                label="Lugar 2"
                placeholder="Lugar 2"
                name="lugar2"
                expresionRegular={/^[a-zA-Z0-9-]{6,100}/}
                classe={"lugar"}
              />
              <InputValidar
                estado={lugar3}
                cambiarEstado={setLugar3}
                tipo="text"
                label="Lugar 3"
                placeholder="Lugar 3"
                name="lugar3"
                expresionRegular={/^[a-zA-Z0-9-]{6,100}/}
                classe={"lugar"}
              />
              <InputValidar
                estado={lugar4}
                cambiarEstado={setLugar4}
                tipo="text"
                label="Lugar 4"
                placeholder="Lugar 4"
                name="lugar4"
                expresionRegular={/^[a-zA-Z0-9-]{6,100}/}
                classe={"lugar"}
              />
              <BoxCampo lugar={"false"}>
                <TextBox>Hora 1</TextBox>
                <InputBox
                  type="time"
                  valido={vhora1}
                  id="hora1"
                  onChange={(e) => {
                    setHora1(e.target.value);
                  }}
                  onKeyUp={validarHora1}
                  onBlur={validarHora1}
                />
                <IconoValidacion
                  icon={vhora1 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vhora1}
                />
              </BoxCampo>
              <BoxCampo lugar={"false"}>
                <TextBox>Hora 2</TextBox>
                <InputBox
                  type="time"
                  valido={vhora2}
                  id="hora2"
                  onChange={(e) => {
                    setHora2(e.target.value);
                  }}
                  onKeyUp={validarHora2}
                  onBlur={validarHora2}
                />
                <IconoValidacion
                  icon={vhora2 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vhora2}
                />
              </BoxCampo>
              <BoxCampo lugar={"false"}>
                <TextBox>Hora 3</TextBox>
                <InputBox
                  type="time"
                  valido={vhora3}
                  id="hora3"
                  onChange={(e) => {
                    setHora3(e.target.value);
                  }}
                  onKeyUp={validarHora3}
                  onBlur={validarHora3}
                />
                <IconoValidacion
                  icon={vhora3 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vhora3}
                />
              </BoxCampo>
              <BoxCampo lugar={"false"}>
                <TextBox>Hora 4</TextBox>
                <InputBox
                  type="time"
                  valido={vhora4}
                  id="hora4"
                  onChange={(e) => {
                    setHora4(e.target.value);
                  }}
                  onKeyUp={validarHora4}
                  onBlur={validarHora4}
                />
                <IconoValidacion
                  icon={vhora4 === "true" ? faCircleCheck : faCircleXmark}
                  valido={vhora4}
                />
              </BoxCampo>
              <BotonAñadir
                disabled={inhabilitadoF}
                onClick={asignacionLugarHora}
              >
                {esperaF === "false" && "Siguiente"}
                {esperaF === "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </BotonAñadir>
            </Detalle>
          )}
        </ContenedorConfiguracion>
      )}
      {titulo === "CREAR SEMI FINAL" && (
        <ContenedorConfiguracion>
          <Titulo2>FIXTURE</Titulo2>
          {fixtureSF1 && (
            <>
              <Detalle sin={"true"}>
                {obtuvoC && (
                  <BoxCampo>
                    <TextBox>Categoria</TextBox>
                    <SelectNacionalidad
                      type="text"
                      placeholder="Categoria"
                      required
                      id="categoria"
                      onChange={(e) => {
                        setCategoriaSemiFinal(e.target.value);
                      }}
                    >
                      <option value="">Categoria</option>
                      {listaCategorias.map((datos) => {
                        return (
                          <option value={datos.NOMBRECATEGORIA}>
                            {datos.NOMBRECATEGORIA}
                          </option>
                        );
                      })}
                    </SelectNacionalidad>
                    <BotonAñadir
                      onClick={obternetEquipoSemiFinal}
                      disabled={inhabilitado}
                    >
                      {espera === "false" && "Generar Fixture"}
                      {espera === "true" && (
                        <Img src={require("../Imagenes/Carga.gif")} />
                      )}
                    </BotonAñadir>
                  </BoxCampo>
                )}
                {!obtuvoC && (
                  <ImgCarga
                    grupo={"false"}
                    src={require("../Imagenes/Carga.gif")}
                  />
                )}
              </Detalle>
              <Detalle grupo={"true"}>
                {obtuvoListaSemifinalA && (
                  <>
                    <BoxCampo grupo={"true"}>
                      <TextBox grupo={"true"}>GRUPO A</TextBox>
                      {listaSemiFinalA.map((datos) => {
                        return <TextBox>{datos.NOMBRE}</TextBox>;
                      })}
                    </BoxCampo>
                  </>
                )}
                {obtuvoListaSemifinalB && (
                  <>
                    <BoxCampo grupo={"true"}>
                      <TextBox grupo={"true"}>GRUPO B</TextBox>
                      {listaSemiFinalB.map((datos) => {
                        return <TextBox>{datos.NOMBRE}</TextBox>;
                      })}
                    </BoxCampo>
                  </>
                )}
                {(!obtuvoListaSemifinalA || !obtuvoListaSemifinalB) && (
                  <ImgCarga
                    grupo={"true"}
                    src={require("../Imagenes/Carga.gif")}
                  />
                )}
              </Detalle>
              {obtuvoListaSemifinalA && obtuvoListaSemifinalB && (
                <BotonAñadir
                  disabled={inhabilitado}
                  onClick={generarPartidosSemiFinal}
                >
                  {espera === "false" && "Siguiente"}
                  {espera === "true" && (
                    <Img src={require("../Imagenes/Carga.gif")} />
                  )}
                </BotonAñadir>
              )}
            </>
          )}
          {fixtureSF2 && (
            <>
              <Detalle grupo={"false"} sin={"true"}>
                <BoxCampo grupo={"true"}>
                  <TextBox grupo={"true"}>GRUPO A</TextBox>
                  <TextBox ultimo={"true"}>
                    {partidosSemifinal[0].equipo1} Vs{" "}
                    {partidosSemifinal[0].equipo2}
                  </TextBox>
                </BoxCampo>
                <BoxCampo grupo={"true"}>
                  <TextBox grupo={"true"}>GRUPO B</TextBox>
                  <TextBox ultimo={"true"}>
                    {partidosSemifinal[1].equipo1} Vs{" "}
                    {partidosSemifinal[1].equipo2}
                  </TextBox>
                </BoxCampo>

                <BoxCampo semiFinal={"true"}>
                  <TextBox>Fecha</TextBox>
                  <InputBox
                    type="date"
                    id="fechaSemiFinal"
                    onChange={(e) => {
                      setFechaSemiFinal(e.target.value);
                    }}
                  />
                </BoxCampo>

                <InputValidar
                  estado={lugarSemiFinal}
                  cambiarEstado={setLugarSemiFinal}
                  tipo="text"
                  label="Lugar"
                  placeholder="Lugar"
                  name="lugar"
                  expresionRegular={/^[a-zA-Z0-9-]{6,100}/}
                  classe={"lugar"}
                />
                <BoxCampo semiFinal={"true"} hora={"true"}>
                  <TextBox hora={"true"}>Hora 1</TextBox>
                  <InputBox
                    type="time"
                    valido={vHoraSemifinal}
                    id="hora2"
                    onChange={(e) => {
                      setHoraSemiFinal(e.target.value);
                    }}
                    onKeyUp={validarHoraSemiFinal}
                    onBlur={validarHoraSemiFinal}
                  />
                  <IconoValidacion
                    icon={
                      vHoraSemifinal === "true" ? faCircleCheck : faCircleXmark
                    }
                    valido={vHoraSemifinal}
                  />
                </BoxCampo>

                <BoxCampo semiFinal={"true"} hora={"true"}>
                  <TextBox hora={"true"}>Hora 2</TextBox>
                  <InputBox
                    type="time"
                    valido={vHoraSemifinal2}
                    id="hora"
                    onChange={(e) => {
                      setHoraSemiFinal2(e.target.value);
                    }}
                    onKeyUp={validarHoraSemiFinal2}
                    onBlur={validarHoraSemiFinal2}
                  />
                  <IconoValidacion
                    icon={
                      vHoraSemifinal2 === "true" ? faCircleCheck : faCircleXmark
                    }
                    valido={vHoraSemifinal2}
                  />
                </BoxCampo>
              </Detalle>
              <BotonAñadir
                disabled={inhabilitado}
                onClick={subirDatosSemifinal}
              >
                {espera === "false" && "Subir Datos"}
                {espera === "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </BotonAñadir>
            </>
          )}
        </ContenedorConfiguracion>
      )}
      {titulo === "CREAR FINAL" && (
        <ContenedorConfiguracion>
          <Titulo2>FIXTURE</Titulo2>
          {fixtureF1 && (
            <>
              <Detalle sin={"true"}>
                {obtuvoC && (
                  <BoxCampo>
                    <TextBox>Categoria</TextBox>
                    <SelectNacionalidad
                      type="text"
                      placeholder="Categoria"
                      required
                      id="categoria"
                      onChange={(e) => {
                        setCategoriaFinal(e.target.value);
                      }}
                    >
                      <option value="">Categoria</option>
                      {listaCategorias.map((datos) => {
                        return (
                          <option value={datos.NOMBRECATEGORIA}>
                            {datos.NOMBRECATEGORIA}
                          </option>
                        );
                      })}
                    </SelectNacionalidad>
                    <BotonAñadir
                      onClick={obtenerEquipoFinal}
                      disabled={inhabilitado}
                    >
                      {espera === "false" && "Generar Fixture"}
                      {espera === "true" && (
                        <Img src={require("../Imagenes/Carga.gif")} />
                      )}
                    </BotonAñadir>
                  </BoxCampo>
                )}
                {!obtuvoC && (
                  <ImgCarga
                    grupo={"false"}
                    src={require("../Imagenes/Carga.gif")}
                  />
                )}
              </Detalle>
              <Detalle grupo={"true"}>
                {generoFixtureF && (
                  <>
                    <BoxCampo grupo={"true"}>
                      <TextBox grupo={"true"}>1º Lugar y 2º Lugar</TextBox>
                      <TextBox>{listaFinal[0]}</TextBox>
                      <TextBox>{listaFinal[1]}</TextBox>
                    </BoxCampo>
                    <BoxCampo grupo={"true"}>
                      <TextBox grupo={"true"}>3º Lugar y 4º Lugar</TextBox>
                      <TextBox>{listaFinal[2]}</TextBox>
                      <TextBox>{listaFinal[3]}</TextBox>
                    </BoxCampo>
                  </>
                )}

                {!obtuvoListaFinal && (
                  <ImgCarga
                    grupo={"true"}
                    src={require("../Imagenes/Carga.gif")}
                  />
                )}
              </Detalle>
              {obtuvoListaFinal && (
                <BotonAñadir
                  disabled={inhabilitado}
                  onClick={generarPartidoFinal}
                >
                  {espera === "false" && "Siguiente"}
                  {espera === "true" && (
                    <Img src={require("../Imagenes/Carga.gif")} />
                  )}
                </BotonAñadir>
              )}
            </>
          )}
          {fixtureF2 && (
            <>
              <Detalle grupo={"false"} sin={"true"}>
                <BoxCampo grupo={"true"}>
                  <TextBox grupo={"true"}>GRUPO A</TextBox>
                  <TextBox ultimo={"true"}>
                    {partidosFinal[0].equipo1} Vs {partidosFinal[0].equipo2}
                  </TextBox>
                </BoxCampo>
                <BoxCampo grupo={"true"}>
                  <TextBox grupo={"true"}>GRUPO B</TextBox>
                  <TextBox ultimo={"true"}>
                    {partidosFinal[1].equipo1} Vs {partidosFinal[1].equipo2}
                  </TextBox>
                </BoxCampo>

                <BoxCampo semiFinal={"true"}>
                  <TextBox>Fecha</TextBox>
                  <InputBox
                    type="date"
                    id="fechaSemiFinal"
                    onChange={(e) => {
                      setFechaSemiFinal(e.target.value);
                    }}
                  />
                </BoxCampo>

                <InputValidar
                  estado={lugarSemiFinal}
                  cambiarEstado={setLugarSemiFinal}
                  tipo="text"
                  label="Lugar"
                  placeholder="Lugar"
                  name="lugar"
                  expresionRegular={/^[a-zA-Z0-9-]{6,100}/}
                  classe={"lugar"}
                />
                <BoxCampo semiFinal={"true"} hora={"true"}>
                  <TextBox hora={"true"}>Hora 1</TextBox>
                  <InputBox
                    type="time"
                    valido={vHoraSemifinal}
                    id="hora2"
                    onChange={(e) => {
                      setHoraSemiFinal(e.target.value);
                    }}
                    onKeyUp={validarHoraSemiFinal}
                    onBlur={validarHoraSemiFinal}
                  />
                  <IconoValidacion
                    icon={
                      vHoraSemifinal === "true" ? faCircleCheck : faCircleXmark
                    }
                    valido={vHoraSemifinal}
                  />
                </BoxCampo>

                <BoxCampo semiFinal={"true"} hora={"true"}>
                  <TextBox hora={"true"}>Hora 2</TextBox>
                  <InputBox
                    type="time"
                    valido={vHoraSemifinal2}
                    id="hora"
                    onChange={(e) => {
                      setHoraSemiFinal2(e.target.value);
                    }}
                    onKeyUp={validarHoraSemiFinal2}
                    onBlur={validarHoraSemiFinal2}
                  />
                  <IconoValidacion
                    icon={
                      vHoraSemifinal2 === "true" ? faCircleCheck : faCircleXmark
                    }
                    valido={vHoraSemifinal2}
                  />
                  
                </BoxCampo>
              </Detalle>
              <BotonAñadir disabled={inhabilitado} onClick={subirDatosFinal}>
                {espera === "false" && "Subir Datos"}
                {espera === "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </BotonAñadir>
            </>
          )}
        </ContenedorConfiguracion>
      )}

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
      <ModalFoto 
        estado={modalVerFoto}
        cambiarEstado={setModalVerFoto}
        informacion={informacion} />
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
  );
}
