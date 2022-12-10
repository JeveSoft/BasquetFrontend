import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  BotonAnotar,
  Botones,
  BoxCampo,
  ContenedorBotones,
  ContenedorBotonesNav,
  ContenedorConfiguracion,
  ContenedorMedio,
  ContenedorOpciones,
  ContenedorPrincipal,
  Detalle,
  Imagen,
  ImagenLogo,
  InputBox,
  NavBoton,
  NavBoton1,
  SelectEquipo,
  TextBox,
  TextBoxEq,
  Titulo,
  Titulo2,
  VS,
} from "./EstilosArbitro";
import InputValidar from "./InputValidar";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import toast from "react-hot-toast";
import { Img } from "./EstiloRegistro";

export default function Arbitro() {
  const [titulo, setTitulo] = useState("ARBITRO");
  const [activoPJ, setActivoPJ] = useState("");
  const [activoCS, setActivoCS] = useState("");
  const [modal, setModal] = useState(false);
  const [ventana0, setVentana0] = useState(true);
  const [ventana1, setVentana1] = useState(false);
  const [ventana4, setVentana4] = useState(false);
  const url = "http://127.0.0.1:8000/";
  const [listaCategoria, setListaCategoria] = useState([]);
  const [obtuvoCategoria, setObtuvoCategoria] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [equipo1, setEquipo1] = useState("");
  const [equipo2, setEquipo2] = useState("");
  const [lugar, setLugar] = useState("");
  const [partidoValido, setPartidoValido] = useState(false);
  const [idPartido, setIdPartido] = useState("");
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [anotaciones1, setAnotaciones1] = useState({ campo: "", valido: null });
  const [anotaciones2, setAnotaciones2] = useState({ campo: "", valido: null });
  const [llenado, setLlenado] = useState(false);

  const obtenerCategoria = () => {
    axios.get(url + "nombreCategorias").then((response) => {
      setListaCategoria(response.data);
      setObtuvoCategoria(true);
    });
  };

  const obtenerPartido = () => {
    axios
      .get(
        url + "obtenerPartidoEspecifico/" + categoria + "*" + fecha + "*" + hora
      )
      .then((response) => {
        if (response.data.length > 0) {
          setIdPartido(response.data[0].IDPARTIDO);
          setEquipo1(response.data[0].EQUIPO1);
          setEquipo2(response.data[0].EQUIPO2);
          setLugar(response.data[0].LUGAR);
          setLlenado(
            response.data[0].GANADOR === null || response.data[0].GANADOR === ""
              ? false
              : true
          );
          setPartidoValido(true);
        } else {
          setPartidoValido(false);
          setEquipo1("");
          setEquipo2("");
          setLugar("");
        }
      });
  };

  function esValido() {
    let valido = true;

    if (categoria === "") {
      valido = false;
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
    }
    if (fecha === "") {
      valido = false;
      toast("Ingesar Fecha", {
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
    if (hora === "") {
      valido = false;
      toast("Ingesar Hora", {
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
    if (!partidoValido) {
      valido = false;
      toast("Partido Invalido Revisar Categoria Fecha y Hora", {
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

  const irVentana2 = () => {
    if (esValido()) {
      if (!llenado) {
        setEspera("true");
        setInhabilitado(true);
        setVentana1(false);
        setVentana4(true);
        setEspera("false");
        setInhabilitado(false);
      } else {
        toast("Partido Ya Registrado", {
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
  };

  function esValidoV4() {
    var valido = true;
    if (anotaciones1.campo === "") {
      valido = false;
      toast("Ingesar Anotaciones Equipo 1", {
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
      if (anotaciones1.valido === "false") {
        valido = false;
        toast("Anotaciones del Equipo 1 Invalido", {
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
    if (anotaciones2.campo === "") {
      valido = false;
      toast("Ingesar Anotaciones Equipo 2", {
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
      if (anotaciones2.valido === "false") {
        valido = false;
        toast("Anotaciones del Equipo 2 Invalido", {
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

  const subirDatos = () => {
    if (esValidoV4()) {
      axios.get(url + "obtenerPuntos/" + equipo1).then((response) => {
        var puntos1 = parseInt(response.data);
        axios.get(url + "obtenerPuntos/" + equipo2).then((response) => {
          var puntos2 = parseInt(response.data);
          let ganador = "";
          let perdedor = "";
          let empate = "";
          if (parseInt(anotaciones1.campo) > parseInt(anotaciones2.campo)) {
            ganador = equipo1;
            perdedor = equipo2;
          } else {
            if (parseInt(anotaciones2.campo) > parseInt(anotaciones1.campo)) {
              ganador = equipo2;
              perdedor = equipo1;
            } else {
              empate = "empate";
            }
          }
          var datos = {
            IDCATEGORIA: categoria,
            EQUIPO1: equipo1,
            EQUIPO2: equipo2,
            GANADOR: ganador,
            PERDEDOR: perdedor,
            EMPATE: empate,
            ANOTACIONESEQ1: anotaciones1.campo,
            ANOTACIONESEQ2: anotaciones2.campo,
          };

          let puntos = 0;
          let puntosEm = 0;
          if (equipo1 === ganador) {
            puntos = puntos1 + 50 + parseInt(anotaciones1.campo);
            noEmpate(ganador, datos, puntos);
          } else {
            if (equipo2 === ganador) {
              puntos = puntos2 + 50 + parseInt(anotaciones2.campo);
              noEmpate(ganador, datos, puntos);
            } else {
              puntos = puntos1 + 25 + parseInt(anotaciones1.campo);
              puntosEm = puntos2 + 25 + parseInt(anotaciones2.campo);
              siEmpate(datos, puntos, puntosEm);
            }
          }
        });
      });
    }
  };

  const siEmpate = (datos, puntos, puntosEm) => {
    axios
      .put(url + "actualizarPartido/" + idPartido, datos)
      .then((response) => {
        axios
          .put(url + "subirPuntos/" + equipo1, { PUNTOS: puntos })
          .then((respo) => {
            axios
              .put(url + "subirPuntos/" + equipo2, { PUNTOS: puntosEm })
              .then((respon) => {
                setCategoria("");
                setFecha("");
                setHora("");
                setEquipo1("");
                setEquipo2("");
                setLugar("");
                setAnotaciones1("");
                setAnotaciones2("");
                toast("Partido Registrado", {
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
                setVentana4(false);
                setVentana0(true);
              });
          });
      });
  };

  const noEmpate = (ganador, datos, puntos) => {
    axios
      .put(url + "actualizarPartido/" + idPartido, datos)
      .then((response) => {
        axios
          .put(url + "subirPuntos/" + ganador, { PUNTOS: puntos })
          .then((res) => {
            setCategoria("");
            setFecha("");
            setHora("");
            setEquipo1("");
            setEquipo2("");
            setLugar("");
            setAnotaciones1("");
            setAnotaciones2("");
            toast("Partido Registrado", {
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
            setVentana4(false);
            setVentana0(true);
          });
      });
  };


  useEffect(function () {
    if (ventana0) {
      setCategoria("");
      setFecha("");
      setHora("");
      setEquipo1("");
      setEquipo2("");
      setLugar("");
    }
    if (categoria !== "" && fecha != "" && hora != "") {
      obtenerPartido();
      if (ventana1) {
        document.getElementById("categorias").value = categoria;
        document.getElementById("fecha").value = fecha;
        document.getElementById("hora").value = hora;
      }
    }
  });

  return (
    <>
      <ContenedorPrincipal>
        <ContenedorOpciones>
          <Titulo>{titulo}</Titulo>
          <ImagenLogo
            src={require("../Imagenes/LogoBlanco.png")}
            onClick={() => {
              setTitulo("ARBITRO");
              setActivoPJ("");
              setActivoCS("");
              setVentana0(true);
              setVentana1(false);
              
            }}
          />
          <ContenedorBotones>
            <Botones
              opcion={activoPJ}
              onClick={() => {
                setTitulo("PLANILLA DE JUEGO");
                setActivoPJ("true");
                setActivoCS("");
                setVentana0(true);
                setVentana1(false);
                
              }}
            >
              PLANILLA DE JUEGO
            </Botones>
            <Botones
              opcion={activoCS}
              onClick={() => {
                setTitulo("ARBITRO");
                setActivoPJ("");
                setActivoCS("true");
                setModal(!modal);
                setVentana0(true);
                setVentana1(false);
              }}
            >
              CERRAR SESION
            </Botones>
          </ContenedorBotones>
        </ContenedorOpciones>
        {titulo === "ARBITRO" && (
          <Imagen src={require("../Imagenes/Logo.png")} />
        )}
        {titulo === "PLANILLA DE JUEGO" && (
          <ContenedorConfiguracion>
            <Titulo2>PLANILLA DE JUEGO</Titulo2>
            {ventana0 && (
              <ContenedorMedio>
                <BotonAnotar
                  onClick={() => {
                    obtenerCategoria();
                    setVentana0(false);
                    setVentana1(true);
                  }}
                >
                  ANOTAR DATOS
                </BotonAnotar>
              </ContenedorMedio>
            )}
            {ventana1 && (
              <>
                {obtuvoCategoria && (
                  <>
                    <Detalle tipo={"principal"}>
                      <BoxCampo>
                        <TextBox>Categoria</TextBox>
                        <SelectEquipo
                          type="text"
                          placeholder="Categoria"
                          id="categorias"
                          onChange={(e) => {
                            setCategoria(e.target.value);
                          }}
                        >
                          <option value="">Categoria</option>
                          {listaCategoria.map((datos) => {
                            return <option value={datos}>{datos}</option>;
                          })}
                        </SelectEquipo>
                      </BoxCampo>
                      <BoxCampo>
                        <TextBox>Fecha</TextBox>
                        <InputBox
                          type="date"
                          valido={"validarCreacion"}
                          placeholder="Creacion de Equipo"
                          required
                          id="fecha"
                          onChange={(e) => {
                            setFecha(e.target.value);
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo>
                        <TextBox>Hora Inicial</TextBox>
                        <InputBox
                          type="time"
                          valido={"validarCreacion"}
                          placeholder="Creacion de Equipo"
                          required
                          id="hora"
                          onChange={(e) => {
                            setHora(e.target.value);
                          }}
                        />
                      </BoxCampo>

                      <BoxCampo>
                        <TextBox>Equipo A</TextBox>
                        <TextBoxEq>{equipo1}</TextBoxEq>
                      </BoxCampo>
                      <VS>VS</VS>
                      <BoxCampo>
                        <TextBox>Equipo B</TextBox>
                        <TextBoxEq>{equipo2}</TextBoxEq>
                      </BoxCampo>
                      <BoxCampo>
                        <TextBox>Lugar</TextBox>
                        <TextBoxEq>{lugar}</TextBoxEq>
                      </BoxCampo>
                    </Detalle>
                    <Detalle>
                      <BoxCampo>
                        <NavBoton
                          disabled={inhabilitado}
                          right
                          onClick={irVentana2}
                        >
                          {espera === "false" && (
                            <FontAwesomeIcon icon={faChevronRight} />
                          )}
                          {espera === "true" && (
                            <Img src={require("../Imagenes/Carga.gif")} />
                          )}
                        </NavBoton>
                      </BoxCampo>
                    </Detalle>
                  </>
                )}
              </>
            )}

            {ventana4 && (
              <Detalle tipo={"principal"}>
                <BoxCampo>
                  <TextBox>Equipo 1</TextBox>
                  <TextBoxEq>{equipo1}</TextBoxEq>
                </BoxCampo>
                <BoxCampo>
                  <TextBox>Equipo 2</TextBox>
                  <TextBoxEq>{equipo2}</TextBoxEq>
                </BoxCampo>
                <InputValidar
                  estado={anotaciones1}
                  cambiarEstado={setAnotaciones1}
                  tipo="number"
                  label="Anotaciones Equipo 1"
                  placeholder="Anotaciones Equipo 1"
                  name="anotaciones1"
                  expresionRegular={""}
                  classe={"arbitro"}
                />
                <InputValidar
                  estado={anotaciones2}
                  cambiarEstado={setAnotaciones2}
                  tipo="number"
                  label="Anotaciones Equipo 2"
                  placeholder="Anotaciones Equipo 2"
                  name="anotaciones2"
                  expresionRegular={""}
                  classe={"arbitro"}
                />

                <ContenedorBotonesNav ultimo={"true"}>
                  <NavBoton1
                    disabled={inhabilitado}
                    left
                    onClick={() => {
                      setVentana1(true);
                      setVentana4(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </NavBoton1>
                  <NavBoton1 disabled={inhabilitado} right onClick={subirDatos}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </NavBoton1>
                </ContenedorBotonesNav>
              </Detalle>
            )}
          </ContenedorConfiguracion>
        )}
        <Modal
          estado={modal}
          cambiarEstado={setModal}
          mensaje={"¿Seguro de cerrar sesion?"}
        />
      </ContenedorPrincipal>
    </>
  );
}
