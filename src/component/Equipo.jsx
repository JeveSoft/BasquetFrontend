import React, { useState } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, ImagenLogo } from "./Nav";
import IniciarSesion from "./IniciarSesion";

export default function Equipo() {
  const [modal, setModal] = useState(false);
  document.title = "Equipo";
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
      <div>equipo</div>
      <IniciarSesion estado={modal} cambiarEstado={setModal} />
    </>
  );
}
