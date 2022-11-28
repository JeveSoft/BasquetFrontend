import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Detalle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BoxCampo = styled.div`
  margin: 20px 0 12px 0;
  width: cal(100% / 2 - 20px);
  position: relative;
  z-index: 90;
`;
export const TextBox = styled.span`
  margin: 5px 10px 0px 10px;
  text-align: center;
  display: block;
  font-weight: 500;
  width: 300px;
  border: 3px solid black;
  ${(props) =>
    props.titulo === "true" &&
    css`
    width: 350px;
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
    
`;
