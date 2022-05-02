import React from 'react';
import { IEpisodeProps } from './interfaces';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const FavList = React.lazy<any>(() => import('./FavList'));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          <FavList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
