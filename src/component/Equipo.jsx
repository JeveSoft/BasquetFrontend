import React from 'react'
import { Nav,NavLink,NavMenu,NavBtn,NavBtnLink } from './Nav'

export default function Equipo() {

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
          <NavBtnLink to = '/prueba'>INICIAR SESION</NavBtnLink>
        </NavBtn>
      </Nav>
      <div>equipo</div>
    </>

  )
}
