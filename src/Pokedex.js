import React from 'react';
import Pokecard from './Pokecard';


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

export default Pokedex;