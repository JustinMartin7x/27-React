import React, { useState, useEffect } from 'react';
import { getCharacter, getList } from '../utils/utils';
import ListItem from '../listitems/ListItem';

export default function Home({ character, setCharacter }) {
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
          characters.map((item, key) => (
            <li>
              <ListItem item={item} setCharacter={setCharacter} key={item.id} />
            </li>
          ))
        ) : (
          <div>Loading</div>
        )}
      </ul>
    </div>
  );
}
