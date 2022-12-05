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
  const [categoriaFinal, setCategoriaFinal] = useState("");
  const [categoriaOctavos, setCategoriaOctavos] = useState("");
  const [listaGrupos, setListaGrupos] = useState([]);
  const [obtuvoCategoria, setObtuvoCategoria] = useState(false);
  const [seleccionoCategoria, setSeleccionoCategoria] = useState(false);
  const [seleccionoCategoriaFinal, setSeleccionoCategoriaFinal] = useState(false);
  const [seleccionoCategoriaOc, setSeleccionoCategoriaOc] = useState(false);
  const [espera, setEspera] = useState("false");
  const [inhabilitado, setInhabilitado] = useState(false);
  const [modalPartido, setModalPartido] = useState(false);
  const [partido, setPartido] = useState([]);
  const [activoPF, setActivoPF] = useState(true);
  const [activoOc, setActivoOc] = useState(false);
  const [activoF, setActivoF] = useState(false);
  const [listaOctavos, setListaOctavos] = useState([]);
  const [partido1, setPartido1] = useState([]);
  const [partido2, setPartido2] = useState([]);
  const [encabezadoSF, setEncabezadoSF] = useState("");
  const obtenerCategoria = () => {
    axios.get(url + "nombreCategorias").then((response) => {
      setListaCategoria(response.data);
      setObtuvoCategoria(true);
    });
  };

  const obtenerPartido = () => {
    axios.get(url + "obtenercategoriafixture/" + categoria).then((grupo) => {
      setListaGrupos(grupo.data);
      setSeleccionoCategoria(true);
    });
  };

  const octavos = () => {
    axios.get(url + "octavos/" + categoriaOctavos).then((response) => {
      setListaOctavos(response.data);
      setPartido1({});
      setPartido2({});
      setEncabezadoSF("Categoria " + categoriaOctavos);
      if (listaOctavos[0].length > 0) {
        if (listaOctavos[0].length > 2) {
          //ordenar
          listaOctavos[0].splice(2, listaOctavos[0].length);
        }
        if (listaOctavos[1].length > 2) {
          //ordenar
          listaOctavos[1].splice(2, listaOctavos[0].length);
        }
        let eq1 = listaOctavos[0][0].GANADOR;
        let eq2 = listaOctavos[0][1].GANADOR;
        /*let eq3 =listaOctavos[1][0].GANADOR
      let eq4 = listaOctavos[1][2].GANADOR*/
        setPartido1({
          equipo1: eq1,
          equipo2: eq1,
          lugar: "",
          fecha: "",
          hora: "",
        });
        setPartido2({
          equipo1: eq2,
          equipo2: eq2,
          lugar: "",
          fecha: "",
          hora: "",
        });
        setSeleccionoCategoriaOc(true);
      }
    });
  };

  useEffect(function () {
    obtenerCategoria();

    if (categoria !== "") {
      if (activoOc){
        if (!modalPartido){
          if (document.getElementById("categoriaOctavos").value != null) {
            document.getElementById("categoriaOctavos").value = categoriaOctavos;
          }
        }
      }
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
                      setActivoOc(false);
                      setActivoF(false);
                    }}
                  >
                    <TextoNav>Primera Fase</TextoNav>
                  </BotonNav>
                  <BotonNav
                    activo={"" + activoOc + ""}
                    onClick={() => {
                      setActivoPF(false);
                      setActivoOc(true);
                      setActivoF(false);
                    }}
                  >
                    <TextoNav>Semi Final</TextoNav>
                  </BotonNav>
                  <BotonNav
                    activo={"" + activoF + ""}
                    onClick={() => {
                      setActivoPF(false);
                      setActivoOc(false);
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
                {activoOc && (
                  <>
                    <Detalle>
                      <BoxCampo encabezado={"true"}>
                        <TextBox sin={"true"}>Categoria</TextBox>
                        <Select
                          type="text"
                          placeholder="Categoria"
                          required
                          id="categoriaOctavos"
                          onChange={(e) => {
                            setCategoriaOctavos(e.target.value);
                          }}
                        >
                          <option value="">Categoria</option>
                          {listaCategoria.map((datos) => {
                            return <option value={datos}>{datos}</option>;
                          })}
                        </Select>
                      </BoxCampo>
                      <BoxCampo>
                        <BotonBuscar onClick={octavos}>Buscar</BotonBuscar>
                      </BoxCampo>
                    </Detalle>
                    {seleccionoCategoriaOc && (
                      <Detalle>
                        <BoxCampo>
                          <TextBox titulo={"true"}>{encabezadoSF}</TextBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              Partido 1
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox titulo={"true"}>
                            <Text lugar={"primero"} derecha={"false"}>
                              {partido1.equipo1}
                            </Text>
                            <Text lugar={"primero"} derecha={"false"}>
                              {partido1.equipo2}
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox titulo={"true"}>
                            <Text
                              centro={"true"}
                              lugar={"primero"}
                              derecha={"false"}
                            >
                              Partido 2
                            </Text>
                          </ContenedorBox>
                          <ContenedorBox titulo={"true"}>
                            <Text lugar={"primero"} derecha={"false"}>
                              {partido2.equipo1}
                            </Text>
                            <Text lugar={"primero"} derecha={"false"}>
                              {partido2.equipo2}
                            </Text>
                          </ContenedorBox>
                        </BoxCampo>
                      </Detalle>
                    )}
                  </>
                )}
                {activoF && <>
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
                        <BotonBuscar onClick={""}>
                          Buscar
                        </BotonBuscar>
                      </BoxCampo>
                    </Detalle>
                </>}
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
      <IniciarSesion estado={modal} cambiarEstado={setModal} />
    </>
  );
}
