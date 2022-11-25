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