import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Detalle from './components/Detalle';
import Crear from './components/Crear';
import tareasData from './data';

function App() {
    const [tareas, setTareas] = useState(tareasData);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home tareas={tareas} />
                </Route>
                <Route path="/tarea/:id" exact>
                    <Detalle tareas={tareas} />
                </Route>
                <Route path="/crear" exact>
                    <Crear setTareas={setTareas} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;