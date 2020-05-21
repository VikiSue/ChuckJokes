import {
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE
} from "../../types";
import { fetchData } from "../../services/fetchData";

export const getCategories = () => dispatch => {
    dispatch({ type: GET_CATEGORY_REQUEST });
    fetchData("https://api.chucknorris.io/jokes/categories")
        .then(result =>
            dispatch({
                type: GET_CATEGORY_SUCCESS,
                payload:  result
            })
        )
        .catch(err => {
            dispatch({ type: GET_CATEGORY_FAILURE, err });
        });
};
