import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DetailPage({ character }) {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      {character.episode.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
