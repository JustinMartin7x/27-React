import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailPage from '../detailPage/DetailPage';

import Home from '../home/Home';

export default function App() {
  const [character, setCharacter] = useState({});
  return (
    <>
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            component={() => (
              <Home character={character} setCharacter={setCharacter} />
            )}
          />
          <Route
            path='/details:id'
            component={() => <DetailPage character={character} />}
          />
        </Switch>
      </Router>
    </>
  );
}
