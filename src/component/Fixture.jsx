import React, { useState } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./Nav";
import IniciarSesion from "./IniciarSesion";
import { ImagenLogo } from "./Inicio";
export default function Fixture() {
  const [modal, setModal] = useState(false);
  document.title = "Fixture";
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
      <div>hola</div>
      <IniciarSesion estado={modal} cambiarEstado={setModal} />
    </>
  );
}
