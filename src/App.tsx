import React from 'react';
import { Store } from './Store';
import './App.css';

function App() {
  const store = React.useContext(Store);
  console.log(store);
  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </React.Fragment>
  );
}

export default App;
