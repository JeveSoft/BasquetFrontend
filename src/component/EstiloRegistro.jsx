import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav = styled.nav`
    background: #000;   
    height:80px;
    width: 100vw;
    display:flex;
    justify-content:flex-start;;
    padding:0.5rem calc((100vw-1000px)/2);
    z-index:10;
    position: relative;
`
export const ImagenPago = styled.img`
    height: 300px;
    width: 300px;
`
export const DetalleUsuarioPago = styled.div`
    margin-left: 25%;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content:center;
    align-content: center;
`
export const CategoryPago = styled.div`
    display: flex;
    width: 50%;
    margin-left: 20%;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
`
export const GlobalStyles = styled.div`
    display: flex;
    height: 87.8vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(135deg,#ff7c01,#000000);
`
export const ContenedorRegistro = styled.div`
    max-width: 775px;
    width: 100%;
    top: 10px;
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
`
export const Titulo = styled.div`
    font-size: 25px;
    font-weight: 1000;
    position: relative;
    &::before{
        content: "";
    position:absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg,#000000,#ff7c01);
    }
`
export const DetalleUsuario = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
`
export const BoxCampo = styled.div`
    margin: 20px 0 12px 0;
    width: cal(100% / 2 - 20px);
    position: relative;
    z-index:90;
`
export const BoxBoton = styled.div`
    margin: 20px 0 12px 0;
    width: cal(100% / 2 - 20px);
`
export const TextBox = styled.span`
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
`
export const InputBox = styled.input`
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 2px solid #ff7c01;
    padding: 0 40px 0 10px ;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.1s ease;
    line-height: 45px;
    &:hover{
        border: 2px solid black;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
    &:focus{
        border: 2px solid black;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
    ${props => props.valido === 'true' && css`
        border: 3px solid green;
    `}
    ${props => props.valido === 'false' && css`
        border: 3px solid red;
    `}
`
export const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 12px;
    bottom: 14px;
    z-index:100;
    font-size: 20px;
    opacity: 0;
    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: red;
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: green;
    `}
`
export const Category = styled.div`
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
`
export const Label = styled.label`
    display: flex;
    align-items: center;
`
export const Radio = styled.input`
    height: 18px;
    width: 18px;
    background: #ff7c01;
    border-radius: 50%;
    margin-right: 10px;
`
export const NavBoton = styled.button`
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
    ${(props) => props.left === true ? css`right:0%;` : css`left:89%;`}
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff7c01;
        
    }
`
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
    left: 95%;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff7c01;
        
    }
`
export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;
    width: 85vw;
    white-space: nowrap;
    
`
export const BotonNavegacion = styled.button`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    background: transparent;
    &.active{
        color: #fc4415;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fc4415;
        
    }
`
export const ContenedorBotones = styled.div`
    margin-top: 10px;
`
export const InputFile = styled.input`

`
export const LabelFile = styled.label`
    text-transform: uppercase;
    text-align: center;
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 2px solid #ff7c01;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    color: black;
    &:hover{
        transform: scale(1.02);
    }
    &:active{
        background-color: #ff7c01;
        color: black;
        border: 3px solid black;
    }
`
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
    
    &:focus{
        border: 2px solid black;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
    &:valid{
        border: 3px solid green;
    }
    &:hover{
        border: 2px solid black;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
`