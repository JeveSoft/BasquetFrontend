import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast';
import InputValidar from './InputValidar';
import axios from 'axios';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContenedorModal = styled.div`
  width: 350px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 25px;
  ${props => props.tipo === 'categoria' && css`
       width: 550px;
       height: 290px;
    `}
`
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
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
      width: 125%;
    background: linear-gradient(135deg,#000000,#ff7c01);
    }
    ${props => props.tipo === 'categoria' && css`
       width: 405px;
    `}
`
const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: black;
  &:hover{
    background: #c9c9c9;
  }
`
export const DetalleUsuario = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`
export const InputBox = styled.input`
    margin-bottom: 10px;
    height: 40px;
    text-align: center;
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
    &:hover{
        border-color: black;
    }
`
export const Boton = styled.button`
  background: #ff7c01;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  width: 110px;
  margin: 10px;
  height: 40px;
  font-size: 16px;
  &:hover{
    background: black;
    color: #ff7c01;
  }
        
`
export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    margin-bottom: 20px;
    
`
export const BoxCampo = styled.div`
    margin: 10px 0 5px 0;
    width: cal(100% / 2 - 20px);
    position: relative;
    z-index:90;
`
export const TextBox = styled.div`
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
    text-align: center;
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
export const InputFile = styled.input`
`
export const ContenedorBotones = styled.div`
    width: 50%;
    position: absolute;
    margin-top: 165px;
`
export default function ModalAñadirInformacion({ estado, cambiarEstado, tipo, titulo }) {
    const [categoria, setCategoria] = useState("")
    const [edadMin, setEdadMin] = useState("")
    const [edadMax, setEdadMax] = useState("")
    const url = "http://127.0.0.1:8000/"

    const validarEdad = () => {
        var valido = false
        if (edadMin.campo < edadMax.campo){
            valido = true
        }
        return valido
    }

    const subirDatos = () => {
        if (validarEdad()){
            const datos = {
                "NOMBRECATEGORIA": categoria.campo,
                "EDADMIN": edadMin.campo,
                "EDADMAX": edadMax.campo
            }
            axios.post(url+'añadirCategoria',datos).then(response => {
                setCategoria("")
                setEdadMin("")
                setEdadMax("")
                cambiarEstado(false)
                console.log("se subio")
            })
        }else{
            toast("Verificar Edad Minima y Edad Maxima", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
        }
    }

    const cancelar = () => {
        setCategoria("")
        setEdadMin("")
        setEdadMax("")
        cambiarEstado(false)
    }

    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal tipo={tipo}>
                        <EncabezadoModal>
                            <Titulo tipo={tipo}>{titulo}</Titulo>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => { cambiarEstado(false) }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </BotonCerrar>
                        {
                            tipo == 'reglamento' &&
                            <DetalleUsuario>
                                <BoxCampo>
                                    <TextBox>REGLAMENTO</TextBox>
                                    <InputFile type="file" name="" id="foto" hidden />
                                    <LabelFile for="foto" id='imagenLogo'>Seleccionar Archivo</LabelFile>
                                </BoxCampo>
                                <Boton onClick={() => { cambiarEstado(false) }}>Guardar</Boton>
                                <Boton onClick={() => { cambiarEstado(false) }}>Cancelar</Boton>
                            </DetalleUsuario>
                        }
                        {tipo == 'categoria' &&
                            <DetalleUsuario tipo='categoria'>
                                <InputValidar
                                    estado={categoria}
                                    cambiarEstado={setCategoria}
                                    tipo="text"
                                    label="Categoria"
                                    placeholder="Categoria"
                                    name="categoria"
                                    classe='categoria'
                                    expresionRegular={/^[a-zA-Z0-9-]{3,15}/}
                                />
                                <InputValidar
                                    estado={edadMin}
                                    cambiarEstado={setEdadMin}
                                    tipo="number"
                                    label="Edad Minima"
                                    placeholder="Edad Minima"
                                    name="edadMinima"
                                    classe='categoria'
                                    expresionRegular={/^[0-9]/}
                                />
                                <InputValidar
                                    estado={edadMax}
                                    cambiarEstado={setEdadMax}
                                    tipo="number"
                                    label="Edad Maxima"
                                    placeholder="Edad Maxima"
                                    name="edadMaxima"
                                    classe='categoria'
                                    expresionRegular={/^[0-9]/}
                                />
                                <ContenedorBotones>
                                    <Boton onClick={subirDatos}>Guardar</Boton>
                                    <Boton onClick={cancelar}>Cancelar</Boton>
                                </ContenedorBotones>
                            </DetalleUsuario>
                        }
                        {tipo == 'informacion' &&
                            <DetalleUsuario>
                                <BoxCampo>
                                    <TextBox>TITULO DE IMAGEN</TextBox>
                                    <InputBox type="text" placeholder="Titulo Imagen" required id="cantidadJugadores" />
                                </BoxCampo>
                                <BoxCampo>
                                    <TextBox>IMAGEN</TextBox>
                                    <InputFile type="file" name="" id="foto" hidden />
                                    <LabelFile for="foto" id='imagenLogo'>Seleccionar Archivo</LabelFile>
                                </BoxCampo>
                                <Boton onClick={() => { cambiarEstado(false) }}>Guardar</Boton>
                                <Boton onClick={() => { cambiarEstado(false) }}>Cancelar</Boton>
                            </DetalleUsuario>
                        }
                    </ContenedorModal>
                </Overlay>
            }
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )
}