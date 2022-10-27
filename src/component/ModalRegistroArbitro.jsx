import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast';
import InputValidar from './InputValidar'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Category, IconoValidacion, Label, Radio, SelectNacionalidad } from './EstiloRegistro'

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
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -10px;
  padding-bottom: 10px;

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
      width: 275%;
    background: linear-gradient(135deg,#000000,#ff7c01);
    }
`
export const TituloGenero = styled.div`
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
    justify-content:space-between;
`
export const ContenedorBotones = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-content: center;
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
export const BoxCampo = styled.div`
    margin: 20px 0 12px 0;
    width: cal(100% / 2 - 20px);
    position: relative;
    z-index:90;
`
export const TextBox = styled.span`
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
`
export default function ModalRegistroArbitro({ estado, cambiarEstado }) {
    var [nombre, setNombre] = useState({ campo: "", valido: null })
    var [carnet, setCarnet] = useState({ campo: "", valido: null })
    var [correo, setCorreo] = useState({ campo: "", valido: null })
    var [celular, setCelular] = useState("")
    var [fechaNacimiento, setFechaNacimiento] = useState("")
    var [nacionalidad, setNacionalidad] = useState("")
    var [genero, setGenero] = useState("")
    var [validarFechaN, setValidarFechaN] = useState(null)
    
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        carnet: /^[a-zA-Z0-9-]{6,15}/
    }

    const validar = () => {
        if (fechaNacimiento != "") {
            var fechaActual = new Date().toISOString()
            if (fechaNacimiento < fechaActual) {
                var edad = calcularEdad(fechaNacimiento);
                if (edad > 18) {
                    setValidarFechaN('true')
                }
            } else {
                setValidarFechaN('false')
            }
        }
    }

    useEffect(function () {
        validar()
    })

    function calcularEdad(fecha_nacimiento) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha_nacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    }

    const cambioGenero = e => {
        setGenero(e.target.value)
    }

    function esValidoDelegado() {
        var valido = true
        if (nombre.campo === "") {
            toast("Ingesar Nombre Completo", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        } else {
            if (nombre.valido === 'false') {
                valido = false
                toast("Nombre Invalido", {
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
        if (carnet.campo === "") {
            toast("Ingesar Carnet Identidad", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        } else {
            if (carnet.valido === 'false') {
                valido = false
                toast("Carnet Invalido", {
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
        if (correo.campo === "") {
            toast("Ingesar Correo", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        } else {
            if (correo.valido === 'false') {
                valido = false
                toast("Correo Invalido", {
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
        if (celular === "") {
            toast("Ingesar Numero de Celular", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        } else {
            if (celular.length < 3 || celular.length > 30) {
                valido = false
                toast("Nombre Completo Invalido", {
                    icon: "⚠️", duration: 3000, style: {
                        border: '2px solid #ff7c01',
                        padding: '10px',
                        color: '#fff',
                        background: '#000',
                        borderRadius: '4%',
                    },
                });
            }
            if (!isValidPhoneNumber(celular)) {
                toast("Numero Invalido", {
                    icon: "⚠️", duration: 3000, style: {
                        border: '2px solid #ff7c01',
                        padding: '10px',
                        color: '#fff',
                        background: '#000',
                        borderRadius: '4%',
                    },
                });
                valido = false
            }
        }
        if (fechaNacimiento === "") {
            toast("Ingesar Fecha de Nacimiento", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        } else {
            var fechaActual = new Date().toISOString()
            if (fechaNacimiento < fechaActual) {
                var edad = calcularEdad(fechaNacimiento);
                if (edad < 18) {
                    valido = false
                    toast("Delegado Tiene Que Ser Mayor Edad", {
                        icon: "⚠️", duration: 3000, style: {
                            border: '2px solid #ff7c01',
                            padding: '10px',
                            color: '#fff',
                            background: '#000',
                            borderRadius: '4%',
                        },
                    });
                }
            } else {
                valido = false
                toast("Fecha de Nacimiento Invalida", {
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
        if (nacionalidad === "") {
            toast("Ingesar Nacionalidad", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        }
        if (genero === "") {
            toast("Seleccionar Genero", {
                icon: "⚠️", duration: 3000, style: {
                    border: '2px solid #ff7c01',
                    padding: '10px',
                    color: '#fff',
                    background: '#000',
                    borderRadius: '4%',
                },
            });
            valido = false
        }
        return valido
    }

    const registrarArbitro = () => {
        if (esValidoDelegado()) {
            cambiarEstado(false)
            limpiarCampo()
        }
    }

    const limpiarCampo = () => {
        setNombre({campo : "" , valido :null})
        setCarnet({campo : "" , valido :null})
        setCorreo({campo : "" , valido :null})
        setCelular("")
        setFechaNacimiento("")
        setNacionalidad("")
        setGenero("")
        setValidarFechaN(null)
    }
    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <Titulo>REGISTRAR ARBITRO</Titulo>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => { cambiarEstado(false); limpiarCampo() }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </BotonCerrar>
                        <DetalleUsuario>
                            <InputValidar
                                estado={nombre}
                                cambiarEstado={setNombre}
                                tipo="text"
                                label="Nombre Completo"
                                placeholder="Nombre Completo"
                                name="combreCompleto"
                                expresionRegular={expresiones.nombre}
                            />
                            <InputValidar
                                estado={carnet}
                                cambiarEstado={setCarnet}
                                tipo="text"
                                label="Carnet Identidad"
                                placeholder="Carnet Identidad"
                                name="carnetIdentidad"
                                expresionRegular={expresiones.carnet}
                            />
                            <InputValidar
                                estado={correo}
                                cambiarEstado={setCorreo}
                                tipo="email"
                                label="Correo"
                                placeholder="Correo"
                                name="correo"
                                expresionRegular={expresiones.correo}
                            />
                            <BoxCampo>
                                <TextBox>Numero de Celular</TextBox>
                                <PhoneInput placeholder="Numero de Celular" defaultCountry="BO" id="numeroCelular" value={celular} onChange={numeroCel => setCelular(numeroCel)} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Fecha Nacimiento </TextBox>
                                <InputBox type="date" valido={validarFechaN} placeholder="Fecha Nacimiento" required id="fechaNacimiento" onChange={(e) => { setFechaNacimiento(e.target.value) }} />
                                <IconoValidacion icon={validarFechaN === 'true' ? faCircleCheck : faCircleXmark} valido={validarFechaN} />
                            </BoxCampo>
                            <BoxCampo>
                                <TextBox>Nacionalidad</TextBox>
                                <SelectNacionalidad type="text" placeholder='Nacionalidad' required id="nacionalidad" onChange={(e) => { setNacionalidad(e.target.value) }}>
                                    <option value="">Nacionalidad</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Afganistán">Afganistán</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Alemania">Alemania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antártida">Antártida</option>
                                    <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                    <option value="Antillas Holandesas0">Antillas Holandesas</option>
                                    <option value="Arabia Saudita">Arabia Saudita</option>
                                    <option value="Argelia">Argelia</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaiján">Azerbaiján</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Bélgica">Bélgica</option>
                                    <option value="Belice">Belice</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bielorusia">Bielorusia</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Camboya">Camboya</option>
                                    <option value="Camerún">Camerún</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Chipre">Chipre</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Corea del Norte">Corea del Norte</option>
                                    <option value="Corea del Sur">Corea del Sur</option>
                                    <option value="Costa de Marfil">Costa de Marfil</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croacia">Croacia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Darussalam">Darussalam</option>
                                    <option value="Dinamarca">Dinamarca</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egipto">Egipto</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Em. Arabes Un.">Em. Arabes Un.</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Eslovaquia">Eslovaquia</option>
                                    <option value="Eslovenia">Eslovenia</option>
                                    <option value="España">España</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Etiopía">Etiopía</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Filipinas">Filipinas</option>
                                    <option value="Finlandia">Finlandia</option>
                                    <option value="Francia">Francia</option>
                                    <option value="Gabón">Gabón</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Grecia">Grecia</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Groenlandia">Groenlandia</option>
                                    <option value="Guadalupe">Guadalupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guayana Francesa">Guayana Francesa</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea Ecuatorial">Guinea Ecuatorial</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haití">Haití</option>
                                    <option value="Holanda">Holanda</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungría">Hungría</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Irak">Irak</option>
                                    <option value="Irán">Irán</option>
                                    <option value="Irlanda">Irlanda</option>
                                    <option value="Islandia">Islandia</option>
                                    <option value="Islas Cayman">Islas Cayman</option>
                                    <option value="Islas Cook">Islas Cook</option>
                                    <option value="Islas Faroe">Islas Faroe</option>
                                    <option value="Islas Marianas del Norte">Islas Marianas del Norte</option>
                                    <option value="Islas Marshall">Islas Marshall</option>
                                    <option value="Islas Solomon">Islas Solomon</option>
                                    <option value="Islas Turcas y Caicos">Islas Turcas y Caicos</option>
                                    <option value="Islas Vírgenes">Islas Vírgenes</option>
                                    <option value="Islas Wallis y Futuna">Islas Wallis y Futuna</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italia">Italia</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japón">Japón</option>
                                    <option value="Jordania">Jordania</option>
                                    <option value="Kazajstán">Kazajstán</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kirguistán">Kirguistán</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Letonia">Letonia</option>
                                    <option value="Líbano">Líbano</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libia">Libia</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lituania">Lituania</option>
                                    <option value="Luxemburgo">Luxemburgo</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malasia">Malasia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marruecos">Marruecos</option>
                                    <option value="Martinica">Martinica</option>
                                    <option value="Mauricio">Mauricio</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="México">México</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Mónaco">Mónaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Níger">Níger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Noruega">Noruega</option>
                                    <option value="Nueva Caledonia">Nueva Caledonia</option>
                                    <option value="Nueva Zelandia">Nueva Zelandia</option>
                                    <option value="Omán">Omán</option>
                                    <option value="Pakistán">Pakistán</option>
                                    <option value="Panamá">Panamá</option>
                                    <option value="Papua Nueva Guinea">Papua Nueva Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Polinesia Francesa">Polinesia Francesa</option>
                                    <option value="Polonia">Polonia</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="RD Congo">RD Congo</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="República Centroafricana">República Centroafricana</option>
                                    <option value="República Checa">República Checa</option>
                                    <option value="República Dominicana">República Dominicana</option>
                                    <option value="Reunión">Reunión</option>
                                    <option value="Rumania">Rumania</option>
                                    <option value="Rusia">Rusia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Sahara Occidental">Sahara Occidental</option>
                                    <option value="Saint Pierre y Miquelon">Saint Pierre y Miquelon</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa Americana">Samoa Americana</option>
                                    <option value="San Cristóbal y Nevis">San Cristóbal y Nevis</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Santa Elena">Santa Elena</option>
                                    <option value="Santa Lucía">Santa Lucía</option>
                                    <option value="Sao Tomé y Príncipe">Sao Tomé y Príncipe</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia y Montenegro">Serbia y Montenegro</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leona">Sierra Leona</option>
                                    <option value="Singapur">Singapur</option>
                                    <option value="Siria">Siria</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudáfrica">Sudáfrica</option>
                                    <option value="Sudán">Sudán</option>
                                    <option value="Suecia">Suecia</option>
                                    <option value="Suiza">Suiza</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swazilandia">Swazilandia</option>
                                    <option value="Taiwán">Taiwán</option>
                                    <option value="Uruguay">Uruguay</option>
                                </SelectNacionalidad>
                            </BoxCampo>
                        </DetalleUsuario>
                            <TituloGenero>Genero</TituloGenero>
                        <Category>
                            <Label for="dot-1">
                                <Radio type='radio' name='gender' id="dot-1" value="Hombre" checked={genero === "Hombre" ? true : false} onChange={cambioGenero} />
                                <span className='gender'>Hombre</span>
                            </Label>
                            <Label for="dot-2">
                                <Radio type='radio' name='gender' id="dot-2" value="Mujer" checked={genero === "Mujer" ? true : false} onChange={cambioGenero} />
                                <span className='gender'>Mujer</span>
                            </Label>
                        </Category>
                        <ContenedorBotones>
                            <Boton onClick={registrarArbitro}>GUARDAR</Boton>
                            <Boton onClick={() => { cambiarEstado(false); limpiarCampo() }}>CANCELAR</Boton>
                        </ContenedorBotones>
                    </ContenedorModal>
                </Overlay>
            }
            <Toaster reverseOrder={true} position="top-right" />
        </>
    )
}