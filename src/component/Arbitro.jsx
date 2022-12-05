import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
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
  ContenedorTable,
  Detalle,
  Imagen,
  ImagenLogo,
  InputBox,
  Letra,
  LetraCuerpo,
  NavBoton,
  NavBoton1,
  SelectEquipo,
  TextBox,
  TextBoxEq,
  Titulo,
  Titulo2,
  Titulo3,
  VS,
} from "./EstilosArbitro";
import InputValidar from "./InputValidar";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import toast from "react-hot-toast";
import { Img } from "./EstiloRegistro";
const styles = makeStyles({
  encabezado: {
    padding: "0 30px",
    boxShadow: "0 2px 3px 2px #000000",
  },
  bordes: {
    boxShadow: "0 2px 3px 2px #ff7c01",
  },
  celdas: {
    background: "red",
  },
});

export default function Arbitro() {
  const [titulo, setTitulo] = useState("ARBITRO");
  const [activoPJ, setActivoPJ] = useState("");
  const [activoP, setActivoP] = useState("");
  const [activoCS, setActivoCS] = useState("");
  const [modal, setModal] = useState(false);
  const [ventana0, setVentana0] = useState(true);
  const [ventana1, setVentana1] = useState(false);
  const [ventana2, setVentana2] = useState(false);
  const [ventana3, setVentana3] = useState(false);
  const [ventana4, setVentana4] = useState(false);
  const url = "http://127.0.0.1:8000/";
  const [listaCategoria, setListaCategoria] = useState([]);
  const [obtuvoCategoria, setObtuvoCategoria] = useState(false);
  const classes = styles();
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [equipo1, setEquipo1] = useState("");
  const [equipo2, setEquipo2] = useState("");
  const [lugar, setLugar] = useState("");
  const [juez1, setJuez1] = useState({ campo: "", valido: null });
  const [juez2, setJuez2] = useState({ campo: "", valido: null });
  const [partidoValido, setPartidoValido] = useState(false);
  const [entrenador1, setEntrenador1] = useState("");
  const [entrenador2, setEntrenador2] = useState("");
  const [idPartido, setIdPartido] = useState("");
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [anotaciones1, setAnotaciones1] = useState({ campo: "", valido: null });
  const [anotaciones2, setAnotaciones2] = useState({ campo: "", valido: null });

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
          setIdPartido(response.data[0].IDPARTIDO)
          setEquipo1(response.data[0].EQUIPO1);
          setEquipo2(response.data[0].EQUIPO2);
          setLugar(response.data[0].LUGAR);
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
    if (juez1.campo === "") {
      valido = false;
      toast("Ingesar Juez 1", {
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
      if (juez1.valido === "false") {
        valido = false;
        toast("Nombre Juez 1 Invalido", {
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
    if (juez2.campo === "") {
      valido = false;
      toast("Ingesar Juez 2", {
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
      if (juez2.valido === "false") {
        valido = false;
        toast("Nombre Juez 2 Invalido", {
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

  const irVentana3 = () => {
    setEspera("true");
    setInhabilitado(true);
    axios.get(url + "obtenerEntrenador/" + equipo2).then((response) => {
      setEntrenador2(response.data);
      setVentana3(true);
      setVentana2(false);
      setEspera("false");
      setInhabilitado(false);
    });
  };

  const irVentana2 = () => {
    if (esValido()) {
      setEspera("true");
      setInhabilitado(true);
      axios.get(url + "obtenerEntrenador/" + equipo1).then((response) => {
        setEntrenador1(response.data);
        setVentana1(false);
        setVentana2(true);
        setEspera("false");
        setInhabilitado(false);
      });
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
      var datos = {
        IDCATEGORIA:categoria,
        EQUIPO1: equipo1,
        EQUIPO2: equipo2,
        GANADOR: parseInt(anotaciones1.campo)  > parseInt(anotaciones2.campo)?equipo1:equipo2,
        PERDEDOR: parseInt(anotaciones1.campo)  > parseInt(anotaciones2.campo)?equipo2:equipo1,
        EMPATE: anotaciones1.campo === anotaciones2.campo ? "empate" : "",
        ANOTACIONESEQ1: anotaciones1.campo,
        ANOTACIONESEQ2: anotaciones2.campo,
      };
      axios.put(url + "actualizarPartido/"+idPartido, datos).then((response) => {
        setCategoria("");
        setFecha("");
        setHora("");
        setEquipo1("");
        setEquipo2("");
        setLugar("");
        setAnotaciones1("");
        setJuez1("");
        setAnotaciones2("");
        setJuez2("");
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
    }
  };

  useEffect(function () {
    if (ventana0){
      setCategoria("")
      setFecha("")
      setHora("")
    }
    if (categoria != "" && fecha != "" && hora != "") {
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
              setActivoP("");
              setActivoCS("");
              setVentana0(true);
              setVentana1(false);
              setVentana2(false);
              setVentana3(false);
            }}
          />
          <ContenedorBotones>
            <Botones
              opcion={activoPJ}
              onClick={() => {
                setTitulo("PLANILLA DE JUEGO");
                setActivoPJ("true");
                setActivoP("");
                setActivoCS("");
                setVentana0(true);
                setVentana1(false);
                setVentana2(false);
                setVentana3(false);
              }}
            >
              PLANILLA DE JUEGO
            </Botones>
            <Botones
              opcion={activoP}
              onClick={() => {
                setTitulo("PERFIL");
                setActivoPJ("");
                setActivoP("true");
                setActivoCS("");
                setVentana0(true);
                setVentana1(false);
                setVentana2(false);
                setVentana3(false);
              }}
            >
              PERFIL
            </Botones>
            <Botones
              opcion={activoCS}
              onClick={() => {
                setTitulo("ARBITRO");
                setActivoPJ("");
                setActivoP("");
                setActivoCS("true");
                setModal(!modal);
                setVentana0(true);
                setVentana1(false);
                setVentana2(false);
                setVentana3(false);
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
                      <InputValidar
                        estado={juez1}
                        cambiarEstado={setJuez1}
                        tipo="text"
                        label="1º Juez"
                        placeholder="1º Juez"
                        name="1juez"
                        expresionRegular={/^[a-zA-ZÀ-ÿ\s]{3,40}$/}
                        classe={"arbitro"}
                      />

                      <InputValidar
                        estado={juez2}
                        cambiarEstado={setJuez2}
                        tipo="text"
                        label="2º Juez"
                        placeholder="2º Juez"
                        name="2juez"
                        expresionRegular={/^[a-zA-ZÀ-ÿ\s]{3,40}$/}
                        classe={"arbitro"}
                      />

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
            {ventana2 && (
              <>
                <Titulo3>Equipo: {equipo1}</Titulo3>
                <Detalle tipo={"principal"}>
                  <BoxCampo>
                    <TextBox>Entrenador</TextBox>
                    <TextBoxEq>{entrenador1}</TextBoxEq>
                  </BoxCampo>
                  <InputValidar
                    estado={"equipo"}
                    cambiarEstado={"setEquipo"}
                    tipo="text"
                    label="Asistente"
                    placeholder="Asistente"
                    name="asistente"
                    expresionRegular={""}
                    classe={"arbitro"}
                  />
                  <ContenedorTable>
                    <Table>
                      <TableHead className={classes.encabezado}>
                        <TableRow>
                          <TableCell>
                            <Letra>Nombre Jugador</Letra>
                          </TableCell>
                          <TableCell align="center">
                            <Letra>Nº</Letra>
                          </TableCell>
                          <TableCell align="center">
                            <Letra>E/S</Letra>
                          </TableCell>
                          <TableCell align="center">
                            <Letra>Faltas</Letra>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.bordes}>
                        <TableRow>
                          <TableCell>
                            <LetraCuerpo>1</LetraCuerpo>
                          </TableCell>
                          <TableCell>
                            <LetraCuerpo centro={"true"}>1</LetraCuerpo>
                          </TableCell>
                          <TableCell>
                            <LetraCuerpo centro={"true"}>1</LetraCuerpo>
                          </TableCell>
                          <TableCell>
                            <LetraCuerpo centro={"true"}>1</LetraCuerpo>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </ContenedorTable>
                  <ContenedorBotonesNav>
                    <NavBoton1
                      disabled={inhabilitado}
                      left
                      onClick={() => {
                        setVentana2(false);
                        setVentana1(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </NavBoton1>
                    <NavBoton1
                      disabled={inhabilitado}
                      right
                      onClick={irVentana3}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton1>
                  </ContenedorBotonesNav>
                </Detalle>
              </>
            )}
            {ventana3 && (
              <>
                <Titulo3>Equipo: {equipo2}</Titulo3>
                <Detalle tipo={"principal"}>
                  <BoxCampo>
                    <TextBox>Entrenador</TextBox>
                    <TextBoxEq>{entrenador2}</TextBoxEq>
                  </BoxCampo>
                  <InputValidar
                    estado={"equipo"}
                    cambiarEstado={"setEquipo"}
                    tipo="text"
                    label="Asistente"
                    placeholder="Asistente"
                    name="asistente"
                    expresionRegular={""}
                    classe={"arbitro"}
                  />
                  <ContenedorTable>
                    <Table>
                      <TableHead className={classes.encabezado}>
                        <TableRow>
                          <TableCell>
                            <Letra>Nombre Jugador</Letra>
                          </TableCell>
                          <TableCell align="center">
                            <Letra>Nº</Letra>
                          </TableCell>
                          <TableCell align="center">
                            <Letra>E/S</Letra>
                          </TableCell>
                          <TableCell align="center">
                            <Letra>Faltas</Letra>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.bordes}>
                        <TableRow>
                          <TableCell>
                            <LetraCuerpo>1</LetraCuerpo>
                          </TableCell>
                          <TableCell>
                            <LetraCuerpo centro={"true"}>1</LetraCuerpo>
                          </TableCell>
                          <TableCell>
                            <LetraCuerpo centro={"true"}>1</LetraCuerpo>
                          </TableCell>
                          <TableCell>
                            <LetraCuerpo centro={"true"}>1</LetraCuerpo>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </ContenedorTable>
                  <ContenedorBotonesNav>
                    <NavBoton1
                      disabled={inhabilitado}
                      left
                      onClick={() => {
                        setVentana2(true);
                        setVentana3(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </NavBoton1>
                    <NavBoton1
                      disabled={inhabilitado}
                      right
                      onClick={() => {
                        setVentana3(false);
                        setVentana4(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton1>
                  </ContenedorBotonesNav>
                </Detalle>
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
                      setVentana3(true);
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
        {titulo === "PERFIL" && (
          <ContenedorConfiguracion>
            <Titulo2>PERFIL</Titulo2>
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
