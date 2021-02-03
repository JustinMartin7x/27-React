import React from 'react';
import PropTypes from 'prop-types';
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
        <p key={item + Date.now()}>{item}</p>
      ))}
    </div>
  );
}

DetailPage.propTypes = {
  character: PropTypes.object.isRequired,
};
