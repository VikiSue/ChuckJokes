import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import onJokesSearch from "../reducers/onJokesSearch";
import {onFavoriteAdd} from "../reducers/onFavoriteAdd";


export const rootReducer = combineReducers({
  searchForm: onJokesSearch,
  favorite: onFavoriteAdd,
  form: formReducer
});
