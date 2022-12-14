import styled from "styled-components";
import { Link} from 'react-router-dom';
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
    /* display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center; */
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    /* align-items: center; */
    color:white;
    text-align:center
`
export const EquipoModal = styled.div`
   position: relative;
`
export const ImgEquipo = styled.img`
    max-width: 300px;
    height: 300px;
    border-radius: 10px;
    
`
export const PopUpContainer = styled.div`
   background: white;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: auto;
   height: auto;
   padding: 15px;
   color: #555;
   border-radius: 10px;
   box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
   z-index: 3;
`

export const BotonPopup = styled.button `
    border: none;
    background: none;
    border-radius: 2px;
    color: black;
    /* font-size: 30px;
    padding: 0px 12px; */
`
export const LineaPopUp = styled.div`
    height: 3px;
    margin: 5px 0px;
    background: linear-gradient(135deg, #000000, #ff7c01);
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
 &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
&:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
}`

export const ContenedorJugadores = styled.div `
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
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

export const BotonDescarga = styled.a`
display: inline-block;
background: #ff7c01;
margin-bottom: 10px;
border-radius: 5px;
text-decoration: none;
color: black;
padding: 10px;
transition: all 0.2s ease-in-out;
width: 200px;
height: 40px;
font-size: 16px;
text-align: center;
border: 1px solid black;
&:hover {
  background: black;
  color: #ff7c01;
}`;

export const ContenedorExcel = styled.div`
`;
export const BotonDescargaLink = styled(Link)`
display: inline-block;
background: #ff7c01;
margin-bottom: 10px;
border-radius: 5px;
text-decoration: none;
color: black;
padding: 10px;
transition: all 0.2s ease-in-out;
width: 200px;
height: 40px;
font-size: 16px;
text-align: center;
border: 1px solid black;
&:hover {
  background: black;
  color: #ff7c01;
}`;

export const BotonMasInfo = styled.button`
    position: absolute;
    top:10;
    left:0;
    color: black;
    text-decoration: none;
    border: none;
    z-index: 1;
`
export const BotonJugadores = styled.button`
    position: absolute;
    top:10;
    right:0px;
    color: black;
    text-decoration: none;
    border: none;
    z-index: 2;
`
export const PopUpJugadoresS = styled.div`
    background-color: white;
`
export const TablaJugadores = styled.table`
    text-align: left;
    
`
