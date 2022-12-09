import React, { useState } from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, ImagenLogo } from './Nav'
import IniciarSesion from './IniciarSesion';
import {Button, Contenedor,ContenedorMain, Equipos, EquipoModal, ImgEquipo, Select} from "./EstiloEquipos"
import { useEffect } from 'react';
import { PopUpEquipo } from './PopUpEquipo';

export default function Equipo() {
  const [modal, setModal] = useState(false)
  const [equipos, setEquipos] = useState([]);
  const [equipo, setEquipo] = useState({});
  const [popUp, setpopUp] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const url = "http://127.0.0.1:8000/";
  useEffect(()=>{
    getCategorias();
    getDatos();
  },[])

  const getCategorias = async () => {
    const response = await fetch(url + "categorias");
    const data = await response.json();
    setCategorias(data);
  }
  async function getDatos(categoria){
      const response = await fetch(url+ "equipos/"+categoria);
      const data = await response.json();
      setEquipos(data);
  }

  function ponerCategoria(e){
    var categoria = document.getElementById("categoria").value;
    getDatos(categoria);
  }

  function cambiarEstadoPopUp(equipo){
   
    setEquipo(equipo);
    cerrarPopup(true);
  }

  function cerrarPopup(e){
    setpopUp(e);
  }

  document.title = "Equipo";
  return (
    <>
      {/* Navegation */}
      <Nav>
        <NavLink to="/">
          <ImagenLogo src={require("../Imagenes/LogoBlanco.png")} />
        </NavLink>
        <NavMenu>
          <NavLink to="/fixture" activeStyle>
            FIXTURE
          </NavLink>
          <NavLink to="/equipo" activeStyle>
            EQUIPOS
          </NavLink>
          <NavLink to="/tabla" activeStyle>
            TABLA DE POSICIONES
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            onClick={() => {
              setModal(!modal);
            }}
          >
            <img src={require("../Imagenes/menu.png")} />
          </NavBtnLink>
        </NavBtn>
      </Nav>
      {/*Content*/}
      <Contenedor>
        <Button>
          <label>Categoria: </label>
          <Select id="categoria" onChange={(e)=>ponerCategoria(e)}>
          <option selected="true" disabled="disabled">Categoria</option>
              {
                categorias.map(cat => {
                  return (
                    <option key={cat.TITULO} value={cat.NOMBRECATEGORIA}>{cat.NOMBRECATEGORIA} </option>
                  )
                })
              }
          
          </Select>
        </Button>
        <ContenedorMain>
          <Equipos>
            {
              equipos.map(equipo => {  
                return (
                  
                    <EquipoModal key={equipo.IDEQUIPO} onClick={()=>cambiarEstadoPopUp(equipo)}>
                      <h2>{equipo.NOMBRE}</h2>
                      {
                        equipo.LOGO == "LOGO.JPG" ?
                        <ImgEquipo src={ require("../Imagenes/equipoDefault.png") }/>
                        :
                        <ImgEquipo src={ url+ "storage/"+  equipo.LOGO }/>
                      }
                    </EquipoModal>
                    
                 
                )
              })
            }
          </Equipos>
        </ContenedorMain>
      </Contenedor >
      <b>{popUp ? <PopUpEquipo equipo={equipo} cerrarPopup={cerrarPopup}/> : ''}</b>
      
    </>
  );
}
