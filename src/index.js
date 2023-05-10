import React from 'react';
import ReactDOM from 'react-dom/client';
import pokemon from './pokemon';

const Pokecard = ({name, image, type, exp}) => {
  return (
    <>
      <p>{name}</p>
      <img src={image} width={200}/>
      <p>type: {type}</p>
      <p>EXP : {exp}</p>
    </>
  )
}

const Pokedex = ({pokemon}) => {
  return (
    <>
      {pokemon.map(p => (
            <Pokecard 
              key={p.id} 
              name={p.name} 
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} 
              type={p.type} 
              exp={p.base_experience}
            />))}
    </>
  )
}

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