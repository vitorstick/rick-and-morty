import React from 'react';
import { IEpisode, IEpisodeProps } from './interfaces';

export default function FavList(props: IEpisodeProps): JSX.Element[] {
  const { toggleFavAction, favourites, state } = props;

  return favourites.map((episode: IEpisode) => {
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
              toggleFavAction(state.state, state.dispatch, episode)
            }
          >
            {favourites?.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
}
