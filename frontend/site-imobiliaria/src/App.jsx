import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Inicio from './Views/inicio/Inicio';
import Empresa from './Views/empresa/Empresa';
import Anuncie from './Views/anuncie/Anuncie';
import Pesquisar from './Views/pesquisar/Pesquisar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/anuncie" component={Anuncie} />
          <Route exact path="/empresa" component={Empresa} />
          <Route exact path="/empresa" component={Empresa} />
          <Route exact path="/pesquisar" component={Pesquisar} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
