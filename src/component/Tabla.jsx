import React, { useState } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./Nav";
import IniciarSesion from "./IniciarSesion";
import { ImagenLogo } from "./Inicio";
import {
  Text,
  Detalle,
  ContenedorGlobal,
  ContenedorPrincipal,
  NavFixture,
  TextBox,
  BoxCampo,
  ContenedorBox,
  TextBoxTitulo,
} from "./EstilosTabla";
import { useEffect } from "react";
import axios from "axios";
import { BotonBuscar, Select } from "./EstilosFixture";
import toast from "react-hot-toast";
export default function Tabla() {
  const [modal, setModal] = useState(false);
  const [listaEquipos, setListaEquipos] = useState([]);
  document.title = "Tabla Posiciones";
  const [categoria, setCategoria] = useState("");
  const url = "http://127.0.0.1:8000/";
  const [listaCategoria, setListaCategoria] = useState([]);
  const [obtuvoEquipos, setObtuvoEquipos] = useState(false);

  const obtenerCategoria = () => {
    axios.get(url + "nombreCategorias").then((response) => {
      setListaCategoria(response.data);
    });
  };

  const obtenerEquipo = () => {
    if (categoria !== "") {
      axios.get(url + "equiposPuntos/" + categoria).then((response) => {
        if (response.data.length > 0) {
          setListaEquipos(ordenar(response.data));
          setObtuvoEquipos(true);
        }else{
          setListaEquipos([])
          //setObtuvoEquipos(false)
        }
      });
    } else {
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
  };

  function ordenar(lista) {
    var n, i, k, aux;
    n = lista.length;
    for (k = 1; k < n; k++) {
      for (i = 0; i < n - k; i++) {
        if (lista[i].PUNTOS < lista[i + 1].PUNTOS) {
          aux = lista[i];
          lista[i] = lista[i + 1];
          lista[i + 1] = aux;
        }
      }
    }

    for (i = 1; i < n; i++) {
      if (lista[i].PUNTOS === null) {
        lista[i].PUNTOS = "0";
      }
    }

    return lista;
  }

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

      <ContenedorGlobal>
        <ContenedorPrincipal>
          <NavFixture>
            <TextBox>TABLA POSICIONES</TextBox>
          </NavFixture>
          <Detalle>
            <BoxCampo encabezado={"true"}>
              <TextBoxTitulo sin={"true"}>Categoria</TextBoxTitulo>
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
              <BotonBuscar onClick={obtenerEquipo}>Buscar</BotonBuscar>
            </BoxCampo>
          </Detalle>
          {obtuvoEquipos && (
            <Detalle>
              <BoxCampo>
                <ContenedorBox titulo={"true"}>
                  <Text derecha={"false"}>EQUIPO</Text>
                  <Text derecha={"true"}>PUNTOS</Text>
                </ContenedorBox>
                {listaEquipos.map((datos) => {
                  return (
                    <ContenedorBox titulo={"false"}>
                      <Text derecha={"false"}>{datos.NOMBRE}</Text>
                      <Text derecha={"true"}>{datos.PUNTOS}</Text>
                    </ContenedorBox>
                  );
                })}
              </BoxCampo>
            </Detalle>
          )}
        </ContenedorPrincipal>
      </ContenedorGlobal>
    </>
  );
}
