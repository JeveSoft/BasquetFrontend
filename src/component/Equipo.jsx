import React, { useState } from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, ImagenLogo } from './Nav'
import IniciarSesion from './IniciarSesion';
import {Button, Contenedor,ContenedorMain, Equipos, EquipoModal, ImgEquipo, Select} from "./EstiloEquipos"
import { useEffect } from 'react';
import axios from 'axios';
import { PopUpEquipo } from './PopUpEquipo';

export default function Equipo() {
  const [modal, setModal] = useState(false)
  const [equipos, setEquipos] = useState([]);
  const [equipo, setEquipo] = useState({});
  const [categoria, setCategoria] = useState("+35");
  const [popUp, setpopUp] = useState(false);
  
  useEffect(()=>{
    getDatos();
  },categoria)

  async function getDatos(){
      setCategoria(document.getElementById("categoria").value);
      const response = await fetch("http://localhost:8000/equipos/"+categoria);
      const data = await response.json();
      setEquipos(data);
      console.log(data);
  }

  function ponerCategoria(){
    setCategoria(document.getElementById("categoria").value);
    //console.log(categoria);
  }

  function cambiarEstadoPopUp(equipo){
    /* if(popUp){
       setpopUp(false);
    }else{
       setpopUp(true);
    } */
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
          <Select id="categoria" onClick={()=>ponerCategoria()}>
              <option value="+35">+35</option>
              <option value="+45">+45</option>
              <option value="+55">+55</option>
          </Select>
        </Button>
        <ContenedorMain>
          <Equipos>
            {
              equipos.map(equipo => {  
                return (
                  
                    <EquipoModal key={equipo.IDEQUIPO} onClick={()=>cambiarEstadoPopUp(equipo)}>
                      <h2>{equipo.NOMBRE}</h2>
                  {/*<img src={require(equipo.LOGO)} />*/}
                      <ImgEquipo src={require('../Imagenes/LakersImage.jpg')} />
                    </EquipoModal>
                    
                 
                )
              })
            }
          </Equipos>
        </ContenedorMain>
      </Contenedor >
      <b>{popUp ? <PopUpEquipo equipo={equipo} cerrarPopup={cerrarPopup}/> : ''}</b>
      <IniciarSesion
        estado={modal}
        cambiarEstado={setModal}
      />
    </>
  );
}
