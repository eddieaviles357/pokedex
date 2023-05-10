import React from 'react';
import ReactDOM from 'react-dom/client';
import pokemon from './pokemon';
import Pokedex from './Pokedex';

const App = () => {
  return (
    <div>
      <Pokedex pokemon={pokemon}/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);