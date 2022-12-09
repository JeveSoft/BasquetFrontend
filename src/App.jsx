import React from "react";
import Inicio from "./component/Inicio";
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import Fixture from "./component/Fixture"
import Equipo from "./component/Equipo"
import Tabla from "./component/Tabla"
import IniciarSesion from "./component/IniciarSesion"
import Registro from "./component/Registro";
import Administrador from "./component/Administrador";
import Delegado from "./component/Delegado";
import Arbitro from "./component/Arbitro";
import QrJugadores from "./component/QrJugadores";

export function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/fixture' component={Fixture} />
                <Route path='/equipo' component={Equipo} />
                <Route path='/tabla' component={Tabla} />
                <Route path='/iniciarSesion' component={IniciarSesion}/>
                <Route path='/registro' component={Registro}/>
                <Route path='/administrador' component={Administrador}/>
                <Route path='/delegado' component={Delegado}/>
                <Route path='/arbitro' component={Arbitro}/>
                <Route path='/qrJugadores' component={QrJugadores}/>
            </Switch>
        </Router>

    );
}  