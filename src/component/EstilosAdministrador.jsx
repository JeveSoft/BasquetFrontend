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
    font-weight: 1000;
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
    ${props => props.opcion === 'true' && css`
        color: #fc4415;
    `}
    ${props => props.opcion === '' && css`
        color: white;
    `}
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
margin-top: 70px;
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
export const BotonAñadir = styled.button`
width: 32%;
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
`
export const ContenedorBoton = styled.div`
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
export const ContenedorTable = styled.div`
    width: 100%;
    overflow-y:auto;
    height: 400px;
    margin-top: 10px;
    ${props => props.ventana === '2' && css`
        margin-top: 70px;
    `}

`
export const Letra = styled.h1`
color: black;
height:30px;
font-size: 20px;
font-weight: 1000;
margin-top: 10px;
position: relative;
svg{
    width: 100%;
    height: 100%;
}
    ${props => props.img === 'true' && css`
        width: 35px;
    `}
    ${props => props.equipo === 'true' && css`
        width: 216px;
    `}
    ${props => props.id === 'true' && css`
        width: 110px;
    `}
    ${props => props.imagen === 'true' && css`
        width: 464px;
    `}
`
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
    svg{
        margin-top: 3px;
        width: 60%;
        height: 60%;
    }

`
export const LetraCuerpo = styled.h1`
color: black;    
width: 216px;
font-size: 18px;
font-weight: 1000;
margin-top: 10px;
svg{
    width: 100%;
    height: 100%;
}
${props => props.id === 'true' && css`
        width: 110px;
    `}
    ${props => props.name === 'true' && css`
        width: 320px;
    `}
    ${props => props.titulo === 'true' && css`
        width: 464px;
    `}
`
export const Nav = styled.nav`
    background: black;   
    height:65px;
    width: 91.4%;
    display: flex;
    margin-top: 20px;
    position: absolute;
`
export const Texto = styled.h1`
    font-size: 20px;
    justify-content:center;
    font-weight: 1000;
`
export const NavBotonMenu = styled.button`
    height: 60px;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    background: transparent;
    border: transparent;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fc4415;
        border-bottom: 8px solid #fc4415;
    }
    ${props => props.activo === 'true' && css`
        color: #fc4415;
        border-bottom: 8px solid #fc4415;
    `}
    ${props => props.activo === '' && css`
        color: #fff;
    `}
`