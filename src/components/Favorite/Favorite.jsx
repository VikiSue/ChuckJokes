import React from 'react';
import FavoriteList from './FavoriteList';

const Favorite = ({ favoriteList }) => {
    return (
        <aside className="favorite">
            <h3 className="favorite__title">Favorite</h3>
            <FavoriteList favoriteList={favoriteList} />
        </aside>
    );
};
export default Favorite;
