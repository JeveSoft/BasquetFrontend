import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

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
  width: 350px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 25px;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
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
    width: 150%;
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
export const DetalleUsuario = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
export const InputBox = styled.input`
  margin-bottom: 10px;
  height: 40px;
  width: 65%;
  outline: none;
  border-radius: 5px;
  border: 3px solid #ff7c01;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;

  &:focus {
    border-color: black;
  }
  &:hover {
    border-color: black;
  }
`;
export const Logo = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 200px;
  width: 200px;
  background: #ff7c01;
  border-radius: 50%;
  color: black;
  justify-content: center;
  svg {
    margin-top: 10px;
    width: 100%;
    height: 80%;
  }
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
`;

export const Boton = styled.button`
  background: #ff7c01;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 200px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  &:hover {
    background: black;
    color: #ff7c01;
  }
  ${(props) =>
    props.espera === "true" &&
    css`
      border: 3px solid black;
    `}
`;
export default function IniciarSesion({ estado, cambiarEstado }) {
  const [id, setId] = useState("");
  const [contraseña, setContraseña] = useState("");
  const historial = useHistory();
  const url = "http://127.0.0.1:8000/";
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [inicio, setInicio] = useState("INICIAR SESION");

  const iniciarSesion = () => {
    if (esValido()) {
      setEspera("true");
      setInicio("");
      setInhabilitado(true);
      if (!isNaN(id.substring(0, 1))) {
        if (id.substring(0, 1) > 0 && id.substring(0, 1) < 4) {
          axios.get(url + "administrador/" + id).then((response) => {
            if (response.data.length > 0) {
              if (response.data[0].CIADMINISTRADOR === contraseña) {
                toast("Inicio Correctamente", {
                  icon: "✔️",
                  duration: 3000,
                  style: {
                    border: "2px solid #ff7c01",
                    padding: "10px",
                    color: "#fff",
                    background: "#000",
                    borderRadius: "4%",
                  },
                });
                document.title = response.data[0].NOMBREADMINISTRADOR;
                setEspera("false");
                historial.push("/administrador");
              } else {
                setInhabilitado(false);
                setEspera("false");
                setInicio("INICIAR SESION");
                toast("Contraseña Incorrecta", {
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
              setInhabilitado(false);
              setEspera("false");
              setInicio("INICIAR SESION");
              toast("Id Invalido", {
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
        }
        if (id.substring(0, 1) > 3 && id.substring(0, 1) < 7) {
          axios.get(url + "arbitro/" + id).then((response) => {
            if (response.data.length > 0) {
              if (response.data[0].CI === contraseña) {
                setEspera("false");
      
                document.title = response.data[0].NOMBRE;
                toast("Inicio Correctamente", {
                  icon: "✔️",
                  duration: 3000,
                  style: {
                    border: "2px solid #ff7c01",
                    padding: "10px",
                    color: "#fff",
                    background: "#000",
                    borderRadius: "4%",
                  },
                });
                historial.push("/arbitro");
              } else {
                setInhabilitado(false);
                setEspera("false");
                setInicio("INICIAR SESION");
                toast("Contraseña Incorrecta", {
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
              setInhabilitado(false);
              setEspera("false");
              setInicio("INICIAR SESION");
              toast("Id Invalido", {
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
        }
        if (id.substring(0, 1) > 6 && id.substring(0, 1) < 10) {
          axios.get(url + "delegado/" + id).then((response) => {
            if (response.data.length > 0) {
              if (response.data[0].CI === contraseña) {
                setEspera("false");
                toast("Inicio Correctamente", {
                  icon: "✔️",
                  duration: 3000,
                  style: {
                    border: "2px solid #ff7c01",
                    padding: "10px",
                    color: "#fff",
                    background: "#000",
                    borderRadius: "4%",
                  },
                });
                historial.push("/delegado/"+id);
              } else {
                setEspera("false");
              setInicio("INICIAR SESION");
                toast("Contraseña Incorrecta", {
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
              setEspera("false");
              setInicio("INICIAR SESION");
              toast("Id Invalido", {
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
        }
      } else {
        setInhabilitado(false);
        setEspera("false");
        setInicio("INICIAR SESION");
        toast("ID Invalido", {
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
        setInhabilitado(false);
        setEspera("false");
        setInicio("INICIAR SESION");
      }
    }
  };

  function esValido() {
    var valido = true;
    if (id === "") {
      toast("Ingesar ID", {
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
    if (contraseña === "") {
      toast("Ingesar Contraseña", {
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
    return valido;
  }
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>Iniciar Sesion</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <Logo>
                <FontAwesomeIcon icon={faUser} />
              </Logo>
              <InputBox
                placeholder="ID"
                type="text"
                required
                id="nombreCompleto"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              ></InputBox>
              <InputBox
                placeholder="CONTRASEÑA"
                type="password"
                required
                id="nombreCompleto"
                onChange={(e) => {
                  setContraseña(e.target.value);
                }}
              ></InputBox>
            </DetalleUsuario>
            <DetalleUsuario>
              <Boton
                espera={espera}
                disabled={inhabilitado}
                onClick={iniciarSesion}
              >
                {inicio}
                {espera == "true" && (
                  <Img src={require("../Imagenes/Carga.gif")} />
                )}
              </Boton>
            </DetalleUsuario>
            <DetalleUsuario>
              <Boton
                onClick={() => {
                  historial.push("/registro");
                }}
              >
                REGISTRARSE
              </Boton>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
