import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ListItem({ item, setCharacter }) {
  return (
    <Link to={`/details:${item.id}`} onClick={() => setCharacter(item)}>
      <div className='item-container'>
        <p>{item.name}</p>
        <img src={item.image} alt={item.name} />
        <p>{item.species}</p>
      </div>
    </Link>
  );
}
ListItem.PropTypes = {
  item: PropTypes.object,
  setCharacter: PropTypes.func,
};
