import React, { useState } from "react";
import { url, urlImage } from "../services/const";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, ImagenLogo } from "./Nav";
import IniciarSesion from "./IniciarSesion";
import {
  Button,
  Contenedor,
  ContenedorMain,
  Equipos,
  EquipoModal,
  ImgEquipo,
  Select,
  BotonDescarga,
} from "./EstiloEquipos";
import { useEffect } from "react";
import { PopUpEquipo } from "./PopUpEquipo";
import { Detalle } from "./EstilosAdministrador";
import { BoxCampo, IconoValidacion, InputBox, TextBox } from "./EstiloRegistro";
import styled, { css } from "styled-components";
import { Boton } from "./Modal";
import { StepLabel } from "@material-ui/core";

export default function Informaciones() {
  const InputBoxInfo = styled.input`
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 2px solid #ff7c01;
    padding: 0 40px 0 10px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.1s ease;
    line-height: 45px;
    &:hover {
      border: 2px solid black;
      outline: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
    &:focus {
      border: 2px solid black;
      outline: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
    text-align: center;
  `;
  const DetalleInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px 40px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  `;
  const ContenedorInformacion = styled.div`
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
    place-content: center;
    gap: 30px;
  `;
  const PagoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  `;
  const CategoriasDiv = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  `;
  const ContenedorGlobal = styled.div`
    background: linear-gradient(135deg, #ff7c01, #000000);
  `;
  const ImgInfo = styled.img`
    color: white;
    width: 100px;
  `;
  const PagosImg = styled.div`
    display: flex;
    gap: 20px;
    text-align: center;
  `;
  const CategoriaDiv = styled.div`
    color: black;
  `;

  const CategoriaWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    align-items: center;
    justify-content: center;
  `;
  const BotonDescargaReglamento = styled.a`
    display: inline-block;
    background: white;
    margin-bottom: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    width: 200px;
    height: 40px;
    font-size: 16px;
    text-align: center;
    border: 1px solid black;
    &:hover {
      background: black;
      color: white;
    }
  `;

  const [modal, setModal] = useState(false);
  const [campeonato, setCampeonato] = useState({});
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    obtenerFechas();
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    const response = await fetch(url + "categorias");
    const data = await response.json();
    if (data.length > 0) {
      setCategorias(data);
    } else {
      const categoriaDefault = [
        {
          NOMBRECATEGORIA: "Por definir",
          EDADMIN: "Por definir",
          EDADMAX: "Por definir",
        },
      ];
      setCategorias(categoriaDefault);
    }
  };

  const obtenerFechas = async () => {
    const response = await fetch(url + "todosCampeonatos");
    const data = await response.json();
    if (data.length > 0) {
      setCampeonato(data[0]);
    } else {
      const campeonatoA = {
        DESCRIPCION: "por definir",
        INIPREINSCRIPCION: "por definir",
        FINPREINSCRIPCION: "por definir",
        INIINSCRIPCION: "por definir",
        FININSCRIPCION: "por definir",
        INICIOLIGA: "por definir",
        FINLIGA: "por definir",
        PAGOMITAD: "vacio",
        PAGOCOMPLETO: "vacio",
      };
      setCampeonato(campeonatoA);
    }
    console.log(data.length);
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <ImagenLogo src={require("../Imagenes/LogoBlanco.png")} />
        </NavLink>
        <NavMenu>
          <NavLink to="/fixture" activeStyle>
            FIXTURE
          </NavLink>
          <NavLink to="/equipo" activeStyle>
            EQUIPOS
          </NavLink>
          <NavLink to="/tabla" activeStyle>
            TABLA DE POSICIONES
          </NavLink>
          <NavLink to="/informacion" activeStyle>
            INFORMACIÓN
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            onClick={() => {
              setModal(!modal);
            }}
          >
            <img src={require("../Imagenes/menu.png")} />
          </NavBtnLink>
        </NavBtn>
      </Nav>
      {/* Fechas */}
      <ContenedorGlobal>
        <ContenedorInformacion>
          <DetalleInfo>
            <BoxCampo>
              <TextBox>Inicio Pre-Inscripcion</TextBox>
              <InputBoxInfo
                type="text"
                value={campeonato.INIPREINSCRIPCION}
                readOnly
              />
            </BoxCampo>
            <BoxCampo>
              <TextBox>Fin Pre-Inscripcion</TextBox>
              <InputBoxInfo
                type="text"
                value={campeonato.FINPREINSCRIPCION}
                readOnly
              />
            </BoxCampo>
            <BoxCampo>
              <TextBox>Inicio Inscripcion</TextBox>
              <InputBoxInfo
                type="text"
                value={campeonato.INIINSCRIPCION}
                readOnly
              />
            </BoxCampo>
            <BoxCampo>
              <TextBox>Fin Inscripcion</TextBox>
              <InputBoxInfo
                type="text"
                value={campeonato.FININSCRIPCION}
                readOnly
              />
            </BoxCampo>
            <BoxCampo>
              <TextBox>Inicio Liga</TextBox>
              <InputBoxInfo
                type="text"
                value={campeonato.INICIOLIGA}
                readOnly
              />
            </BoxCampo>
            <BoxCampo>
              <TextBox>Fin Liga</TextBox>
              <InputBoxInfo type="text" value={campeonato.FINLIGA} readOnly />
            </BoxCampo>
          </DetalleInfo>

          {/* Pagos */}
          <PagoDiv>
            <h4>Costo Inscripción</h4>
            <PagosImg>
              <div>
                <h5>Pago Mitad</h5>
                {campeonato.PAGOMITAD === "vacio" ? (
                  <h5>Por definir</h5>
                ) : (
                  <ImgInfo src={urlImage + "storage/" + campeonato.PAGOMITAD} />
                )}
              </div>
              <div>
                <h5>Pago Completo</h5>
                {campeonato.PAGOCOMPLETO === "vacio" ? (
                  <h5>Por definir</h5>
                ) : (
                  <ImgInfo
                    src={urlImage + "storage/" + campeonato.PAGOCOMPLETO}
                  />
                )}
              </div>
            </PagosImg>
          </PagoDiv>
          {/* Categoria */}
          <CategoriasDiv>
            <h4>Categorias Habilitadas</h4>
            <CategoriaWrap>
              {categorias.map((cat) => {
                return (
                  <CategoriaDiv key={cat.NOMBRECATEGORIA}>
                    <h5>
                      Categoria: {cat.NOMBRECATEGORIA}{" "}
                      {cat.NOMBRECATEGORIA === "Por definir" ? "⚠️" : "✅"}
                    </h5>
                    <h5>Edad Mínima: {cat.EDADMIN}</h5>
                    <h5>Edad Máxima: {cat.EDADMAX}</h5>
                  </CategoriaDiv>
                );
              })}
            </CategoriaWrap>
          </CategoriasDiv>
          {campeonato.DESCRIPCION != null ?
          <BotonDescargaReglamento
          href={urlImage+"storage/"+campeonato.DESCRIPCION}
          download="reglamento.pdf"
          target="_blank"
        >
          Descargar Reglamento
        </BotonDescargaReglamento>
          :
          ""
          }
          
        </ContenedorInformacion>
      </ContenedorGlobal>
    </>
  );
}
