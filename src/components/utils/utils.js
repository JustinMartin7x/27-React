export const getList = () => {
  return fetch('https://rickandmortyapi.com/api/character').then((data) =>
    data.json()
  );
};
export const getCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((data) =>
    data.json()
  );
};
