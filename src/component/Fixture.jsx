import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './Nav'

export default function Fixture() {

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>logo</h1>
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

          <NavBtnLink to='/iniciarSesion'>
            <img src={require('../Imagenes/menu.png')} />
          </NavBtnLink>
        </NavBtn>
      </Nav>
      <div>fixture</div>
    </>

  )
}