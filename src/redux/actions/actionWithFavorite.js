import {ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from '../../types';

export const addToFavorite = (id, jokes) => {
    return ({type: ADD_TO_FAVORITE, payload: {id, jokes}})
};

export const deleteFromFavorite = (id) => {
    return ({type: DELETE_FROM_FAVORITE, payload: id})
};