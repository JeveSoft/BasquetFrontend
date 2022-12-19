import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import InputValidar from "./InputValidar";
import axios from "axios";
import {url} from "../services/const"
import { useEffect } from "react";

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
  ${(props) =>
    props.tipo === "categoria" &&
    css`
      width: 550px;
      height: 290px;
    `}
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
    width: 125%;
    background: linear-gradient(135deg, #000000, #ff7c01);
  }
  ${(props) =>
    props.tipo === "categoria" &&
    css`
      width: 405px;
    `}
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
`;
export const InputBox = styled.input`
  margin-bottom: 10px;
  height: 40px;
  text-align: center;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ff7c01;
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
export const Boton = styled.button`
  background: #ff7c01;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 110px;
  margin: 10px;
  height: 40px;
  font-size: 16px;
  &:hover {
    background: black;
    color: #ff7c01;
  }
  ${(props) =>
    props.espera === "true" &&
    css`
      border: 2px solid black;
    `}
`;
export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin-bottom: 20px;
`;
export const BoxCampo = styled.div`
  margin: 10px 0 5px 0;
  width: cal(100% / 2 - 20px);
  position: relative;
  z-index: 90;
`;
export const TextBox = styled.div`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: center;
`;
export const LabelFile = styled.label`
  text-transform: uppercase;
  text-align: center;
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ff7c01;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  color: black;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    background-color: #ff7c01;
    color: black;
    border: 3px solid black;
  }
`;
export const InputFile = styled.input``;
export const ContenedorBotones = styled.div`
  width: 50%;
  position: absolute;
  margin-top: 165px;
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
`;
export default function ModalAñadirInformacion({
  estado,
  cambiarEstado,
  tipo,
  titulo,
}) {
  const [categoria, setCategoria] = useState({ campo: "", valido: null });
  const [tituloFoto, setTituloFoto] = useState("");
  const [reglamento, setReglamento] = useState(null);
  const [edadMin, setEdadMin] = useState({ campo: "", valido: null });
  const [edadMax, setEdadMax] = useState({ campo: "", valido: null });
  const [nombreFoto, setNombreFoto] = useState("foto.jpg");
  const [fotoInfo, setFotoInfo] = useState(null);
  const [informaciones, setInformaciones] = useState([]);
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);

  useEffect(()=>{
    obtenerInformaciones();
  },[])

  const obtenerInformaciones = async () =>{
    const response = await fetch(url+"informacion");
    const data = await response.json();
    setInformaciones(data);
  }
  const validarEdad = () => {
    var valido = false;
    if (edadMin.campo < edadMax.campo) {
      valido = true;
    }
    return valido;
  };

  const validoTitulo = () =>{
    console.log(informaciones);
    console.log(tituloFoto)
    
  }
  const mensajeRespuesta = (msg, icon ) =>{
    toast(msg, {
      icon: icon,
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

  const subirDatosInformacion = async () => {
    if (validarTitulo()) {
      setEspera("true");
      setInhabilitado(true);
   
        if(fotoInfo != null ){
          const f = new FormData();
          f.append("imagen",fotoInfo);
          f.append("titulo",tituloFoto);
          const res = await fetch(url + "agregarFotoInfo",{
            method: "POST",
            body: f,
          });
          mensajeRespuesta("Informacion Agregada Correctamente!","✅")
        }else{
          mensajeRespuesta("Ingrese Foto Información","⚠️")
        }
      }else{
        mensajeRespuesta("Titulo Ya Existe!","⚠️")
      }
      setTituloFoto("");
      setFotoInfo(null);
      setEspera("false");
      setInhabilitado(false);
      cambiarEstado(false);
      obtenerInformaciones();
    
  };

  const validarTitulo = () =>{
    var response = false;
    console.log(informaciones);
    console.log(tituloFoto)
    const divTitulo = document.getElementById("tituloImagen");
    var valido = informaciones.some((info)=>{
        return info.TITULO === tituloFoto
    })
    if(valido && divTitulo != null){
      divTitulo.style.border = "3px solid red";
    }else if(divTitulo != null){
      divTitulo.style.border = "3px solid green"
      response = true;
    }
    console.log(valido);
    return response;
  }
  const subirDatos = () => {
    if (categoria.valido === "true") {
      if (validarEdad()) {
        setEspera("true");
        setInhabilitado(true);
        const datos = {
          IDCATEGORIA:categoria.campo,
          NOMBRECATEGORIA: categoria.campo,
          EDADMIN: edadMin.campo,
          EDADMAX: edadMax.campo,
        };
        axios
          .get(url + "existeCategoria/" + categoria.campo)
          .then((response) => {
            if (response.data.length <= 0) {
              axios.post(url + "anadirCategoria", datos).then((response1) => {
                setEspera("false");
                setInhabilitado(false);
                setCategoria({ campo: "", valido: null });
                setEdadMin({ campo: "", valido: null });
                setEdadMax({ campo: "", valido: null });
                cambiarEstado(false);
                console.log("se subio");
              });
              mensajeRespuesta("Categoria Agregada!","✅");
            } else {
              setEspera("false");
              setInhabilitado(false);
              toast("La Categoria Ya Existe", {
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
        toast("Verificar Edad Minima y Edad Maxima", {
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
      toast("Verificar Categoria", {
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

  const cancelar = () => {
    setCategoria({ campo: "", valido: null });
    setEdadMin({ campo: "", valido: null });
    setEdadMax({ campo: "", valido: null });
    cambiarEstado(false);
  };
  const enviarReglamento = async () =>{
    if(reglamento != null){
      const campeo = await fetch(url+"todosCampeonatos");
      const campoData = await campeo.json();
      if(campoData.length > 0){
        const f = new FormData();
        f.append("reglamento", reglamento);
        const response = await fetch(url+"agregarReglamento/"+campoData[0].IDCAMPEONATO,{
          method: "POST",
          body: f
        }) 
        mensajeRespuesta("Reglamento Enviado!","✅")
        setReglamento(null);
      }else{
        mensajeRespuesta("Ingrese Fechas de Liga","⚠️")
      }
    }else{
      mensajeRespuesta("Ingrese Reglamento","⚠️")
    }
  }
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal tipo={tipo}>
            <EncabezadoModal>
              <Titulo tipo={tipo}>{titulo}</Titulo>
            </EncabezadoModal>
            <BotonCerrar onClick={cancelar}>
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            {tipo === "reglamento" && (
              <DetalleUsuario>
                <BoxCampo>
                  <TextBox>REGLAMENTO</TextBox>
                  <input type="file" name="" id="foto" accept="application/pdf" onChange={(e)=>setReglamento(e.target.files[0])}/>
                  {/* <LabelFile for="foto" id="imagenLogo">
                    Seleccionar Archivo
                  </LabelFile> */}
                </BoxCampo>
                <Boton
                  onClick={() => {
                    cambiarEstado(false);
                    enviarReglamento();
                  }}
                >
                  Guardar
                </Boton>
                <Boton
                  onClick={() => {
                    cambiarEstado(false);
                  }}
                >
                  Cancelar
                </Boton>
              </DetalleUsuario>
            )}
            {tipo === "categoria" && (
              <DetalleUsuario tipo="categoria">
                <InputValidar
                  estado={categoria}
                  cambiarEstado={setCategoria}
                  tipo="text"
                  label="Categoria"
                  placeholder="Categoria"
                  name="categoria"
                  classe="categoria"
                  expresionRegular={/^[a-zA-Z0-9-+]{3,15}/}
                />
                <InputValidar
                  estado={edadMin}
                  cambiarEstado={setEdadMin}
                  tipo="number"
                  label="Edad Minima"
                  placeholder="Edad Minima"
                  name="edadMinima"
                  classe="categoria"
                  expresionRegular={/^[0-9]/}
                />
                <InputValidar
                  estado={edadMax}
                  cambiarEstado={setEdadMax}
                  tipo="number"
                  label="Edad Maxima"
                  placeholder="Edad Maxima"
                  name="edadMaxima"
                  classe="categoria"
                  expresionRegular={/^[0-9]/}
                />
                <ContenedorBotones>
                  <Boton
                    espera={espera}
                    disabled={inhabilitado}
                    onClick={subirDatos}
                  >
                    {espera == "false" && "Guardar"}
                    {espera == "true" && (
                      <Img src={require("../Imagenes/Carga.gif")} />
                    )}
                  </Boton>
                  <Boton
                    espera={espera}
                    disabled={inhabilitado}
                    onClick={cancelar}
                  >
                    Cancelar
                  </Boton>
                </ContenedorBotones>
              </DetalleUsuario>
            )}
            {tipo == "informacion" && (
              <DetalleUsuario>
                <TextBox>Título</TextBox>
                <InputBox
                  //estado={tituloFoto}
                  //cambiarEstado={setTituloFoto}
                  tipo="text"
                  label="Titulo Imagen"
                  placeholder="Titulo Imagen"
                  name="tituloImagen"
                  id="tituloImagen"
                  classe="categoria"
                  //expresionRegular={/^[a-zA-Z0-9-+]{3,15}$/}
                  onChange={(e)=>{
                  setTituloFoto(e.target.value);  
                   }}
                  onMouseLeave = {validarTitulo()}
                  //centro={"true"}
                />
                <BoxCampo>
                  <TextBox>IMAGEN</TextBox>
                  <input  type="file" name="" id="foto" accept="image/*" onChange={(e)=>setFotoInfo(e.target.files[0])} />
                  {/* <LabelFile for="foto" id="imagenLogo">
                    Seleccionar Archivo
                  </LabelFile> */}
                </BoxCampo>
                <Boton
                  espera={espera}
                  disabled={inhabilitado}
                  onClick={subirDatosInformacion}
                >
                  {espera == "false" && "Guardar"}
                  {espera == "true" && (
                    <Img src={require("../Imagenes/Carga.gif")} />
                  )}
                </Boton>
                <Boton
                  espera={espera}
                  disabled={inhabilitado}
                  onClick={cancelar}
                >
                  Cancelar
                </Boton>
              </DetalleUsuario>
            )}
          </ContenedorModal>
        </Overlay>
      )}
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
