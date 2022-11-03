import React, { useState } from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './Nav'
import IniciarSesion from './IniciarSesion';
import { ImagenLogo } from './Inicio';
export default function Tabla() {
  const [modal, setModal] = useState(false)
  document.title = "Tabla Posiciones"
  return (
    <>
      <Nav>
        <NavLink to="/">
        <ImagenLogo src={require('../Imagenes/LogoBlanco.png')} />
        </NavLink>
        <NavMenu>
          <NavLink to='/fixture' activeStyle>
            FIXTURE
          </NavLink>
          <NavLink to='/equipo' activeStyle>
            EQUIPOS
          </NavLink>
          <NavLink to='/tabla' activeStyle>
            TABLA DE POSICIONES
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={() => { setModal(!modal) }}>
            <img src={require('../Imagenes/menu.png')} />
          </NavBtnLink>
        </NavBtn>
      </Nav>
      <div>tabla</div>
      <IniciarSesion
        estado={modal}
        cambiarEstado={setModal}
      />
    </>

  )
}