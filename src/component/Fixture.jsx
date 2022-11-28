import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./Nav";
import IniciarSesion from "./IniciarSesion";
import { ImagenLogo } from "./Inicio";
import {
  BoxCampo,
  ContenedorBox,
  Detalle,
  Text,
  TextBox,
} from "./EstilosFixture";
import axios from "axios";

export default function Fixture() {
  const [modal, setModal] = useState(false);
  document.title = "Fixture";
  const [listaCategoria, setListaCategoria] = useState([]);
  const url = "http://127.0.0.1:8000/";
  const [listacat, setListaCat] = useState([]);
  const [listaGrupos, setListaGrupos] = useState([]);

  const [obtuvoCategoria, setObtuvoCategoria] = useState(false);

  const obtenerCategoria = () => {
    axios.get(url + "nombreCategorias").then((response) => {
      setListaCategoria(response.data);
      setObtuvoCategoria(true);

      axios.get(url + "partidos").then((grupo) => {
        setListaGrupos(grupo.data);
        console.log(listaGrupos);
      });
    });
  };
  useEffect(function () {
    obtenerCategoria();
  });
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
      {obtenerCategoria && (
        <>
        
        <Detalle>
          {listaCategoria.map((datos) => {
            return (
              <BoxCampo>
                <TextBox titulo={"true"}>{"Categoria "+ datos}</TextBox>
                <ContenedorBox titulo = {"true"}>
                  <Text derecha={"false"}>GRUPO A</Text>
                </ContenedorBox>
                {listaGrupos.map((equipos) => {
                  if (equipos.GRUPO === "Grupo A " + datos) {
                    return (
                      <>
                        <ContenedorBox>
                          <Text derecha={"false"}>{equipos.EQUIPO1}</Text>
                          <Text derecha={"medio"}>VS</Text>
                          <Text derecha={"true"}>{equipos.EQUIPO2}</Text>
                        </ContenedorBox>
                      </>
                    );
                  }
                })}
                <ContenedorBox titulo = {"true"}>
                  <Text derecha={"false"}>GRUPO B</Text>
                </ContenedorBox>
                {listaGrupos.map((equipos) => {
                  if (equipos.GRUPO === "Grupo B" + datos) {
                    return (
                      <>
                        <ContenedorBox>
                        <Text derecha={"false"}>{equipos.EQUIPO1}</Text>
                          <Text derecha={"medio"}>VS</Text>
                          <Text derecha={"true"}>{equipos.EQUIPO2}</Text>
                        </ContenedorBox>
                      </>
                    );
                  }
                })}
              </BoxCampo>
            );
          })}
        </Detalle>
        </>
        
      )}

      <IniciarSesion estado={modal} cambiarEstado={setModal} />
    </>
  );
}
