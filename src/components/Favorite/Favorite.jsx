import React from 'react';
import FavoriteList from './FavoriteList';
import PropTypes from 'prop-types';

const Favorite = ({ favoriteList }) => {
    return (
        <aside className="favorite">
            <h3 className="favorite__title">Favorite</h3>
            <FavoriteList favoriteList={favoriteList} />
        </aside>
    );
};
export default Favorite;

Favorite.propTypes = {
    favoriteList: PropTypes.arrayOf(PropTypes.object).isRequired
};