import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./Nav";
import IniciarSesion from "./IniciarSesion";
import { ImagenLogo } from "./Inicio";
import {
  Boton,
  BotonBuscar,
  BotonNav,
  BoxCampo,
  ContenedorBox,
  ContenedorGlobal,
  ContenedorPrincipal,
  Detalle,
  Img,
  NavFixture,
  Select,
  Text,
  TextBox,
  TextoNav,
} from "./EstilosFixture";
import axios from "axios";
import ModalPartido from "./ModalPartido";

export default function Fixture() {
  const [modal, setModal] = useState(false);
  document.title = "Fixture";
  const [listaCategoria, setListaCategoria] = useState([]);
  const url = "http://127.0.0.1:8000/";
  const [categoria, setCategoria] = useState("");
  const [categoriaSemiFinal, setCategoriaSemiFinal] = useState("");
  const [categoriaFinal, setCategoriaFinal] = useState("");
  const [listaGrupos, setListaGrupos] = useState([]);
  const [obtuvoCategoria, setObtuvoCategoria] = useState(false);
  const [seleccionoCategoria, setSeleccionoCategoria] = useState(false);
  const [seleccionoCategoriaSF, setSeleccionoCategoriaSF] = useState(false);
  const [seleccionoCategoriaF, setSeleccionoCategoriaF] = useState(false);

  const [modalPartido, setModalPartido] = useState(false);
  const [partido, setPartido] = useState([]);
  const [activoPF, setActivoPF] = useState(true);
  const [activoSF, setActivoSF] = useState(false);
  const [activoF, setActivoF] = useState(false);
  const [listaSemifinal, setListaSemiFinal] = useState([]);
  const [listaFinal, setListaFinal] = useState([]);

  const obtenerCategoria = () => {
    axios.get(url + "nombreCategorias").then((response) => {
      setListaCategoria(response.data);
      setObtuvoCategoria(true);
    });
  };

  const obtenerPartido = () => {
    axios.get(url + "obtenercategoriafixture/" + categoria).then((grupo) => {
      if (grupo.data.length > 0) {
        setListaGrupos(grupo.data);
        setSeleccionoCategoria(true);
      } else {
        setListaGrupos([]);
        setSeleccionoCategoria(false);
      }
    });
  };

  const final = () => {
    axios.get(url + "hayFinal/" + categoriaFinal).then((response) => {
      if (response.data.length) {
        setListaFinal(response.data);
        setSeleccionoCategoriaF(true);
      } else {
        setSeleccionoCategoriaF(false);
      }
    });
  };

  const semiFinal = () => {
    axios.get(url + "haySemifinal/" + categoriaSemiFinal).then((response) => {
      if (response.data.length > 0) {
        setListaSemiFinal(response.data);
        setSeleccionoCategoriaSF(true);
      } else {
        setSeleccionoCategoriaSF(false);
      }
    });
  };

  useEffect(function () {
    obtenerCategoria();
    if (categoriaFinal !== "") {
      if (activoF) {
        if (!modalPartido) {
          if (document.getElementById("categoriaFinal").value != null) {
            document.getElementById("categoriaFinal").value = categoriaFinal;
          }
        }
      }
    }
    if (categoriaSemiFinal !== "") {
      if (activoSF) {
        if (!modalPartido) {
          if (document.getElementById("categoriaSemiFinal").value != null) {
            document.getElementById("categoriaSemiFinal").value =
              categoriaSemiFinal;
          }
        }
      }
    }
    if (categoria !== "") {
      if (activoPF) {
        if (!modalPartido) {
          if (document.getElementById("categoria").value != null) {
            document.getElementById("categoria").value = categoria;
          }
        }
      }
    }
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

      {!modalPartido && (
        <>
          {obtuvoCategoria && (
            <ContenedorGlobal>
              <ContenedorPrincipal>
                <NavFixture>
                  <BotonNav
                    activo={"" + activoPF + ""}
                    onClick={() => {
                      setActivoPF(true);
                      setActivoSF(false);
                      setActivoF(false);
                    }}
                  >
                    <TextoNav>Primera Fase</TextoNav>
                  </BotonNav>
                  <BotonNav
                    activo={"" + activoSF + ""}
                    onClick={() => {
                      setActivoPF(false);
                      setActivoSF(true);
                      setActivoF(false);
                    }}
                  >
                    <TextoNav>Semi Final</TextoNav>
                  </BotonNav>
                  <BotonNav
                    activo={"" + activoF + ""}
                    onClick={() => {
                      setActivoPF(false);
                      setActivoSF(false);
                      setActivoF(true);
                    }}
                  >
                    <TextoNav>Final</TextoNav>
                  </BotonNav>
                </NavFixture>
                {activoPF && (
                  <>
                    <Detalle>
                      <BoxCampo encabezado={"true"}>
                        <TextBox sin={"true"}>Categoria</TextBox>
                        <Select
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
                            return <option value={datos}>{datos}</option>;
                          })}
                        </Select>
                      </BoxCampo>
                      <BoxCampo>
                        <BotonBuscar onClick={obtenerPartido}>
                          Buscar
                        </BotonBuscar>
                      </BoxCampo>
                    </Detalle>
                    {seleccionoCategoria && (
                      <Detalle>
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            {"Categoria " + categoria}
                          </TextBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              GRUPO A
                            </Text>
                          </ContenedorBox>
                          {listaGrupos.map((equipos) => {
                            if (equipos.GRUPO === "Grupo A " + categoria) {
                              return (
                                <>
                                  <ContenedorBox
                                    onClick={() => {
                                      setModalPartido(!modalPartido);
                                      setPartido({
                                        equipo1: equipos.EQUIPO1,
                                        equipo2: equipos.EQUIPO2,
                                        grupo: equipos.GRUPO,
                                        hora: equipos.HORA,
                                        categoria: equipos.IDCATEGORIA,
                                        lugar: equipos.LUGAR,
                                        dia: equipos.DIA,
                                      });
                                    }}
                                  >
                                    <Text derecha={"false"}>
                                      {equipos.EQUIPO1}
                                    </Text>
                                    <Text derecha={"medio"}>VS</Text>
                                    <Text derecha={"true"}>
                                      {equipos.EQUIPO2}
                                    </Text>
                                  </ContenedorBox>
                                </>
                              );
                            }
                          })}
                          <ContenedorBox titulo={"true"}>
                            <Text centro={"true"} derecha={"false"}>
                              GRUPO B
                            </Text>
                          </ContenedorBox>
                          {listaGrupos.map((equipos) => {
                            if (equipos.GRUPO === "Grupo B" + categoria) {
                              return (
                                <>
                                  <ContenedorBox
                                    onClick={() => {
                                      setModalPartido(!modalPartido);
                                      setPartido({
                                        equipo1: equipos.EQUIPO1,
                                        equipo2: equipos.EQUIPO2,
                                        grupo: equipos.GRUPO,
                                        hora: equipos.HORA,
                                        categoria: equipos.IDCATEGORIA,
                                        lugar: equipos.LUGAR,
                                        dia: equipos.DIA,
                                      });
                                    }}
                                  >
                                    <Text derecha={"false"}>
                                      {equipos.EQUIPO1}
                                    </Text>
                                    <Text derecha={"medio"}>VS</Text>
                                    <Text derecha={"true"}>
                                      {equipos.EQUIPO2}
                                    </Text>
                                  </ContenedorBox>
                                </>
                              );
                            }
                          })}
                        </BoxCampo>
                      </Detalle>
                    )}
                  </>
                )}
                {activoSF && (
                  <>
                    <Detalle>
                      <BoxCampo encabezado={"true"}>
                        <TextBox sin={"true"}>Categoria</TextBox>
                        <Select
                          type="text"
                          placeholder="Categoria"
                          required
                          id="categoriaSemiFinal"
                          onChange={(e) => {
                            setCategoriaSemiFinal(e.target.value);
                          }}
                        >
                          <option value="">Categoria</option>
                          {listaCategoria.map((datos) => {
                            return <option value={datos}>{datos}</option>;
                          })}
                        </Select>
                      </BoxCampo>
                      <BoxCampo>
                        <BotonBuscar onClick={semiFinal}>Buscar</BotonBuscar>
                      </BoxCampo>
                    </Detalle>
                    {seleccionoCategoriaSF && (
                      <Detalle>
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            {"Categoria " + categoriaSemiFinal}
                          </TextBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              GRUPO A
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox
                            onClick={() => {
                              setModalPartido(!modalPartido);
                              setPartido({
                                equipo1: listaSemifinal[0].EQUIPO1,
                                equipo2: listaSemifinal[0].EQUIPO2,
                                grupo: listaSemifinal[0].GRUPO,
                                hora: listaSemifinal[0].HORA,
                                categoria: listaSemifinal[0].IDCATEGORIA,
                                lugar: listaSemifinal[0].LUGAR,
                                dia: listaSemifinal[0].DIA,
                              });
                            }}
                          >
                            <Text derecha={"false"}>
                              {listaSemifinal[0].EQUIPO1}
                            </Text>
                            <Text derecha={"medio"}>VS</Text>
                            <Text derecha={"true"}>
                              {listaSemifinal[0].EQUIPO2}
                            </Text>
                          </ContenedorBox>
                        </BoxCampo>
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            {"Categoria " + categoriaSemiFinal}
                          </TextBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              GRUPO B
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox
                            onClick={() => {
                              setModalPartido(!modalPartido);
                              setPartido({
                                equipo1: listaSemifinal[1].EQUIPO1,
                                equipo2: listaSemifinal[1].EQUIPO2,
                                grupo: listaSemifinal[1].GRUPO,
                                hora: listaSemifinal[1].HORA,
                                categoria: listaSemifinal[1].IDCATEGORIA,
                                lugar: listaSemifinal[1].LUGAR,
                                dia: listaSemifinal[1].DIA,
                              });
                            }}
                          >
                            <Text derecha={"false"}>
                              {listaSemifinal[1].EQUIPO1}
                            </Text>
                            <Text derecha={"medio"}>VS</Text>
                            <Text derecha={"true"}>
                              {listaSemifinal[1].EQUIPO2}
                            </Text>
                          </ContenedorBox>
                        </BoxCampo>
                      </Detalle>
                    )}
                  </>
                )}
                {activoF && (
                  <>
                    <Detalle>
                      <BoxCampo encabezado={"true"}>
                        <TextBox sin={"true"}>Categoria</TextBox>
                        <Select
                          type="text"
                          placeholder="Categoria"
                          required
                          id="categoriaFinal"
                          onChange={(e) => {
                            setCategoriaFinal(e.target.value);
                          }}
                        >
                          <option value="">Categoria</option>
                          {listaCategoria.map((datos) => {
                            return <option value={datos}>{datos}</option>;
                          })}
                        </Select>
                      </BoxCampo>
                      <BoxCampo>
                        <BotonBuscar onClick={final}>Buscar</BotonBuscar>
                      </BoxCampo>
                    </Detalle>
                    {seleccionoCategoriaF && (
                      <Detalle>
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            {"Categoria " + categoriaFinal}
                          </TextBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              1º Lugar y 2º Lugar
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox
                            onClick={() => {
                              setModalPartido(!modalPartido);
                              setPartido({
                                equipo1: listaFinal[0].EQUIPO1,
                                equipo2: listaFinal[0].EQUIPO2,
                                grupo: listaFinal[0].GRUPO,
                                hora: listaFinal[0].HORA,
                                categoria: listaFinal[0].IDCATEGORIA,
                                lugar: listaFinal[0].LUGAR,
                                dia: listaFinal[0].DIA,
                              });
                            }}
                          >
                            <Text derecha={"false"}>
                              {listaFinal[0].EQUIPO1}
                            </Text>
                            <Text derecha={"medio"}>VS</Text>
                            <Text derecha={"true"}>
                              {listaFinal[0].EQUIPO2}
                            </Text>
                          </ContenedorBox>
                        </BoxCampo>
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            {"Categoria " + categoriaFinal}
                          </TextBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              3º Lugar y 4º Lugar
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox
                            onClick={() => {
                              setModalPartido(!modalPartido);
                              setPartido({
                                equipo1: listaFinal[1].EQUIPO1,
                                equipo2: listaFinal[1].EQUIPO2,
                                grupo: listaFinal[1].GRUPO,
                                hora: listaFinal[1].HORA,
                                categoria: listaFinal[1].IDCATEGORIA,
                                lugar: listaFinal[1].LUGAR,
                                dia: listaFinal[1].DIA,
                              });
                            }}
                          >
                            <Text derecha={"false"}>
                              {listaFinal[1].EQUIPO1}
                            </Text>
                            <Text derecha={"medio"}>VS</Text>
                            <Text derecha={"true"}>
                              {listaFinal[1].EQUIPO2}
                            </Text>
                          </ContenedorBox>
                        </BoxCampo>
                      </Detalle>
                    )}
                  </>
                )}
              </ContenedorPrincipal>
            </ContenedorGlobal>
          )}
        </>
      )}

      <ModalPartido
        estado={modalPartido}
        cambiarEstado={setModalPartido}
        datos={partido}
      />
    </>
  );
}
