import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContenedorGlobal = styled.div`
  width: 100%;
  height: 86.3vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #ff7c01, #000000);
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
export const NavFixture = styled.nav`
  background: black;
  height: 60px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  position: relative;
`;
export const TextBox = styled.span`
  margin: 15px 10px 0px 10px;
  text-align: center;
  display: block;
  font-weight: 1000;
  width: 100%;
  font-size: 20px;
  color: white;
`;
export const TextBoxTitulo = styled.span`
  margin: 5px 10px 0px 10px;
  text-align: center;
  display: block;
  font-weight: 500;
`;

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
  `
export const ContenedorBox = styled.div`
margin: 0px 10px 0px 10px;
display: flex;
border-bottom: 3px solid black;
${(props) =>
  props.titulo === "true" &&
  css`
    border-top: 3px solid black;
    font-size: 18px;
    color: white;
    background:  #ff7c01;
    font-weight: 700;
  `}
  ${(props) =>
  props.titulo === "false" &&
  css`
    font-size: 15px;
    font-weight: 500;
    color: black;
  `}
`;

  export const Text = styled.span`
  text-align: center;
  width: 200px;
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
`;