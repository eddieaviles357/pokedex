import React from 'react';

const Pokecard = ({name, image, type, exp}) => {
    return (
      <>
        <p>{name}</p>
        <img alt={name} src={image} width={200}/>
        <p>type: {type}</p>
        <p>EXP : {exp}</p>
      </>
    )
  }

export default Pokecard;