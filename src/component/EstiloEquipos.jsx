import styled from "styled-components";

export const Button = styled.button`
    font-size: 1em;
    border-decoration: none;
    background: transparent;
    color: white;
    padding: 10px;
    border: solid 1px white;
    border-radius: 5px;
    margin: 10px 100px;
`
export const Select = styled.select`
    display: inline-block;
    background: white;
    border-radius: 5px;
    border: none;
    color: #7b7b7b;
    outline: 0; 
    padding: 2px 5px;
    margin-left: 7px
  
`

export const Contenedor = styled.div`
    background: linear-gradient(135deg,#ff7c01,#000000); 
    min-height: 100vh;
`

export const ContenedorMain = styled.div`
    margin: auto 0; 
`

export const Equipos = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    color:white;
    text-align:center
`
export const EquipoModal = styled.div`
   
`
export const ImgEquipo = styled.img`
    max-width: 400px;
    height: 400px;
`
export const PopUpContainer = styled.div`
   background: white;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 500px;
   height: 500px;
   padding: 15px;
   color: #555;
   border-radius: 10px;
   box-shadow: 2px 3px 7px -1px rgba(0,0,0,0.76);
-webkit-box-shadow: 2px 3px 7px -1px rgba(0,0,0,0.76);
-moz-box-shadow: 2px 3px 7px -1px rgba(0,0,0,0.76);
`

export const BotonPopup = styled.button `
    border: none;
    background: red;
    border-radius: 2px;
    color: white;
    font-size: 30px;
    margin-bottom: 5px;
    padding: 0px 12px;
`

export const SelectJugador = styled.select `
display: block;
height: 45px;
width: 100%;
outline: none;
border-radius: 5px;
border: 2px solid #ff7c01;
padding-left: 15px;
padding-right: 15px;
font-size: 16px;
border-bottom-width: 2px;
transition: all 0.3s ease;
`

export const ContenedorJugadores = styled.div `
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    place-items: center;
    text-align: center;
`
export const ImgJugador = styled.img `
    width: 100px;
    height: 75px;
    place-items: center;
    text-align: center;
    margin: 10px;
`

export const ContenedorJugador = styled.div`
    /* margin-bottom: 20px; */
`