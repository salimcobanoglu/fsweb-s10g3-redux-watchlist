import { movies } from "../movies";
import {
  REMOVE_FAV,
  ADD_FAVORITES,
  SONRAKI_FILM,
  ONCEKI_FILM,
} from "../actions/actions";

const initialState = {
  movies: movies,
  favorites: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SONRAKI_FILM:
      return { ...state, sira: state.sira + 1 };

    case ONCEKI_FILM:
      return { ...state, sira: state.sira - 1 };

    case ADD_FAVORITES:
      const favSira = action.payload;
      const yeniMovies = state.movies.filter(
        (movie) => movie.id !== movies[favSira].id
      );

      return {
        ...state,
        favorites: [...state.favorites, movies[favSira]],
        movies: yeniMovies,
        sira: state.sira - 1,
      };

    default:
      return state;
  }
};

export default reducer;
