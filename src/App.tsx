import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Store } from './Store';
import './App.css';
import HomePage from './HomePage';
import FavPage from './FavPage';

function App() {
  const { state } = React.useContext(Store);

  console.log(state);
  return (
    <React.Fragment>
      <header className='header'>
        <h1>Rick and Morty</h1>
        <p>
          Pick your favorite episode
          {state.favourites.length > 0 && (
            <span> ({state.favourites.length})</span>
          )}
        </p>
      </header>
      <nav className='header'>
        <Link to='/'>HomePage</Link>
        <Link to='/favorites'>Favorites</Link>
      </nav>
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavPage />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
