import React from 'react';

interface IState {
  episodes: any[];
  favourites: any[];
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState>(initialState);

function reducer() {}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
