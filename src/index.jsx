import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.css'
import { PokemonsProvider } from './components/context/pokemonsContext';

ReactDOM.render(
  <React.StrictMode>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
