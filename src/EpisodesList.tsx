import React from 'react';
import { IEpisode, IEpisodeProps } from './interfaces';

export default function EpisodesList(props: IEpisodeProps): JSX.Element[] {
  const { episodes, toggleFavAction, favourites, state } = props;

  return episodes.map((episode: IEpisode) => {
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
