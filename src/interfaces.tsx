import React from 'react';

export interface IEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  image: { medium: string; original: string };
  summary: string;
}

export interface IState {
  episodes: IEpisode[];
  favourites: IEpisode[];
}

export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string;
  payload: IEpisode[] | any;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  state: { state: IState; dispatch: Dispatch };
  toggleFavAction: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode
  ) => IAction;
  favourites: IEpisode[];
}
