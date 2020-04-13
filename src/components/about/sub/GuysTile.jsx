import React from 'react';

const GuyTile = ({name, age, skill} ) => {
  return (
    <>
      <h3>
        {name}
      </h3>
      <p> Agé de {age}, {name} est {skill} chez nous. </p>
    </>
  )
}

export default GuyTile;
