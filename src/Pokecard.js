import React from 'react';
import './Pokecard.css';

const Pokecard = ({name, image, type, exp}) => {
    return (
      <div className="Pokecard">
        <p className="Pokecard-title">{name}</p>
        <img alt={name} src={image} width={200}/>
        <p>Type: {type}</p>
        <p>EXP : {exp}</p>
      </div>
    )
  }

export default Pokecard;