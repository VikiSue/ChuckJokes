import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import onJokesSearch from "../reducers/onJokesSearch";
import {onFavoriteAdd} from "../reducers/onFavoriteAdd";
import {SEARCH_SUCCESS} from "../../types";

export const rootReducer = combineReducers({
  searchForm: onJokesSearch,
  favorite: onFavoriteAdd,
  form: formReducer.plugin({
    search: (state, action) => {
      switch (action.type) {
        case SEARCH_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
  })
});
