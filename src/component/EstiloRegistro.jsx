import styled from 'styled-components';

export const GlobalStyles = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(135deg,#ff7c01,#000000);
`
export const ContenedorRegistro = styled.div`
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
export const Titulo = styled.div`
    font-size: 25px;
    font-weight: 500;
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
    left:95%;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff7c01;
        
    }
`
export const BotonGenerar = styled.button`
    width: 35px;
    height: 35px;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: relative;
    border-radius: 50%;
    color: black;
    margin-left: 40px;
    margin-right: 10px;
    top:40%;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff7c01;
    }
    outline: none;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
`