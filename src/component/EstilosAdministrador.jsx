import styled, { css } from 'styled-components';

export const ContenedorPrincipal = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    background: linear-gradient(135deg,#ff7c01,#000000);
`
export const ContenedorOpciones = styled.div`
    width: 20%;
    height:100vh;
    background: black;
`
export const Imagen = styled.img`
    position: absolute;
    height: 300px;
    width: 300px;
    left: 49%;
    top: 28%;
    border: 3px solid white;
    background: black;
    border-radius: 50%;
`
export const Titulo = styled.div`
    font-size: 25px;
    font-weight: 500;
    position: relative;
    color: white;
    top: 15px;
    &::before{
        content: "";
    position:absolute;
    margin-top: 50px;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg,#ff7c01,#000000);
    }
`
export const Titulo2 = styled.div`
    font-size: 25px;
    font-weight: 500;
    position: relative;
    color: black;
    top: 15px;
    &::before{
        content: "";
    position:absolute;
    margin-top: 50px;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg,#ff7c01,#000000);
    }
`
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
    &.active{
        color: #fc4415;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fc4415;
        
    }
`
export const ContenedorBotones = styled.div`
    width: 20%;
    height:50vh;
    top: 230px;
    position: absolute;
`
export const BotonLogo = styled.button`
    position: absolute;
    height: 100px;
    width: 100px;
    top: 100px;
    left: 6%;
    border-radius: 50%;
    border: 3px solid white;
    background: black;
    margin-bottom: 50px;
`
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
`
export const Detalle = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
`
export const BoxCampo = styled.div`
    margin: 20px 0 5px 0;
    width: cal(100% / 2 - 20px);
`
export const TextBox = styled.span`
    margin-top: 5px;
    margin-bottom: 5px;
    display: block;
    font-weight: 500;
    width: 300px;
`
export const InputBox = styled.input`
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ff7c01;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    &:focus{
        border-color: black;
    }
    &:valid{
        border-color: green;
    }
    &:hover{
        border-color: black;
    }  
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
    margin-top: 10px;
    border-radius: 50%;
    color: black;
    left: 95%;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff7c01;
        
    }
`
export const ContenedorBoton = styled.div`
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
    border: 1px solid #ff7c01;
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
        border: 2px solid black;
    }
`