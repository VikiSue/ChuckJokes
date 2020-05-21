import {ON_FAVORIE_HIDE, ON_FAVORIE_SHOW} from '../../types';

export const onFavoriteShow = () => {
    return ({type: ON_FAVORIE_SHOW})
};

export const onFavoriteHide = () => {
    return ({type: ON_FAVORIE_HIDE})
};