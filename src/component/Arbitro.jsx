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
import React, { useState } from "react";
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
  Titulo,
  Titulo2,
  Titulo3,
  VS,
} from "./EstilosArbitro";
import InputValidar from "./InputValidar";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
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

  const classes = styles();

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
              setVentana0(true)
              setVentana1(false)
              setVentana2(false)
              setVentana3(false)
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
                setVentana0(true)
              setVentana1(false)
              setVentana2(false)
              setVentana3(false)
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
                setVentana0(true)
              setVentana1(false)
              setVentana2(false)
              setVentana3(false)
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
                setVentana0(true)
              setVentana1(false)
              setVentana2(false)
              setVentana3(false)
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
                <Detalle tipo={"principal"}>
                  <BoxCampo>
                    <TextBox>Equipo A</TextBox>
                    <SelectEquipo
                      type="text"
                      placeholder="Equipo A"
                      required
                      id="equipoa"
                      onChange={(e) => {
                        /*setCategoria(e.target.value);*/
                      }}
                    >
                      <option value="">Equipo A</option>
                    </SelectEquipo>
                  </BoxCampo>
                  <VS>VS</VS>
                  <BoxCampo>
                    <TextBox>Equipo B</TextBox>
                    <SelectEquipo
                      type="text"
                      placeholder="Equipo B"
                      required
                      id="equipob"
                      onChange={(e) => {
                        /*setCategoria(e.target.value);*/
                      }}
                    >
                      <option value="">Equipo B</option>
                    </SelectEquipo>
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Categoria</TextBox>
                    <SelectEquipo
                      type="text"
                      placeholder="Categoria"
                      required
                      id="categoria"
                      onChange={(e) => {
                        /*setCategoria(e.target.value);*/
                      }}
                    >
                      <option value="">Categoria</option>
                    </SelectEquipo>
                  </BoxCampo>
                </Detalle>
                <Detalle>
                  <BoxCampo>
                    <TextBox>Fecha</TextBox>
                    <InputBox
                      type="date"
                      valido={"validarCreacion"}
                      placeholder="Creacion de Equipo"
                      required
                      id="creacion"
                      onChange={(e) => {
                        /*setCreacion(e.target.value);*/
                      }}
                      onKeyUp={"validar"}
                      onBlur={"validar"}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Hora Inicial</TextBox>
                    <InputBox
                      type="time"
                      valido={"validarCreacion"}
                      placeholder="Creacion de Equipo"
                      required
                      id="creacion"
                      onChange={(e) => {
                        /*setCreacion(e.target.value);*/
                      }}
                      onKeyUp={"validar"}
                      onBlur={"validar"}
                    />
                  </BoxCampo>
                  <BoxCampo>
                    <TextBox>Hora Final</TextBox>
                    <InputBox
                      type="time"
                      valido={"validarCreacion"}
                      placeholder="Creacion de Equipo"
                      required
                      id="creacion"
                      onChange={(e) => {
                        /*setCreacion(e.target.value);*/
                      }}
                      onKeyUp={"validar"}
                      onBlur={"validar"}
                    />
                  </BoxCampo>
                </Detalle>
                <Detalle>
                  <InputValidar
                    estado={"equipo"}
                    cambiarEstado={"setEquipo"}
                    tipo="text"
                    label="1º Juez"
                    placeholder="1º Juez"
                    name="1juez"
                    expresionRegular={""}
                    classe={"arbitro"}
                  />
                  <InputValidar
                    estado={"equipo"}
                    cambiarEstado={"setEquipo"}
                    tipo="text"
                    label="2º Juez"
                    placeholder="2º Juez"
                    name="2juez"
                    expresionRegular={""}
                    classe={"arbitro"}
                  />
                  <BoxCampo>
                    <TextBox>Lugar</TextBox>
                    <SelectEquipo
                      type="text"
                      placeholder="Lugar"
                      required
                      id="lugar"
                      onChange={(e) => {
                        /*setCategoria(e.target.value);*/
                      }}
                    >
                      <option value="">Lugar</option>
                    </SelectEquipo>
                  </BoxCampo>
                  <BoxCampo>
                    <NavBoton
                      right
                      onClick={() => {
                        setVentana1(false);
                        setVentana2(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton>
                  </BoxCampo>
                </Detalle>
              </>
            )}
            {ventana2 && (
              <>
                <Titulo3>Equipo A</Titulo3>
                <Detalle tipo={"principal"}>
                  <InputValidar
                    estado={"equipo"}
                    cambiarEstado={"setEquipo"}
                    tipo="text"
                    label="Entrenador"
                    placeholder="Entrenador"
                    name="entrenador"
                    expresionRegular={""}
                    classe={"arbitro"}
                  />
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
                      left
                      onClick={() => {
                        setVentana1(true);
                        setVentana2(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </NavBoton1>
                    <NavBoton1
                      right
                      onClick={() => {
                        setVentana2(false);
                        setVentana3(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </NavBoton1>
                  </ContenedorBotonesNav>
                </Detalle>
              </>
            )}
            {ventana3 && (
              <>
                <Titulo3>Equipo B</Titulo3>
                <Detalle tipo={"principal"}>
                  <InputValidar
                    estado={"equipo"}
                    cambiarEstado={"setEquipo"}
                    tipo="text"
                    label="Entrenador"
                    placeholder="Entrenador"
                    name="entrenador"
                    expresionRegular={""}
                    classe={"arbitro"}
                  />
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
                      left
                      onClick={() => {
                        setVentana2(true);
                        setVentana3(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </NavBoton1>
                    <NavBoton1
                      right
                      onClick={() => {
                        setVentana3(false);
                        setVentana4(true)
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
                <ContenedorBotonesNav>
                    <NavBoton1
                      left
                      onClick={() => {
                        setVentana3(true);
                        setVentana4(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </NavBoton1>
                    <NavBoton1
                      right
                      onClick={() => {
                        setVentana4(false);
                        setVentana0(true)
                      }}
                    >
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
