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
export const Botones = styled.button`
  margin-top: 10px;
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
export const ContenedorBotones = styled.div`
  width: 20%;
  height: 50vh;
  top: 250px;
  position: absolute;
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
export const Detalle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 70px;
  background: transparent;
  ${(props) =>
    props.sin === "true" &&
    css`
      margin-top: 0px;
      justify-content: center;
      text-align: center;
      align-items: center;
    `}
    ${(props) =>
    props.fecha === "true" &&
    css`
      margin-top: 0px;
    `}
  ${(props) =>
    props.grupo === "true" &&
    css`
      margin-top: 0px;
      overflow-y: auto;
      max-height: 272px;
      height: 272px;
    `}
    ${(props) =>
    props.grupo === "false" &&
    css`
      margin-top: 15px;
      overflow-y: auto;
      max-height: 420px;
      height: 420px;
    `}
`;
export const BoxCampo = styled.div`
  margin: 20px 0 12px 0;
  width: cal(100% / 2 - 20px);
  position: relative;
  z-index: 90;
  ${(props) =>
    props.semiFinal === "true" &&
    css`
      margin: -5px 10px 0 10px;
    `}
    ${(props) =>
    props.hora === "true" &&
    css`
      width: 150px;
    `}
  ${(props) =>
    props.lugar === "true" &&
    css`
      margin: 10px 0 0 0;
    `}
    ${(props) =>
    props.lugar === "false" &&
    css`
      margin: 0px 0 0 0;
      width: 130px;
    `}
  ${(props) =>
    props.grupo === "true" &&
    css`
      margin-top: 0px;
      margin-bottom: 0px;
      text-align: center;
    `}
`;
export const BoxCampoBoton = styled.div`
  width: 250px;
  position: relative;
  ${(props) =>
    props.text === "true" &&
    css`
      margin: 20px 0 0 0;
    `}
  ${(props) =>
    props.text === "false" &&
    css`
      margin: 5px 0 0 0;
    `}
`;
export const TextBox = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
  font-weight: 500;
  width: 300px;
  ${(props) =>
    props.hora === "true" &&
    css`
       width: 150px;
    `}
  ${(props) =>
    props.grupo === "true" &&
    css`
      margin-top: 0px;
      text-align: center;
      border-top: 5px solid #000000;
      border-bottom: 5px solid #000000;
      border-left: 5px solid #000000;
      border-right: 5px solid #000000;

    `}
    ${(props) =>
    props.ultimo === "true" &&
    css`
      border-bottom: 5px solid black;
    `}
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
`;
export const BotonAñadir = styled.button`
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
export const ImgCarga = styled.img`
  width: 75%;
  height: 75%;
  margin-left: 10%;
  margin-top: 10%;
  ${(props) =>
    props.grupo === "true" &&
    css`
      margin-top: 0px;
      width: 95%;
      height: 125%;
      margin-left: 0%;
      margin-top: -68px;
    `}
    ${(props) =>
    props.grupo === "false" &&
    css`
      margin-top: 0px;
      width: 95%;
      height: 95%;
      margin-left: 0%;
      margin-top: -10%;
    `}
`;
export const ContenedorBoton = styled.div`
  width: 32%;
`;
export const InputFile = styled.input``;
export const LabelFile = styled.label`
  text-transform: uppercase;
  text-align: center;
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ff7c01;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  color: black;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    background-color: #ff7c01;
    color: black;
    border: 2px solid black;
  }
`;
export const ContenedorTable = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 400px;
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
  ${(props) =>
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
    `}
`;
export const BotonVer = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  align-content: center;
  &:hover {
    background: #ff7c01;
  }
  svg {
    margin-top: 3px;
    width: 60%;
    height: 60%;
  }
`;
export const LetraCuerpo = styled.h1`
  color: black;
  width: 216px;
  font-size: 18px;
  font-weight: 1000;
  margin-top: 10px;
  svg {
    height: 20px;
    width: 100%;
  }
  ${(props) =>
    props.id === "true" &&
    css`
      width: 112px;
    `}
  ${(props) =>
    props.name === "true" &&
    css`
      width: 320px;
    `}
    ${(props) =>
    props.titulo === "true" &&
    css`
      width: 464px;
    `}
`;
export const Nav = styled.nav`
  background: black;
  height: 65px;
  width: 91.4%;
  display: flex;
  margin-top: 20px;
  position: absolute;
`;
export const Texto = styled.h1`
  font-size: 20px;
  justify-content: center;
  font-weight: 1000;
`;
export const NavBotonMenu = styled.button`
  height: 60px;
  background: transparent;
  cursor: pointer;
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
  ${(props) =>
    props.dos === "true" &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.activo === "" &&
    css`
      color: #fff;
    `}
`;
export const ImagenLogo = styled.img`
  position: absolute;
  height: 200px;
  width: 150px;
  top: 100px;
  left: 4%;
  cursor: pointer;
`;
export const SelectNacionalidad = styled.select`
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
  &:valid {
    border: 3px solid green;
  }
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
