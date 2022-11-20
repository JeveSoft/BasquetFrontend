import React from "react";
import {
  Dot,
  Container,
  ImageContainer,
  NavBoton,
  DotContainer,
} from "./Carusel";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import IniciarSesion from "./IniciarSesion";
import { Toaster } from "react-hot-toast";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  position: absolute;
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  &.active {
    color: #fc4415;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fc4415;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  width: 100vw;
  white-space: nowrap;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
`;
export const NavBtnLink = styled.button`
  border-radius: 4px;
  padding: 10px 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background: none;
`;
export const ImagenLogo = styled.img`
  position: relative;
  height: 100px;
  width: 80px;
  left: 4%;
  top: 20px;
  cursor: pointer;
  padding: 0%;
`;
export default function Inicio() {
  const [imageIndex, setImageIndex] = useState(0);
  const imagenes = ["1.jpg", "2.jpg", "3.jpg"];
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  });

  const next = () => {
    setLoaded(false);
    setTimeout(() => {
      if (imageIndex + 1 > imagenes.length - 1) setImageIndex(0);
      setImageIndex((state) => (state += 1));
      if (imageIndex === imagenes.length - 1) setImageIndex(0);
    }, 500);
  };

  const prev = () => {
    setLoaded(false);
    setTimeout(() => {
      if (imageIndex - 1 < 0) setImageIndex(imagenes.length - 1);
      setImageIndex((state) => (state -= 1));
      if (imageIndex === 0) setImageIndex(imagenes.length - 1);
    }, 500);
  };
  document.title = "Inicio";
  return (
    <>
      <Nav>
        <NavLink to="/">
          <ImagenLogo src={require("../Imagenes/Logo.png")} />
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
      <Container>
        <ImageContainer
          src={require("../Imagenes/" + imagenes[imageIndex])}
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
        <NavBoton right onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </NavBoton>
        <NavBoton left onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </NavBoton>
        <DotContainer>
          {imagenes.map((dot, index) => (
            <Dot key={dot} active={index === imageIndex} />
          ))}
        </DotContainer>
        <IniciarSesion estado={modal} cambiarEstado={setModal} />
      </Container>
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
