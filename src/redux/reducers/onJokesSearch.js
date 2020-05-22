import {
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    ON_FAVORIE_HIDE,
    ON_FAVORIE_SHOW,
} from '../../types';

const initialValue = {
    categories: [],
    jokes: [],
    searchNull: null,
    isLoading: false,
    onFavShow: false,
};

const onJokesSearch = (state = initialValue, action) => {
    switch (action.type) {
        case GET_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,

                isLoading: false,
            };
        case GET_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SEARCH_SUCCESS:
            let res = action.payload.length === 0 && 'Sorry, nothing found :(';
            return {
                ...state,
                jokes: action.payload instanceof Array ? action.payload : [action.payload],
                searchNull: res,
                isLoading: false,
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case ON_FAVORIE_SHOW:
            return {
                ...state,
                onFavShow: true,
            };
        case ON_FAVORIE_HIDE:
            return {
                ...state,
                onFavShow: false,
            };
        default:
            return state;
    }
};
export default onJokesSearch;
