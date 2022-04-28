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

export interface IAction {
  type: string;
  payload: any;
}
