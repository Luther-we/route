import React from 'react';
import GuyTile from '../sub/GuysTile';

const GrindTiles = ({ data }) => (
  <>
    <h2>Guys</h2>
      {data.map( (item, index) => (
          <GuyTile
            key={index}
            {...item}
          />
      ))}
  </>
)

export default GrindTiles
