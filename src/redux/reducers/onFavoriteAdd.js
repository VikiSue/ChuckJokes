import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from "../../types";

const initialState = [];
export const onFavoriteAdd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      let newFavorite = action.payload.jokes.filter(
        joke => joke.id === action.payload.id
      );
      return state.length ? [...state, ...newFavorite] : [...newFavorite];

    case DELETE_FROM_FAVORITE:
      return state.filter(joke => joke.id !== action.payload);

    default:
      return state;
  }
};
