import styled, { css } from "styled-components";

export const ContenedorPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #ff7c01, #000000);
`;
export const ContenedorOpciones = styled.div`
  width: 20%;
  height: 100vh;
  background: black;
`;
export const Imagen = styled.img`
  position: absolute;
  height: 400px;
  width: 325px;
  left: 47%;
  top: 28%;
`;
export const Titulo = styled.div`
  font-size: 25px;
  font-weight: 500;
  position: relative;
  color: white;
  top: 15px;
  &::before {
    content: "";
    position: absolute;
    margin-top: 50px;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg, #ff7c01, #000000);
  }
`;
export const ImagenLogo = styled.img`
  position: absolute;
  height: 200px;
  width: 150px;
  top: 100px;
  left: 4%;
  cursor: pointer;
`;
export const ContenedorBotones = styled.div`
  width: 20%;
  height: 50vh;
  top: 250px;
  position: absolute;
  background: black;
`;
export const Botones = styled.button`
  margin-top: 20px;
  width: 100%;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  background: none;
  ${(props) =>
    props.opcion === "true" &&
    css`
      color: #fc4415;
    `}
  ${(props) =>
    props.opcion === "" &&
    css`
      color: white;
    `}
    &:hover {
    transition: all 0.2s ease-in-out;
    color: #fc4415;
  }
  
`;
export const ContenedorBotonesNav = styled.div`
  width: 100%;
  ${(props) =>
    props.ultimo === "true" &&
    css`
      margin-top: 220px;
    `}
`;
export const ContenedorConfiguracion = styled.div`
  left: 15%;
  max-width: 700px;
  width: 100%;
  top: 10px;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Titulo2 = styled.div`
  font-size: 25px;
  font-weight: 1000;
  position: relative;
  color: black;
  top: 15px;
  &::before {
    content: "";
    position: absolute;
    margin-top: 50px;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg, #ff7c01, #000000);
  }
`;
export const Titulo3 = styled.div`
  font-size: 20px;
  font-weight: 1000;
  position: relative;
  color: black;
  top: 20px;
  &::before {
    content: "";
    position: absolute;
    margin-top: 50px;
    bottom: 0;
    height: 3px;
    width: 5%;
    background: linear-gradient(135deg, #ff7c01, #000000);
  }
`;
export const Detalle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${(props) =>
    props.tipo == "principal" &&
    css`
      margin-top: 30px;
    `}
`;
export const BoxCampo = styled.div`
  width: cal(100% / 2 - 20px);
  position: relative;
  margin-bottom: 15px;
  z-index: 90;
`;
export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}
`;
export const TextBoxEq = styled.span`
  display: block;
  margin-bottom: 5px;
  height: 45px;
  width: 210px;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ff7c01;
  text-align: center;
  padding-top: 8px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
`;
export const SelectEquipo = styled.select`
  height: 45px;
  width: 210px;
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
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
export const VS = styled.h1`
  margin-top: 20px;
  font-weight: 900;
`;
export const InputBox = styled.input`
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ff7c01;
  padding: 0 40px 0 10px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.1s ease;
  line-height: 45px;
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid green;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid red;
    `}
    ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}
`;
export const NavBoton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  top: 190%;
  border-radius: 50%;
  color: black;
  margin-top: 26px;
      left: 1730%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff7c01;
  }
`;
export const NavBoton1 = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  top: 40%;
  border-radius: 50%;
  color: black;
  ${(props) =>
    props.left === true
      ? css`
          right: 0%;
        `
      : css`
          left: 89%;
        `}
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff7c01;
  }
`;
export const ContenedorTable = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 270px;
  margin-top: 10px;
  ${(props) =>
    props.ventana === "2" &&
    css`
      margin-top: 70px;
    `}
  ${(props) =>
    props.ventana === "categoria" &&
    css`
      height: 350px;
      margin-top: 0px;
    `}
`;
export const Letra = styled.h1`
  color: black;
  height: 30px;
  font-size: 20px;
  font-weight: 1000;
  margin-top: 10px;
  position: relative;
  svg {
    width: 100%;
    height: 100%;
  }
  /*${(props) =>
    props.img === "true" &&
    css`
      width: 35px;
    `}
  ${(props) =>
    props.img1 === "true" &&
    css`
      width: 35px;
      left: 35px;
    `}
    ${(props) =>
    props.img2 === "true" &&
    css`
      width: 35px;
      left: 23px;
    `}
    ${(props) =>
    props.equipo === "true" &&
    css`
      width: 216px;
    `}
    ${(props) =>
    props.id === "true" &&
    css`
      width: 110px;
    `}
    ${(props) =>
    props.imagen === "true" &&
    css`
      width: 464px;
    `}*/
`;
export const LetraCuerpo = styled.h1`
  color: black;
  font-size: 18px;
  font-weight: 1000;
  margin-top: 10px;
  svg {
    height: 20px;
    width: 100%;
  }
  ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}/*
  ${(props) =>
    props.name === "true" &&
    css`
      width: 320px;
    `}
    ${(props) =>
    props.titulo === "true" &&
    css`
      width: 464px;
    `}*/
`;
export const ContenedorMedio = styled.div`
  height: 90%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BotonAnotar = styled.button`
  background: linear-gradient(135deg, #ff7c01, #000000);
  font-size: 30px;
  color: white;
  font-weight: 1000;
  border-radius: 5px;
  border: 2px solid #000000;

  &:hover {
    border: 2px solid #ff7c01;
    background: white;
    color: black;
  }
`;
