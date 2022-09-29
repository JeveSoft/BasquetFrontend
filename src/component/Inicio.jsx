import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './Nav'
import { Dot, Container, ImageContainer, NavBoton, DotContainer } from './Carusel'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export default function Inicio() {
  const [imageIndex, setImageIndex] = useState(0)
  const imagenes = ["1.jpg", "2.jpg", "3.jpg"]
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 3000)
    return () => clearInterval(interval);
  })

  const next = () => {
    setLoaded(false)
    setTimeout(() => {
      if (imageIndex + 1 > imagenes.length - 1) setImageIndex(0)
      setImageIndex(state => state += 1)
      if (imageIndex === imagenes.length - 1) setImageIndex(0)
    }, 500)

  }

  const prev = () => {
    setLoaded(false)
    setTimeout(() => {
      if (imageIndex - 1 < 0) setImageIndex(imagenes.length - 1)
      setImageIndex(state => state -= 1)
      if (imageIndex === 0) setImageIndex(imagenes.length - 1)
    }, 500)
  }

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
      <Container>
        <ImageContainer src={require('../Imagenes/' + imagenes[imageIndex])} className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
        <NavBoton right onClick={next} >
          <FontAwesomeIcon icon={faChevronRight} />
        </NavBoton>
        <NavBoton left onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </NavBoton>
        <DotContainer>
          {
            imagenes.map((dot, index) => (
              <Dot key={dot} active={index === imageIndex} />
            ))
          }
        </DotContainer>
      </Container>
    </>

  )
}
