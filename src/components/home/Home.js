import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getList } from '../utils/utils';
import ListItem from '../listitems/ListItem';

export default function Home({ setCharacter }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setCharacters(items.results);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className='body'>
      <div className='banner'> RICK AND MORTY WUBBA LUBBA DUB DUB</div>
      <ul>
        {characters.length ? (
          characters.map((item) => (
            <li key={item.id + Date.now()}>
              <ListItem item={item} setCharacter={setCharacter} />
            </li>
          ))
        ) : (
          <div>Loading</div>
        )}
      </ul>
    </div>
  );
}
Home.propTypes = {
  setCharacter: PropTypes.func,
};
