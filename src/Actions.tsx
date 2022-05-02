import { Dispatch, IAction, IEpisode, IState } from './interfaces';

const URL =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode
): IAction => {
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
