import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../../types";
import { fetchData } from "../../services/fetchData";

export const onSearch = (searchType, category, text) => dispatch => {
  dispatch({ type: SEARCH_REQUEST });
  const url = "https://api.chucknorris.io/jokes";
  const endPoint =
    searchType === "random"
      ? "/random"
      : searchType === "byCategory"
      ? `/random?category=${category}`
      : `/search?query=${text}`;


  fetchData(`${url}${endPoint}`)
       .then(result =>
      dispatch({
        type: SEARCH_SUCCESS,
        payload: searchType === "byText" ? result.result : result
      })
    )
    .catch(err => {
      dispatch({ type: SEARCH_FAILURE, err });
    });
};
