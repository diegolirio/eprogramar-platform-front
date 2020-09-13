import React from 'react';
import logo from './logo.png';
import { Helmet } from "react-helmet";
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>e-Programar Platform</title>
        <meta name="description" content="e-Programar Platform" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          e-Programar Platform 
        </h1>

        <h5 className="App-subTitle">
          Plataforma para estudo de Programação
        </h5>
      </header>
    </div>
  );
}

export default App;
