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
interface IState {
  episodes: IEpisode[];
  favourites: IEpisode[];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, action.payload] };

    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
