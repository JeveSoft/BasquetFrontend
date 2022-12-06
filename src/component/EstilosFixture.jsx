import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Detalle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxCampo = styled.div`
  margin: 20px 0 12px 0;
  width: cal(100% / 2 - 20px);
  position: relative;
  z-index: 90;
  ${(props) =>
    props.encabezado === "true" &&
    css`
      display: flex;
      width: 300px;
      margin-top: 10px;
      justify-content: center;
      text-align: center;
      align-items: center;
    `}
`;
export const TextBox = styled.span`
  margin: 5px 10px 0px 10px;
  text-align: center;
  display: block;
  font-weight: 500;
  border: 3px solid black;
  ${(props) =>
    props.sin === "true" &&
    css`
      border: 3px solid transparent;
    `}
`;
export const ContenedorBox = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  border-bottom: 3px solid black;
  ${(props) =>
    props.titulo === "true" &&
    css`
      border-right: 3px solid black;
    `}
`;
export const Text = styled.span`
  text-align: center;
  font-weight: 500;
  width: 150px;
  ${(props) =>
    props.centro === "true" &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.derecha === "true" &&
    css`
      border-left: 3px solid black;
      border-right: 3px solid black;
    `}
  ${(props) =>
    props.derecha === "false" &&
    css`
      border-left: 3px solid black;
    `}
    ${(props) =>
    props.derecha === "medio" &&
    css`
      border-left: 3px solid black;
      width: 50px;
    `}
    ${(props) =>
    props.derecha === "vacio" &&
    css`
      border-left: 3px solid black;
      width: 200px;
    `}
`;
export const ContenedorPrincipal = styled.div`
  width: 650px;
  height: 450px;
  justify-content: center;
  background: white;
  border-radius: 5px;
  position: relative;
  margin: 50px 25px 50px 25px;
  overflow-y: auto;
`;
export const ContenedorGlobal = styled.div`
  width: 100%;
  height: 86.3vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #ff7c01, #000000);
`;
export const Select = styled.select`
  height: 45px;
  width: 210px;
  align-content: center;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ff7c01;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  &:valid {
    border: 3px solid green;
  }
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;

export const BotonBuscar = styled.button`
  width: 100px;
  margin-left: 5px;
  height: 45px;
  margin-top: -10px;
  color: #ff7c01;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  border: 2px solid #ff7c01;
  border-radius: 5px;
  font-weight: 1000;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff7c01;
    border: 2px solid black;
    color: black;
  }
`

export const Boton = styled.button`
  width: 100%;
  height: 40px;
  color: #ff7c01;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  margin-top: 10px;
  border: 2px solid #ff7c01;
  border-radius: 5px;
  font-weight: 1000;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff7c01;
    border: 2px solid black;
    color: black;
  }
`;
export const Img = styled.img`
  width: 35px;
  height: 35px;
`;
export const NavFixture = styled.nav`
  background: black;
  height: 60px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  position: relative;
`;
export const BotonNav = styled.button`
  height: 60px;
  background: transparent;
  cursor: pointer;
  width: 200px;
  margin-right: 5px;
  margin-left: 5px;
  border: transparent;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fc4415;
    border-bottom: 8px solid #fc4415;
  }
  ${(props) =>
    props.activo === "true" &&
    css`
      color: #fc4415;
      border-bottom: 8px solid #fc4415;
    `}
`;
export const TextoNav = styled.h1`
  font-size: 20px;
  justify-content: center;
  font-weight: 1000;
  color: #fc4415;
`;
