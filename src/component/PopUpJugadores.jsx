import { useScrollTrigger } from "@material-ui/core";
import { useEffect, useState } from "react";
import { React } from "react";
import styled from "styled-components";
import { url,urlImage } from "../services/const";
import { PopUpContainer, BotonPopup, LineaPopUp, ImgJugador, TablaJugadores } from "./EstiloEquipos";
export function PopUpJugadores({ equipo, cerrarPopupJugadores }) {
  const SpanBold = styled.span`
    font-weight: bold;
  `;
   const Td = styled.td`
    padding: 0px 5px; 
`

  const [jugadores, setJugadores] = useState([]);
  const obtenerJugadores = async () => {
    const response = await fetch(url + "obtenerJugadores/" + equipo.IDEQUIPO);
    const data = await response.json();
    setJugadores(data);
    console.log(data);
  };
  useEffect(() => {
    obtenerJugadores();
  }, []);
  return (
    <PopUpContainer>
      <BotonPopup onClick={() => cerrarPopupJugadores(false)}>x</BotonPopup>
      <LineaPopUp></LineaPopUp>
      <TablaJugadores>
        <tr>
          <Td></Td>
          <th><strong>Nombre Jugador</strong></th>
          <th><strong>FechaNacimiento</strong></th>
          <th><strong>Rol</strong></th>
        </tr>
        {jugadores.map((jugador,index) => {
          return (
            <tr key={jugador.IDEJUGADOR}>
              <th><strong>{index+1}</strong></th>
              <Td>{jugador.NOMBREJUGADOR}</Td>
              <Td>{jugador.FECHANACIMIENTO}</Td>
              <Td>{jugador.ROL}</Td>
            </tr>
          );
        })}
      </TablaJugadores>
    </PopUpContainer>
  );
}
