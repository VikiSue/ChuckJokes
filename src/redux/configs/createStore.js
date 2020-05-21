import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { reducer as formReducer } from "redux-form";
import { onJokesSearch } from "../reducers/onJokesSearch";

const logger = createLogger({
  collapsed: true,
  diff: true
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("favorite");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favorite", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger)
);
store.subscribe(() => {
  saveState({favorite: store.getState().favorite});
});

export default store;
