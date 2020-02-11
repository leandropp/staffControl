import './App.css';

import React from 'react';

import BarraSuperior from './Pages/BarraSuperior/BarraSuperior';
import CadastroPessoas from './Pages/CadastroPessoas/CadastroPessoas';

const App = () => {
  return (
    <React.Fragment>
      <BarraSuperior />
      <CadastroPessoas />
    </React.Fragment>
  );
}

export default App;
