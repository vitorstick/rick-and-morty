import React from 'react';
import { Store } from './Store';
import './App.css';
import { IEpisode, IAction } from './interfaces';

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

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.find(
      (fav: IEpisode) => fav.id === episode.id
    );

    if (episodeInFav) {
      return dispatch({
        type: 'REMOVE_FAV',
        payload: episodeInFav,
      });
    }
    return dispatch({
      type: 'ADD_FAV',
      payload: episode,
    });
  };
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
                <button type='button' onClick={() => toggleFavAction(episode)}>
                  {state.favourites.find(
                    (fav: IEpisode) => fav.id === episode.id
                  )
                    ? 'Unfav'
                    : 'Fav'}
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
