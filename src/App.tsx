import React from 'react';
import { IEpisode, Store } from './Store';
import './App.css';

function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    });
  };

  return (
    <React.Fragment>
      <header className='header'>
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
      </header>
      <section className='episode-layout'>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className='episode-box'>
              <img
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section className='episode-summary'>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button
                  type='button'
                  onClick={() =>
                    dispatch({ type: 'ADD_FAV', payload: episode })
                  }
                >
                  Favorite
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
