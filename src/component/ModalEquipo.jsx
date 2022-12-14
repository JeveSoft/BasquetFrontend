import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import styled, { css } from "styled-components";
import { Img } from "./EstilosAdministrador";
import emailjs from "@emailjs/browser";
import { url, urlImage } from "../services/const";
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContenedorModal = styled.div`
  width: 900px;
  min-height: 610px;
  background: white;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  height: 290px;
  overflow-y: auto;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Titulo = styled.div`
  font-size: 25px;
  font-weight: 1000;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 458%;
    background: linear-gradient(135deg, #000000, #ff7c01);
  }
`;

export const Titulo2 = styled.div`
  font-size: 25px;
  font-weight: 1000;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 102%;
    background: linear-gradient(135deg, #000000, #ff7c01);
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;
  &:hover {
    background: #c9c9c9;
  }
`;
const DetalleUsuario = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SubTitulo = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
`;
export const BoxCampo = styled.div`
  margin: 10px;
  width: 400px;
  position: relative;
  z-index: 90;
`;

export const ContenedorJugadores = styled.div`
  width: 100%;
`;

export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const Text = styled.span`
  font-weight: 500;
  width: 200px;
`;

const ImgLogo = styled.img`
  width: 60px;
  height: 60px;
`;
const ImgComprobante = styled.img`
  width: 200px;
  height: 200px;
`;
const ContenedorBoton = styled.div`
  width: 100%;
  margin-top: 15px;
  position: relative;
`;
const ContenedorBox = styled.div`
  margin: 10px 10px 0px 10px;
  display: flex;
  overflow-y:auto;
  border-bottom: 3px solid black;
`;
const BotonA??adir = styled.button`
  height: 40px;
  color: #ff7c01;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  border: 2px solid #ff7c01;
  border-radius: 5px;
  font-weight: 1000;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff7c01;
    border: 2px solid black;
    color: black;
  }

  ${(props) =>
    props.tipo == "medio" &&
    css`
      width: 250px;
      left: 36%;
    `}
  ${(props) =>
    props.tipo == "completo" &&
    css`
      width: 40%;
      margin: 0px 35px 0px 45px;
    `}
    ${(props) =>
    props.tipo == "sinJugador" &&
    css`
      width: 250px;
      left: 36%;
    `}
    ${(props) =>
    props.tipo == "habilitado" &&
    css`
      width: 40%;
      margin: 0px 35px 0px 45px;
    `}
`;
export default function ModalEquipo({
  estado,
  cambiarEstado,
  datos,
  jugadores,
  tipo,
}) {
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);

  const recordar = () => {
    setEspera("true");
    setInhabilitado(true);
    var templateParams = {
      correo: datos.EMAIL,
      nombre: datos.NOMBREDELEGADO,
      mensaje:
        "Nos complace informar que su registro del equipo '" +
        datos.NOMBREEQUIPO +
        "' no fue completado exitosamente, le invitamos a terminar el proceso de registro.",
    };
    emailjs
      .send(
        "service_486x7hq",
        "template_fmrp7yq",
        templateParams,
        "uygKcXnl0C2x-7MkG"
      )
      .then(
        function (response) {
          setEspera("false");
          setInhabilitado(false);
          cambiarEstado(false);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const recordarJugadores = () => {
    setEspera("true");
    setInhabilitado(true);
    var templateParams = {
      mensaje:
        "Nos complace informar que el equipo '" +
        datos.NOMBREEQUIPO +
        "' no fue habilitado exitosamente, le invitamos a terminar el proceso de habilitacion.",
      correo: datos.EMAIL,
      nombre: datos.NOMBREDELEGADO,
    };
    emailjs
      .send(
        "service_486x7hq",
        "template_fmrp7yq",
        templateParams,
        "uygKcXnl0C2x-7MkG"
      )
      .then(
        function (response) {
          setEspera("false");
          setInhabilitado(false);
          cambiarEstado(false);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>INFORMACION</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            {tipo == "medio" && (
              <DetalleUsuario>
                <BoxCampo>
                  <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                  <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                  <TextBox>CI Delegado = {datos.CI}</TextBox>
                  <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                  <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                  <TextBox>
                    Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}
                  </TextBox>
                  <TextBox>
                    Nacionalidad Delegado = {datos.NACIONALIDAD}
                  </TextBox>
                  <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                </BoxCampo>
                <BoxCampo>
                  <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                  <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                  <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                  <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                  <TextBox>
                    Fecha Creacion Equipo= {datos.FECHACREACION}
                  </TextBox>
                  <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                  <TextBox>
                    Logo Equipo={" "}
                    <ImgLogo
                      src={urlImage + "storage/" + datos.LOGO}
                      alt="foto"
                    ></ImgLogo>
                  </TextBox>
                </BoxCampo>
                <BoxCampo>
                  <TextBox>
                    Comprobante ={" "}
                    <ImgComprobante
                      src={urlImage + "storage/" + datos.COMPROBANTE[0]}
                    ></ImgComprobante>
                  </TextBox>
                </BoxCampo>
                <ContenedorBoton>
                  <BotonA??adir
                    tipo={tipo}
                    disabled={inhabilitado}
                    onClick={recordar}
                  >
                    {espera == "false" && "Recordar Pago Pendiente"}
                    {espera == "true" && (
                      <Img src={require("../Imagenes/Carga.gif")} />
                    )}
                  </BotonA??adir>
                </ContenedorBoton>
              </DetalleUsuario>
            )}
            {tipo === "completo" && (
              <DetalleUsuario>
                <BoxCampo>
                  <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                  <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                  <TextBox>CI Delegado = {datos.CI}</TextBox>
                  {/* <TextBox>Email Delegado = {datos.EMAIL}</TextBox> */}
                  <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                  <TextBox>
                    Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}
                  </TextBox>
                  <TextBox>
                    Nacionalidad Delegado = {datos.NACIONALIDAD}
                  </TextBox>
                  <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                </BoxCampo>
                <BoxCampo>
                  <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                  <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                  <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                  <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                  <TextBox>
                    Fecha Creacion Equipo= {datos.FECHACREACION}
                  </TextBox>
                  <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                  <TextBox>
                    Logo Equipo={" "}
                    <ImgLogo
                      src={urlImage + "storage/" + datos.LOGO}
                      alt="foto"
                    ></ImgLogo>
                  </TextBox>
                </BoxCampo>
                <BoxCampo>
                  <TextBox>
                    Comprobante ={" "}
                    <ImgComprobante
                      src={urlImage + "storage/" + datos.COMPROBANTE[0]}
                    ></ImgComprobante>
                  </TextBox>
                </BoxCampo>
                {datos.COMPROBANTECOMPLETO[0] != "vacio" && (
                  <>
                    <BoxCampo>
                      <TextBox>
                        Comprobante ={" "}
                        <ImgComprobante
                          src={
                            urlImage + "storage/" + datos.COMPROBANTECOMPLETO[0]
                          }
                        ></ImgComprobante>
                      </TextBox>
                    </BoxCampo>
                  </>
                )}
                <ContenedorBoton>
                  <BotonA??adir
                    disabled={inhabilitado}
                    tipo={tipo}
                    onClick={() => {
                      setEspera("true");
                      setInhabilitado(true);
                      axios
                        .put(
                          url + "habilitarSinJugador/" + datos.IDINSCRIPCION,
                          { HABILITADO: "SinJugador" }
                        )
                        .then((response) => {
                          setEspera("false");
                          setInhabilitado(false);
                          toast("Equipo Habilitado Con Exito", {
                            icon: "???",
                            duration: 3000,
                            style: {
                              border: "2px solid #ff7c01",
                              padding: "10px",
                              color: "#fff",
                              background: "#000",
                              borderRadius: "4%",
                            },
                          });
                          cambiarEstado(false);
                        });
                    }}
                  >
                    {espera == "false" && "Habilitar"}
                    {espera == "true" && (
                      <Img src={require("../Imagenes/Carga.gif")} />
                    )}
                  </BotonA??adir>
                  <BotonA??adir
                    tipo={tipo}
                    disabled={inhabilitado}
                    onClick={() => {
                      cambiarEstado(false);
                    }}
                  >
                    Cancelar
                  </BotonA??adir>
                </ContenedorBoton>
              </DetalleUsuario>
            )}
            {tipo == "sinJugador" && (
              <DetalleUsuario>
                <BoxCampo>
                  <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                  <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                  <TextBox>CI Delegado = {datos.CI}</TextBox>
                  <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                  <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                  <TextBox>
                    Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}
                  </TextBox>
                  <TextBox>
                    Nacionalidad Delegado = {datos.NACIONALIDAD}
                  </TextBox>
                  <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                </BoxCampo>
                <BoxCampo>
                  <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                  <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                  <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                  <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                  <TextBox>
                    Fecha Creacion Equipo= {datos.FECHACREACION}
                  </TextBox>
                  <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                  <TextBox>
                    Logo Equipo={" "}
                    <ImgLogo src={urlImage + "storage/" + datos.LOGO}></ImgLogo>
                  </TextBox>
                </BoxCampo>
                <BoxCampo>
                  <TextBox>
                    Comprobante ={" "}
                    <ImgComprobante
                      src={urlImage + "storage/" + datos.COMPROBANTE[0]}
                    ></ImgComprobante>
                  </TextBox>
                </BoxCampo>
                {datos.COMPROBANTECOMPLETO[0] != "vacio" && (
                  <>
                    <BoxCampo>
                      <TextBox>
                        Comprobante ={" "}
                        <ImgComprobante
                          src={
                            urlImage + "storage/" + datos.COMPROBANTECOMPLETO[0]
                          }
                        ></ImgComprobante>
                      </TextBox>
                    </BoxCampo>
                  </>
                )}
                <ContenedorBoton>
                  <BotonA??adir
                    disabled={inhabilitado}
                    tipo={tipo}
                    onClick={recordarJugadores}
                  >
                    {espera == "false" && "Recordar A??adir Jugadores"}
                    {espera == "true" && (
                      <Img src={require("../Imagenes/Carga.gif")} />
                    )}
                  </BotonA??adir>
                </ContenedorBoton>
              </DetalleUsuario>
            )}
            {tipo == "habilitado" && (
              <DetalleUsuario>
                <BoxCampo>
                  <SubTitulo>INFORMACION DELEGADO</SubTitulo>
                  <TextBox>Nombre Delegado = {datos.NOMBREDELEGADO}</TextBox>
                  <TextBox>CI Delegado = {datos.CI}</TextBox>
                  <TextBox>Email Delegado = {datos.EMAIL}</TextBox>
                  <TextBox>Celular Delegado = {datos.CELULAR}</TextBox>
                  <TextBox>
                    Fecha Nacimiento Delegado = {datos.FECHANACIMIENTO}
                  </TextBox>
                  <TextBox>
                    Nacionalidad Delegado = {datos.NACIONALIDAD}
                  </TextBox>
                  <TextBox>Genero Delegado = {datos.GENERO}</TextBox>
                </BoxCampo>
                <BoxCampo>
                  <SubTitulo>INFORMACION EQUIPO</SubTitulo>
                  <TextBox>Nombre Equipo = {datos.NOMBREEQUIPO}</TextBox>
                  <TextBox>Siglas Equipo = {datos.SIGLAS}</TextBox>
                  <TextBox>Cantidad Jugadores = {datos.CANTIDAD}</TextBox>
                  <TextBox>
                    Fecha Creacion Equipo= {datos.FECHACREACION}
                  </TextBox>
                  <TextBox>Categoria Equipo= {datos.CATEGORIA}</TextBox>
                  <TextBox>
                    Logo Equipo={" "}
                    <ImgLogo src={urlImage + "storage/" + datos.LOGO}></ImgLogo>
                  </TextBox>
                </BoxCampo>
                <BoxCampo>
                  <TextBox>
                    Comprobante ={" "}
                    <ImgComprobante
                      src={urlImage + "storage/" + datos.COMPROBANTE[0]}
                    ></ImgComprobante>
                  </TextBox>
                </BoxCampo>

                {datos.COMPROBANTECOMPLETO[0] != "vacio" && (
                  <>
                    <BoxCampo>
                      <TextBox>
                        Comprobante ={" "}
                        <ImgComprobante
                          src={
                            urlImage + "storage/" + datos.COMPROBANTECOMPLETO[0]
                          }
                        ></ImgComprobante>
                      </TextBox>
                    </BoxCampo>
                  </>
                )}
                <ContenedorJugadores>
                  <Titulo2>JUGADORES</Titulo2>
                </ContenedorJugadores>
                <ContenedorBox>
                  {/* <Text>ID</Text> */}
                  <Text>Nombre Jugador</Text>
                  <Text>CI</Text>
                  <Text>Fecha Nacimiento</Text>
                  {/* <Text>Email</Text> */}
                  <Text>Celular</Text>
                  <Text>Rol</Text>
                  <Text>FotoCarnet</Text>
                </ContenedorBox>
                {jugadores.map((jugador) => {
                  return (
                    <ContenedorBox>
                      {/* <Text>{jugador.IDJUGADOR}</Text> */}
                      <Text>{jugador.NOMBREJUGADOR}</Text>
                      <Text>{jugador.CIJUGADOR}</Text>
                      <Text>{jugador.FECHANACIMIENTO}</Text>
                      {/* <Text>{jugador.EMAIL}</Text> */}
                      <Text>{jugador.CELULAR}</Text>
                      <Text>{jugador.ROL}</Text>
                      <a target="_blank" href={urlImage+"storage/"+jugador.FOTOCIJUGADOR}>Ver foto Ci</a>
                    </ContenedorBox>
                  );
                })}

                <ContenedorBoton>
                  <BotonA??adir
                    disabled={inhabilitado}
                    tipo={tipo}
                    onClick={() => {
                      setEspera("true");
                      setInhabilitado(true);
                      axios
                        .put(
                          url + "habilitarSinJugador/" + datos.IDINSCRIPCION,
                          { HABILITADO: "HabilitadoCompleto" }
                        )
                        .then((response) => {
                          setEspera("false");
                          setInhabilitado(false);
                          toast("Equipo Habilitado Con Exito", {
                            icon: "???",
                            duration: 3000,
                            style: {
                              border: "2px solid #ff7c01",
                              padding: "10px",
                              color: "#fff",
                              background: "#000",
                              borderRadius: "4%",
                            },
                          });
                          cambiarEstado(false);
                        });
                    }}
                  >
                    {espera == "false" && "Habilitar"}
                    {espera == "true" && (
                      <Img src={require("../Imagenes/Carga.gif")} />
                    )}
                  </BotonA??adir>
                  <BotonA??adir
                    tipo={tipo}
                    disabled={inhabilitado}
                    onClick={() => {
                      cambiarEstado(false);
                    }}
                  >
                    Cancelar
                  </BotonA??adir>
                </ContenedorBoton>
              </DetalleUsuario>
            )}
          </ContenedorModal>
        </Overlay>
      )}
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
